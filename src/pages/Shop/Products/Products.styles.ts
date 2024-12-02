import styled from "styled-components";

export const ProductGrid = styled.div`
  padding-top: 13rem;
  border: 2px solid black;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`;
