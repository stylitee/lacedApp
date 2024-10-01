export const fetchProductData = async () => {
    const response = await fetch('https://assets.staging.laced.com/laced_app_assets/product.json');
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  };
  
