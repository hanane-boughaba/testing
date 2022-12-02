import { createAsyncThunk, createSlice } from "@reduxjs/toolkit/dist";

const apiKey = "832e457ee40e776b19e213dbc3e3a00d";
const baseURL = "https://api.themoviedb.org/3/";

export const fetchAPI = createAsyncThunk("fetchAPI", async () => {
  const response = await fetch(
    baseURL + "discover/movie?sort_by=popularity.desc&api_key=" + apiKey
  );

  return response.json();
});

export const fetchCategory = createAsyncThunk(
  "fetchCategory",
  async (categoryId) => {
    const response = await fetch(
      baseURL + "list/" + categoryId + "?api_key=" + apiKey
    );

    return response.json();
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    allMovies: [],
    categoryMovies: [],
    searchedMovies: [],
  },
  reducers: {
    searchMovie: (state, action) => {
      state.searchedMovies = state.allMovies.filter((movie) => {
        if (
          movie.original_title
            .toLowerCase()
            .indexOf(action.payload.toLowerCase()) > -1
        ) {
          return true;
        } else if (
          movie.overview.toLowerCase().indexOf(action.payload.toLowerCase()) >
          -1
        ) {
          return true;
        } else {
          return false;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAPI.fulfilled, (state, action) => {
      state.allMovies = action.payload.results;
    });
    builder.addCase(fetchAPI.rejected, (state, action) => {
      console.log("Fetch the API went wrong");
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.categoryMovies = action.payload;
    });
    builder.addCase(fetchCategory.rejected, (state, action) => {
      console.log("Fetch the API went wrong");
    });
  },
});

export const { generateCategory } = movieSlice;
export const { actions } = movieSlice;
