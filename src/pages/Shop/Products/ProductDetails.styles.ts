import styled from "styled-components";

export const ProductDetailsContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 24px;
  padding-top: 15rem;
`;

export const ProductImage = styled.img`
  max-width: 300px;
  height: auto;
`;

export const ProductInfo = styled.div`
  h1 {
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 8px;
  }
  h3 {
    margin: 16px 0;
  }
  span {
    font-size: 0.9em;
    color: gray;
  }
`;

export const AddToCartContainer = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const QuantityInput = styled.input`
  width: 60px;
  padding: 4px;
  font-size: 1rem;
`;

export const AddToCartButton = styled.button`
  padding: 8px 16px;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #0056b3;
  }
`;
