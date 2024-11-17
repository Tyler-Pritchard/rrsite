import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../slices/productSlice';
import { RootState, AppDispatch } from '../../../store/store_index'; // Import AppDispatch
import { ProductGrid, ProductCard, ProductImage, ProductInfo } from './Products.styles';
import { useNavigate } from 'react-router-dom';

const ProductsPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch(); // Explicitly type dispatch
  const navigate = useNavigate();
  const { products, loading, error } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCardClick = (id: string) => {
    navigate(`/product/${id}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ProductGrid>
      {products.map((product) => (
        <ProductCard key={product.name} onClick={() => handleCardClick(product.name)}>
          <ProductImage src={product.imageUrl} alt={product.name} />
          <ProductInfo>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <span>{product.category}</span>
          </ProductInfo>
        </ProductCard>
      ))}
    </ProductGrid>
  );
};

export default ProductsPage;
