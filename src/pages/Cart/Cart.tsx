import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store/store_index";
import { removeItem } from "../../slices/cartSlice";
import {
  CartContainer,
  Overlay,
  CartHeader,
  CartItems,
  CartItem,
  CartItemImage,
  CartItemDetails,
  CartSummary,
  CloseButton,
  CheckoutButton,
  KeepShoppingButton,
  RemoveButton,
  PaymentIcons,
} from "./Cart.styles";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const dispatch: AppDispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.cart);

  const handleRemoveItem = (productId: string) => {
    dispatch(removeItem(productId));
  };

  const subtotal = items.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <>
      {/* Overlay for closing the Cart */}
      <Overlay isOpen={isOpen} onClick={onClose} />

      {/* Cart container with sliding animation */}
      <CartContainer isOpen={isOpen}>
        <CartHeader>
          <h2>Your Cart ({items.length})</h2>
          <CloseButton onClick={onClose} aria-label="Close Cart">
            X
          </CloseButton>
        </CartHeader>
        <CartItems>
          {items.length > 0 ? (
            items.map((item) => (
              <CartItem key={item.product.id}>
                <CartItemImage src={item.product.imageUrl} alt={item.product.name} loading="lazy" />
                <CartItemDetails>
                  <h3>{item.product.name}</h3>
                  <p>Size: {item.product.size || "N/A"}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>${(item.product.price * item.quantity).toFixed(2)}</p>
                  <RemoveButton
                    onClick={() => handleRemoveItem(item.product.id)}
                    aria-label={`Remove ${item.product.name}`}
                  >
                    Remove
                  </RemoveButton>
                </CartItemDetails>
              </CartItem>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
        </CartItems>
        <CartSummary>
          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <KeepShoppingButton onClick={onClose}>Keep Shopping</KeepShoppingButton>
          <CheckoutButton disabled={items.length === 0}>Checkout</CheckoutButton>
          <PaymentIcons>
            <span>Visa</span>
            <span>MasterCard</span>
            <span>PayPal</span>
          </PaymentIcons>
        </CartSummary>
      </CartContainer>
    </>
  );
};

export default Cart;
