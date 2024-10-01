import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  menu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 250,
    height: '100%',
    backgroundColor: '#fff',
    padding: 15,
    elevation: 4,
    zIndex: 1000,
  },
  backButtonImage: {
    width: 24,
    height: 24,
  },  
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  backButton: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    fontWeight: 'bold',
    color: '#fff', 
    textAlign: 'center',
  },
  menuButton: {
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  menuButtonText: {
    fontWeight: '500',
    color: '#000',
    marginLeft: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginHorizontal: 10,
  },
  headerIcon: {
    fontSize: 24,
    color: '#000',
  },
  bagContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    right: -10,
    top: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  wrapper: {
    height: 300,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  shoeImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  productInfo: {
    padding: 15,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  productStyleCode: {
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
  },
  descriptionContainer: {
    marginBottom: 15,
  },
  productDescription: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  showMore: {
    color: 'blue',
    fontSize: 14,
    marginTop: 5,
  },
  productDetail: {
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginRight: 10,
  },
  sizeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sizeLabels: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  sizeLabelBox: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10,
  },
  sizeLabelBoxSelected: {
    backgroundColor: 'lightblue',
    borderColor: 'lightblue',
  },
  sizeLabel: {
    fontWeight: 'bold',
    color: '#000',
  },
  sizeLabelTextSelected: {
    color: '#fff',
  },
  sizeContainer: {
    marginBottom: 15,
  },
  sizesList: {
    marginBottom: 20,
  },
  sizeButton: {
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  sizeButtonSelected: {
    backgroundColor: 'lightblue',
    borderColor: 'lightblue',
  },
  sizeText: {
    color: '#000',
  },
  productPrice: {
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
  addToBagButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  addToBagText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'red',
  },
});

export default styles;
