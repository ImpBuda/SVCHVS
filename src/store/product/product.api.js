import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const productApi = createApi({

    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:8090/api/cards",
    }),
    tagTypes: ["Product"],
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => ({

                method: "GET"
            }),
            providesTags: ["Product"]
        }),
        addProduct: build.mutation({
            query: (payload) => ({
                method: "POST",
                body: payload,
                headers: {
                    'Content-type': 'application/json',
                },
            }),
            invalidatesTags: ["Product"]
        }),
        removeProduct: build.mutation({
            query: (id) => ({
                url: `${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Product"]
        }),
        updateProduct: build.mutation({
            query: (product) => ({
                url: `${product.id}`,
                method: "PUT",
                body: product,
                headers: {
                    'Content-type': 'application/json',
                },
            }),
            invalidatesTags: ["Product"]
        }),
    }),
});

export const {
    useGetProductsQuery,
    useLazyGetProductsQuery,
    useAddProductMutation,
    useUpdateProductMutation,
    useRemoveProductMutation,
} = productApi
