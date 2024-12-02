// src/utils/calculateCartTotal.ts

import { CartItem } from "../types/CartItem"; // Ensure this matches the actual type of your CartItem

/**
 * Calculates the total price of all items in the cart.
 * @param cartItems - An array of CartItem objects.
 * @returns The total price as a number.
 */
export const calculateCartTotal = (cartItems: CartItem[]): number => {
    if (!cartItems || cartItems.length === 0) {
        return 0; // Return 0 if the cart is empty or invalid
    }

    return cartItems.reduce((total, item) => {
        return total + item.product.price * item.quantity;
    }, 0);
};
