import {createSlice} from '@reduxjs/toolkit';
import {generatePersistConfig} from '../../utilities/helper';
import {persistReducer} from 'redux-persist';

interface Suggest {
  listSuggest: any;
}

const initialState: Suggest = {
  listSuggest: [],
};

const suggestSlice = createSlice({
  name: 'suggest',
  initialState,
  reducers: {
    addToSuggest: (state, {payload}) => {
      state.listSuggest = payload;
    },
  },
});
const persistConfig = generatePersistConfig('suggest', ['listSuggest']);

export const {addToSuggest} = suggestSlice.actions;
export default persistReducer<Suggest>(persistConfig, suggestSlice.reducer);
