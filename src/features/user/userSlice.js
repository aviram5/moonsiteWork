import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getCartsByChunk, getUser, updateCartItemAmount} from '../../firebase';

export const loadUser = createAsyncThunk('users/loadUser', async () => {
  return await getUser();
});

export const getCarts = createAsyncThunk(
  'users/getCarts',
  async ({lastLoadedCartId = null} = parameters) => {
    return getCartsByChunk(lastLoadedCartId);
  },
);

export const updateCartItems = createAsyncThunk(
  'users/updateCartItems',
  async ({updatedItems}) => {
    return updateCartItems(updatedItems);
  },
);

const initialState = {
  numberOfCarts: 0,
  cartsList: {
    carts: [],
    lastLoadedCartId: null,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initialLoad: (state, {payload}) => {
      state.numberOfCarts = payload.numberOfCarts;
    },
  },
  extraReducers: {
    [getCarts.rejected]: state => {
      console.log('-getCarts-REJECTED');
    },
    [getCarts.fulfilled]: (state, {payload}) => {
      state.cartsList.carts = [...state.cartsList.carts, ...payload.cartsList];
      state.cartsList.lastLoadedCartId = payload.lastLoadedCartId;
    },
    [loadUser.rejected]: state => {
      console.log('-loadUser-REJECTED');
    },
    [loadUser.fulfilled]: (state, {payload}) => {
      state.numberOfCarts = payload.numberOfCarts;
    },
  },
});

export const {initialLoad} = userSlice.actions;

export default userSlice.reducer;
