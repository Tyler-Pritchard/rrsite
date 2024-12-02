import styled from "styled-components";

export const ProductCardContainer = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ProductInfo = styled.div`
  text-align: center;

  h3 {
    margin: 8px 0;
    font-size: 1.2rem;
    font-weight: bold;
  }

  p {
    margin: 4px 0;
    font-size: 1rem;
  }

  span {
    font-size: 0.9em;
    color: gray;
  }
`;
