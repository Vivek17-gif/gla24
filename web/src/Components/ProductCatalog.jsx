// src/components/ProductCatalog.jsx
import React, { useState } from 'react';
import ProductList from './ProductList';
import SearchBar from './SearchBar';

// Sample product data
const allProducts = [
  { id: 1, name: 'Apple Macbook', price: '$1000', image: 'https://www.bhphotovideo.com/images/images2500x2500/apple_z0um_mpxv21_bh_macbook_pro_tb_i5_3_1ghz_16gb_1343042.jpg' },
  { id: 2, name: 'Sony Speaker', price: '$200', image: 'https://www.radiotvcentre.pk/wp-content/uploads/2021/07/GTK-XB7-Sony-Mobile-Speaker-price-in-Pakistan.jpg' },
  { id: 3, name: 'Nike Jordan shoes', price: '$1500', image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bd06a80e-1568-47c4-8fbb-6b1ea4b9ee2f/JORDAN+LUKA+3+PF.png' },
  { id: 4, name: 'Rolex Watch', price: '$2000', image: 'https://media.rolex.com/image/upload/q_auto:eco/f_auto/t_v7-majesty/c_limit,w_800/v1/catalogue/2024/upright-c/m136668lb-0001' },
  { id: 5, name: 'Prada shoes', price: '$350', image: 'https://cdn-images.farfetch-contents.com/18/21/18/11/18211811_38769380_1000.jpg' },
  { id: 6, name: 'Balenciaga shoes', price: '$600', image: 'https://cdn-images.farfetch-contents.com/22/38/69/22/22386922_53035824_1000.jpg' },
  { id: 7, name: 'Louis Vuitton wallet', price: '$900', image: 'https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-multiple-wallet--M11531_PM2_Front%20view.png?wid=1090&hei=1090' },
  { id: 8, name: 'Gucci Leather belt', price: '$450', image: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1583955903/414516_0YA0G_1000_001_100_0000_Light-GG-Marmont-leather-belt-with-shiny-buckle.jpg' },
  { id: 9, name: 'Dior sunglasses', price: '$600', image: 'https://assets.christiandior.com/is/image/diorprod/CDLKA1UXTH4B8_E03?$default_GHC_870$&crop=66,757,1866,790&bfc=on&qlt=85' }
];

const ProductCatalog = () => {
  const [products, setProducts] = useState(allProducts);

  const handleSearch = (query) => {
    const filteredProducts = allProducts.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  const handleViewAll = () => {
    setProducts(allProducts);
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      <button
        onClick={handleViewAll}
        className="bg-gray-500 text-white py-2 px-4 rounded mb-4 hover:bg-gray-600"
      >
        View All Products
      </button>
      <ProductList products={products} />
    </div>
  );
};

export default ProductCatalog;
