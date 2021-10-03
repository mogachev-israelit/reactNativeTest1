import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    image: null,
};

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        loadImage: (state, action) => {

            state.image = action.payload.image;
        },
    },
});

export const { loadImage } = homeSlice.actions;

export default homeSlice.reducer;