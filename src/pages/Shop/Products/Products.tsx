import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../slices/productSlice';
import { RootState, AppDispatch } from '../../../store/store_index';
import { ProductGrid, ProductCard, ProductImage, ProductInfo } from './Products.styles';
import { useNavigate } from 'react-router-dom';

const ProductsPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  // Ensure proper typing of Redux state
  const { products, loading, error } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products on mount
  }, [dispatch]);

  const handleCardClick = (id: string) => {
    navigate(`/product/${id}`); // Navigate to the product detail page
  };

  // Display loading and error states
  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  // Render the product grid
  return (
    <ProductGrid>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} onClick={() => handleCardClick(product.id)}>
            <ProductImage src={product.imageUrl} alt={product.name} />
            <ProductInfo>
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <span>{product.category}</span>
            </ProductInfo>
          </ProductCard>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </ProductGrid>
  );
};

export default ProductsPage;
