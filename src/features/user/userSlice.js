import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
  currentArticle: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addFavorite: state => {
      state.currentArticle.isFavorite = true;
      state.favorites.push(state.currentArticle);
    },
    removeFavorite: state => {
      state.currentArticle.isFavorite = false;
      const removeIndex = state.favorites.findIndex(
        item => item.key === state.currentArticle.key,
      );
      console.log(removeIndex);
      state.favorites.splice(removeIndex, 1);
    },
    setCurrentArticle: (state, {payload}) => {
      state.currentArticle = payload;
    },
  },
});

export const {addFavorite, removeFavorite, setCurrentArticle} =
  userSlice.actions;

export default userSlice.reducer;
