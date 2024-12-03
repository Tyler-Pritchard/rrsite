import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createAxiosInstance } from '../axiosConfig';

const axiosInstance = createAxiosInstance('store');

// Define Product type
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  imageUrl: string;
  stock: number;
}

// Initial state
interface ProductState {
  products: Product[];
  product: Product | null; // Add `product` for a single product
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  product: null, // Initialize as null
  loading: false,
  error: null,
};

// Async thunk to fetch all products
export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get('/');
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || 'An error occurred while fetching products');
  }
});

// Async thunk to fetch a single product
export const fetchProduct = createAsyncThunk('products/fetchProduct', async (id: string, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get(`/${id}`);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || 'An error occurred while fetching the product');
  }
});

// Create product slice
const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetching all products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Handle fetching a single product
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default productSlice.reducer; // Default export for the slice reducer
