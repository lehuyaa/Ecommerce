import {createSlice} from '@reduxjs/toolkit';
import {generatePersistConfig} from '../../utilities/helper';
import {persistReducer} from 'redux-persist';

interface Cart {
  listProduct: any;
  numberCart: number;
}

const initialState: Cart = {
  listProduct: [],
  numberCart: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, {payload}) => {
      console.log('payload', payload);
      if (state.listProduct.length === 0) {
        const product = {
          id: payload.id,
          productName: payload.productName,
          productPrice: payload.productPrice,
          productImage: payload.productImage,
          quantity: 1,
        };
        state.listProduct.push(product);
      } else {
        const isCheck =
          state.listProduct.filter(e => e.id === payload.id).length > 0;
        if (isCheck) {
          state.listProduct.map((item, key) => {
            if (item.id === payload.id) {
              state.listProduct[key].quantity++;
            }
          });
        } else {
          const product = {
            id: payload.id,
            productName: payload.productName,
            productPrice: payload.productPrice,
            productImage: payload.productImage,
            quantity: 1,
          };
          state.listProduct.push(product);
        }
      }
      state.numberCart++;
    },
    increaseQuantityToCart: (state, {payload}) => {
      state.listProduct.map((item, key) => {
        if (item.id === payload) {
          state.listProduct[key].quantity++;
        }
      });
      state.numberCart++;
    },
    decreaseQuantityToCart: (state, {payload}) => {
      state.listProduct.map((item, key) => {
        if (item.id === payload) {
          state.listProduct[key].quantity--;
        }
      });
      state.numberCart--;
    },
    removeToCart: (state, {payload}) => {
      const newCart =
        state.listProduct.filter(e => e.id !== payload.id).length > 0;
      state.listProduct = newCart;
      state.numberCart;
    },
  },
});
const persistConfig = generatePersistConfig('cart', [
  'listProduct',
  'numberCart',
]);

export const {addToCart, increaseQuantityToCart, decreaseQuantityToCart} =
  cartSlice.actions;
export default persistReducer<Cart>(persistConfig, cartSlice.reducer);
