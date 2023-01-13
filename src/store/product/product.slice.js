import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {DATA} from "../../data/items";

const PRODUCT_KEY = "PRODUCT_KEY";

const getInitialState = () => {
    if (!localStorage.getItem(PRODUCT_KEY) || localStorage.getItem(PRODUCT_KEY).length === 0) {
        localStorage.setItem(PRODUCT_KEY, JSON.stringify(DATA));
    }

    return JSON.parse(localStorage.getItem(PRODUCT_KEY))
}

const initialState = {
    products: getInitialState(),
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct(state, action) {
            const maxId = Math.max(...state.products.map(o => o.id));
            action.payload.id = maxId + 1;
            state.products.push(action.payload);
            localStorage.setItem(PRODUCT_KEY, JSON.stringify(state.products));
        },
        removeProduct(state, action) {
            state.products = state.products.filter((f) => f.id !== action.payload);
            localStorage.setItem(PRODUCT_KEY, JSON.stringify(state.products));
        },
        editProduct(state, action) {
            const product = state.products.find((_) => _.id === action.payload.id);

            if (product) {
                product.name = action.payload.name;
                product.price = action.payload.price;
                product.img = action.payload.img;
                product.count = action.payload.count;
            }
            localStorage.setItem(PRODUCT_KEY, JSON.stringify(state.products));
        },
    },
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;