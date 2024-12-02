import styled, { keyframes } from "styled-components";

// Define a fade-in animation for the overlay
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Define a fade-out animation for the overlay
const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Overlay = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.5s ease-in-out;
`;

export const CartContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  max-width: 90%;
  height: 100%;
  background: #fff;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});
  transition: transform 0.5s ease-in-out;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  h2 {
    margin: 0;
    color: #333; /* Explicit color for header text */
  }
`;

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  font-size: 1.5rem;
  color: #333; /* Explicit color for close button */
  cursor: pointer;
`;

export const CartItems = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-bottom: 1rem;
`;

export const CartItem = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const CartItemImage = styled.img`
  width: 72px;
  height: 72px;
  object-fit: cover;
`;

export const CartItemDetails = styled.div`
  flex: 1;

  h3 {
    margin: 0;
    font-size: 1rem;
    color: #333; /* Explicit color for item name */
  }

  p {
    margin: 0.2rem 0;
    font-size: 0.9rem;
    color: #555; /* Explicit color for item details */
  }
`;

export const RemoveButton = styled.button`
  background: #ff4d4d;
  border: none;
  color: #fff;
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  font-size: 0.9rem;
  margin-top: 0.5rem;

  &:hover {
    background: #ff3333;
  }
`;

export const CartSummary = styled.div`
  border-top: 1px solid #ddd;
  padding-top: 1rem;

  p {
    margin-bottom: 1rem;
    color: #333; /* Explicit color for subtotal text */
  }
`;

export const KeepShoppingButton = styled.button`
  background: #007bff;
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-right: 1rem;

  &:hover {
    background: #0056b3;
  }
`;

export const CheckoutButton = styled.button`
  background: #28a745;
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background: #218838;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

export const PaymentIcons = styled.div`
  margin-top: 1rem;

  span {
    margin-right: 1rem;
    font-size: 0.8rem;
    color: #666; /* Explicit color for payment icons */
  }
`;
