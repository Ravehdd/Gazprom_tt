import { configureStore, createSelector } from "@reduxjs/toolkit";
import { productsSlice } from "./products.slice";
import { useDispatch, useSelector } from "react-redux";



export const store = configureStore({
    reducer: {
        [productsSlice.name]: productsSlice.reducer
    }
  });

export type AppDispatch = typeof store.dispatch;

export type AppState = ReturnType<typeof store.getState>;
export const createAppSelector = createSelector.withTypes<AppState>();
export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppdispatch = useDispatch.withTypes<AppDispatch>();