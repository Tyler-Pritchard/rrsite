import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../slices/productSlice";
import { RootState, AppDispatch } from "../../../store/store_index";
import { addItem } from "../../../slices/cartSlice";
import { useParams, useNavigate } from "react-router-dom";
import {
  ProductDetailsContainer,
  ProductImage,
  ProductInfo,
  AddToCartContainer,
  QuantityInput,
  AddToCartButton,
} from "./ProductDetails.styles";
import Cart from "../../Cart/Cart"; // Import Cart component

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extract product ID from route params
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  // Select product state from Redux store
  const { product, loading, error } = useSelector((state: RootState) => state.product);

  // State for managing quantity
  const [quantity, setQuantity] = useState(1);

  // State for managing cart overlay visibility
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id)); // Fetch product details when the component mounts
    }
  }, [dispatch, id]);

  useEffect(() => {
    // Reset quantity when product changes
    if (product?.stock) {
      setQuantity(1);
    }
  }, [product]);

  const handleBackToProducts = useCallback(() => {
    navigate("/shop/products"); // Navigate back to the product list
  }, [navigate]);

  const handleAddToCart = useCallback(() => {
    if (product && quantity > 0) {
      dispatch(addItem({ product, quantity })); // Use addItem action here
      setIsCartOpen(true); // Open cart overlay
      console.log(`${quantity} ${product.name}(s) added to cart!`);
    }
  }, [dispatch, product, quantity]);

  const handleCartClose = useCallback(() => {
    setIsCartOpen(false); // Close cart overlay
  }, []);

  // Display loading, error, or not found states
  if (loading) return <p role="status">Loading product details...</p>;
  if (error) return <p role="alert">Error: {error}</p>;
  if (!product) return <p>Product not found.</p>;

  const { name, description, price, stock, category, imageUrl } = product;

  // Render product details and cart overlay
  return (
    <>
      <ProductDetailsContainer>
        <button onClick={handleBackToProducts} style={{ marginBottom: "1rem" }}>
          Back to Products
        </button>
        <ProductImage src={imageUrl} alt={name} loading="lazy" />
        <ProductInfo>
          <h1>{name}</h1>
          <p>{description}</p>
          <h3>${price.toFixed(2)}</h3>
          <p>Stock: {stock}</p>
          <span>Category: {category}</span>
          <AddToCartContainer>
            <QuantityInput
              type="number"
              value={quantity}
              min="1"
              max={stock}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const value = Math.max(1, Math.min(stock, Number(e.target.value)));
                setQuantity(value);
              }}
            />
            <AddToCartButton onClick={handleAddToCart} disabled={quantity < 1 || quantity > stock}>
              Add to Cart
            </AddToCartButton>
          </AddToCartContainer>
        </ProductInfo>
      </ProductDetailsContainer>
      <Cart isOpen={isCartOpen} onClose={handleCartClose} /> {/* Render Cart overlay */}
    </>
  );
};

export default ProductDetailsPage;
