import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        products: [],
        carouselProducts: [],
        categoryFilter: 'All',
        noNutsFilter: false,
        vegeterianFilter: false,
        spicinessFilter: 3,
    },

    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload;
        },

        setCarouselProducts: (state, action) => {
            state.carouselProducts = action.payload;
        },

        setCategoryFilter: (state, action) => {
            state.categoryFilter = action.payload;
        },

        setNoNutsFilter: (state, action) => {
            state.noNutsFilter = action.payload;
        },

        setVegeterianFilter: (state, action) => {
            state.vegeterianFilter = action.payload;
        },

        setSpicinessFilter: (state, action) => {
            state.spicinessFilter = action.payload;
        },
    }
});

export const { 
    setProducts,
    setCarouselProducts,
    setCategoryFilter,
    setNoNutsFilter, 
    setVegeterianFilter, 
    setSpicinessFilter
} = menuSlice.actions;

export default menuSlice.reducer;

