import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addFavorite: (state, {payload}) => {
      state.favorites.push(payload);
    },
    removeFavorite: (state, {payload}) => {
      const removeIndex = state.favorites.findIndex(
        favorite => favorite.id === payload.id,
      );
      state.favorites.splice(removeIndex, 1);
    },
  },
});

export const {addFavorite, removeFavorite} = userSlice.actions;

export default userSlice.reducer;
