import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../slices/productSlice";
import { RootState, AppDispatch } from "../../../store/store_index";
import { ProductGrid, ProductCard, ProductImage, ProductInfo } from "./Products.styles";
import { useNavigate } from "react-router-dom";

const ProductsPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  // Redux state with proper typing
  const { products, loading, error } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProducts()); // Fetch products on component mount
  }, [dispatch]);

  const handleCardClick = (id: string) => {
    navigate(`/shop/products/${id}`); // Navigate to product details page
  };

  if (loading) return <p role="status">Loading products...</p>;
  if (error) return <p role="alert">Error: {error}</p>;

  return (
    <ProductGrid>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product) => {
          const { id, name, price, category, imageUrl } = product;

          // Ensure valid product data before rendering
          if (!id || !name || !price || !imageUrl) {
            return null;
          }

          return (
            <ProductCard key={id} onClick={() => handleCardClick(id)} role="button" tabIndex={0}>
              <ProductImage src={imageUrl} alt={name} />
              <ProductInfo>
                <h3>{name}</h3>
                <p>${price.toFixed(2)}</p>
                <span>{category}</span>
              </ProductInfo>
            </ProductCard>
          );
        })
      ) : (
        <p>No products available.</p>
      )}
    </ProductGrid>
  );
};

export default ProductsPage;
