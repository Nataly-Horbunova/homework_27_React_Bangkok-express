import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: [],
        isCartOpen: false,
        isOrderPlaced: false,
        shake: false,
        order: {},
        isLoading: false
    },

    reducers: {
        addToCart: (state, action) => {
            const isPresent = state.data.find(elem => elem.id === action.payload.id);
            if (!isPresent) {
                state.data = [...state.data, {...action.payload, count: 1}];
            } else {
                state.data = state.data.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, count: item.count+1 };
                    }
                    return item;
                });
            }
        },
        
        removeFromCart: (state, action) => {
            if(action.payload.count === 1) {
                state.data = state.data.filter((item) => item.id !== action.payload.id);
            } else if(action.payload.count > 1) {
                state.data = state.data.map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, count: item.count-1 };
                    }
                    return item;
                });
            }
        },

        clearCart: (state, action) => {
            state.data = action.payload;
        },

        setIsCartOpen: (state, action) => {
            state.isCartOpen = action.payload;
        },

        setIsOrderPlaced: (state, action) => {
            state.isOrderPlaced = action.payload;
        },

        setShake: (state, action) => {
            state.shake = action.payload;
        },
       
        setOrder: (state, action) => {
            state.order = action.payload;
        },

        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
    }
});

export const { 
    addToCart, 
    removeFromCart, 
    setIsCartOpen, 
    setIsOrderPlaced,
    setShake, 
    setOrder, 
    clearCart, 
    setLoading 
} = cartSlice.actions;
export default cartSlice.reducer;
