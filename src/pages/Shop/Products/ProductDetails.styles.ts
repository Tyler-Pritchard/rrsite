import styled from 'styled-components';

export const ProductDetailsContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 24px;
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
