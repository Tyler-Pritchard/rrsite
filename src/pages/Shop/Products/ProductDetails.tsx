import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../../slices/productSlice';
import { RootState, AppDispatch } from '../../../store/store_index'; // Import AppDispatch
import { useParams } from 'react-router-dom';
import { ProductDetailsContainer, ProductImage, ProductInfo } from './ProductDetails.styles';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extract ID from route params
  const dispatch: AppDispatch = useDispatch(); // Explicitly type dispatch
  const { product, loading, error } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id)); // Dispatch the thunk
    }
  }, [dispatch, id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <ProductDetailsContainer>
      <ProductImage src={product.imageUrl} alt={product.name} />
      <ProductInfo>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h3>${product.price}</h3>
        <p>Stock: {product.stock}</p>
        <span>Category: {product.category}</span>
      </ProductInfo>
    </ProductDetailsContainer>
  );
};

export default ProductDetailsPage;
