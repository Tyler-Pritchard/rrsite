import React from "react";
import { Product } from "../../types/Product";
import { ProductCardContainer, ProductImage, ProductInfo } from "./ProductCard.styles";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { name, price, category, imageUrl } = product;

  return (
    <ProductCardContainer onClick={onClick} role="button" tabIndex={0}>
      <ProductImage src={imageUrl} alt={name} />
      <ProductInfo>
        <h3>{name}</h3>
        <p>${price.toFixed(2)}</p>
        <span>{category}</span>
      </ProductInfo>
    </ProductCardContainer>
  );
};

export default ProductCard;
