import {configureStore} from "@reduxjs/toolkit";
import {productReducer} from "./product/product.slice";
import {setupListeners} from "@reduxjs/toolkit/query";
import {productApi} from "./product/product.api";

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        product: productReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware)
});

setupListeners(store.dispatch)