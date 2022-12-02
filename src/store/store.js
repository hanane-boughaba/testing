import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "../app/movieSlice";

export const store = configureStore({
    reducer: {
        movie: movieSlice.reducer 
    }
})