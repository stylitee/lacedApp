import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ActivityIndicator,
  Animated,
} from 'react-native';
import Swiper from 'react-native-swiper';
import styles from './ProductDetailStyles';
import {fetchProductData} from './api';
import {Size, Product} from './ProductTypes'; 

const ProductDetails = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [loading, setLoading] = useState(true);
  const [sizeVariant, setSizeVariant] = useState<'uk' | 'eu' | 'us'>('uk');
  const [showMore, setShowMore] = useState(false);
  const [bagCount, setBagCount] = useState(0);
  const [menuVisible, setMenuVisible] = useState(false);
  const menuAnimation = useState(new Animated.Value(-300))[0];

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    Animated.timing(menuAnimation, {
      toValue: menuVisible ? -300 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductData();
        setProduct(data);
      } catch (error) {
        console.error('Fetch error:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, []);

  const handleSizeVariantChange = (variant: 'uk' | 'eu' | 'us') => {
    setSizeVariant(variant);
  };

  const renderSize = ({item}: {item: Size}) => {
    const sizeLabel =
      sizeVariant === 'uk' ? item.uk : sizeVariant === 'eu' ? item.eu : item.us;
    return (
      <TouchableOpacity
        style={[
          styles.sizeButton,
          selectedSize?.id === item.id ? styles.sizeButtonSelected : null,
        ]}
        onPress={() => setSelectedSize(item)}>
        <Text style={styles.sizeText}>{sizeLabel}</Text>
      </TouchableOpacity>
    );
  };

  const handleAddToBag = () => {
    if (selectedSize) {
      setBagCount(bagCount + 1);
    }
  };

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#000" style={styles.loader} />
    );
  }

  if (!product) {
    return <Text style={styles.errorText}>Failed to load product data</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <Text style={styles.headerIcon}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>LACED.</Text>
        <TouchableOpacity>
          <View style={styles.bagContainer}>
            <Text style={styles.headerIcon}>👜</Text>
            {bagCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{bagCount}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[styles.menu, {transform: [{translateX: menuAnimation}]}]}>
        <TouchableOpacity onPress={toggleMenu} style={styles.backButton}>
          <Image
            source={{
              uri: 'https://www.clipartmax.com/png/full/185-1853839_arrow-pointing-to-the-left-android-back-button-png.png',
            }}
            style={styles.backButtonImage}
          />
        </TouchableOpacity>
        {[
          {
            label: 'Profile',
            icon: 'https://static.thenounproject.com/png/843605-200.png',
          },
          {
            label: 'Shopping Cart',
            icon: 'https://cdn.icon-icons.com/icons2/1458/PNG/512/shoppingcartbutton_99694.png',
          },
          {
            label: 'Order History',
            icon: 'https://cdn-icons-png.flaticon.com/512/61/61122.png',
          },
          {
            label: 'Rewards',
            icon: 'https://static.vecteezy.com/system/resources/previews/021/595/423/original/award-icon-symbol-black-white-winner-element-transparent-background-free-png.png',
          },
          {
            label: 'FAQs',
            icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/FAQ_icon_%28Noun_like%29.svg/1200px-FAQ_icon_%28Noun_like%29.svg.png',
          },
          {
            label: 'Settings',
            icon: 'https://static-00.iconduck.com/assets.00/settings-icon-1964x2048-8nigtrtt.png',
          },
        ].map(menuItem => (
          <TouchableOpacity
            key={menuItem.label}
            style={styles.menuButton}
            onPress={() => {
            }}>
            <Image source={{uri: menuItem.icon}} style={styles.menuIcon} />
            <Text style={styles.menuButtonText}>{menuItem.label}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>

      <Swiper style={styles.wrapper} showsButtons={true} loop={false}>
        {product.imageUrls.map((url, index) => (
          <View key={index} style={styles.slide}>
            <Image source={{uri: url}} style={styles.shoeImage} />
          </View>
        ))}
      </Swiper>

      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>{product.title}</Text>
        <Text style={styles.productStyleCode}>
          AIR JORDAN / {product.styleCode}
        </Text>

        <View style={styles.descriptionContainer}>
          {showMore ? (
            <>
              <Text style={styles.productDescription}>
                {product.description}
              </Text>
              <Text style={styles.productDetail}>Color: {product.colour}</Text>
              <Text style={styles.productDetail}>
                Release Year: {product.releaseYear}
              </Text>
              <Text style={styles.productDetail}>
                Fitting Notes: {product.fittingNotes}
              </Text>
              <Text style={styles.productDetail}>
                Category: {product.category}
              </Text>
              <Text style={styles.productDetail}>
                Brand: {product.brand.name}
              </Text>
              <TouchableOpacity onPress={() => setShowMore(false)}>
                <Text style={styles.showMore}>Show Less</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={styles.productDescription} numberOfLines={1}>
                {product.description}
              </Text>
              <TouchableOpacity onPress={() => setShowMore(true)}>
                <Text style={styles.showMore}>Show More</Text>
              </TouchableOpacity>
            </>
          )}
        </View>

        <View style={styles.sizeContainer}>
          <View style={styles.sizeHeader}>
            <Text style={styles.sectionTitle}>Available Sizes:</Text>
            <View style={styles.sizeLabels}>
              {['uk', 'eu', 'us'].map(variant => (
                <TouchableOpacity
                  key={variant}
                  style={[
                    styles.sizeLabelBox,
                    sizeVariant === variant && styles.sizeLabelBoxSelected,
                  ]}
                  onPress={() =>
                    handleSizeVariantChange(variant as 'uk' | 'eu' | 'us')
                  }>
                  <Text
                    style={[
                      styles.sizeLabel,
                      sizeVariant === variant && styles.sizeLabelTextSelected,
                    ]}>
                    {variant.toUpperCase()}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <FlatList
            data={product.sizes}
            renderItem={renderSize}
            keyExtractor={item => item.uk}
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.sizesList}
          />
        </View>

        {selectedSize && (
          <Text style={styles.productPrice}>
            Price: {selectedSize.saleCollections[0].price.formatted}
          </Text>
        )}

        <TouchableOpacity
          style={[
            styles.addToBagButton,
            !selectedSize ? styles.disabledButton : null,
          ]}
          onPress={handleAddToBag}
          disabled={!selectedSize}>
          <Text style={styles.addToBagText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;
