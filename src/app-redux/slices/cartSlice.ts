import {createSlice} from '@reduxjs/toolkit';
import {generatePersistConfig} from '../../utilities/helper';
import {persistReducer} from 'redux-persist';
import {store} from '../store';
import {formatStringCurrency} from '../../utilities/format';

interface Cart {
  listProduct: any;
  numberCart: number;
  isNotEnought: boolean;
}

const initialState: Cart = {
  listProduct: [],
  numberCart: 0,
  isNotEnought: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, {payload}) => {
      const product = {
        id: payload.id,
        productName: payload.productName,
        productPrice: formatStringCurrency(payload.productPrice),
        productImage: payload.productImage,
        productQuantity: payload.quantity,
        idSeller: payload?.user?.id,
        idBuyer: payload?.idUser,
        nameSeller: payload?.user?.username,
        quantity: 1,
        isCheck: false,
        location: payload?.user?.shopAddress?.location,
      };
      if (state.listProduct.length === 0) {
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
      const newCart = state.listProduct.filter(e => e.id !== payload.id);
      state.listProduct = newCart;
      state.numberCart = state.listProduct.reduce((total, currentValue) => {
        return total + currentValue.quantity;
      }, 0);
    },
    removeOrderCart: state => {
      const newList = state.listProduct.filter(e => e.isCheck === false);
      state.listProduct = newList;
      state.numberCart = newList.length;
    },
    removeAllCart: state => {
      state.listProduct = [];
      state.numberCart = 0;
    },
    updateStatus: (state, {payload}) => {
      state.isNotEnought = payload;
    },
    checkProduct: (state, {payload}) => {
      const objIndex = state.listProduct.findIndex(obj => obj.id == payload);
      state.listProduct[objIndex].isCheck =
        !state.listProduct[objIndex].isCheck;
    },
  },
});
const persistConfig = generatePersistConfig('cart', [
  'listProduct',
  'numberCart',
]);

export const {
  addToCart,
  increaseQuantityToCart,
  decreaseQuantityToCart,
  removeToCart,
  removeOrderCart,
  removeAllCart,
  updateStatus,
  checkProduct,
} = cartSlice.actions;
export default persistReducer<Cart>(persistConfig, cartSlice.reducer);
