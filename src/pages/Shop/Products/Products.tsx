import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../slices/productSlice";
import { RootState, AppDispatch } from "../../../store/store_index";
import { ProductGrid } from "./Products.styles";
import ProductCard from "../../../components/shop/ProductCard";
import { useNavigate } from "react-router-dom";
import { Product } from "../../../types/Product";

const ProductsPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const { products, loading, error } = useSelector((state: RootState) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCardClick = (id: string) => {
    navigate(`/shop/products/${id}`);
  };

  if (loading) return <p role="status">Loading products...</p>;
  if (error) return <p role="alert">Error: {error}</p>;

  return (
    <ProductGrid>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((product: Product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => handleCardClick(product.id)}
          />
        ))
      ) : (
        <p>No products available.</p>
      )}
    </ProductGrid>
  );
};

export default ProductsPage;
