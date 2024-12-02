import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../slices/productSlice";
import { RootState, AppDispatch } from "../../../store/store_index";
import { useParams, useNavigate } from "react-router-dom";
import { ProductDetailsContainer, ProductImage, ProductInfo } from "./ProductDetails.styles";

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extract product ID from route params
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  // Select product state from Redux store
  const { product, loading, error } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id)); // Fetch product details when the component mounts
    }
  }, [dispatch, id]);

  const handleBackToProducts = () => {
    navigate("/shop/products"); // Navigate back to the product list
  };

  // Display loading, error, or not found states
  if (loading) return <p role="status">Loading product details...</p>;
  if (error) return <p role="alert">Error: {error}</p>;
  if (!product) return <p>Product not found.</p>;

  const { name, description, price, stock, category, imageUrl } = product;

  // Render product details
  return (
    <ProductDetailsContainer>
      <button onClick={handleBackToProducts} style={{ marginBottom: "1rem" }}>
        Back to Products
      </button>
      <ProductImage src={imageUrl} alt={name} />
      <ProductInfo>
        <h1>{name}</h1>
        <p>{description}</p>
        <h3>${price.toFixed(2)}</h3>
        <p>Stock: {stock}</p>
        <span>Category: {category}</span>
      </ProductInfo>
    </ProductDetailsContainer>
  );
};

export default ProductDetailsPage;
