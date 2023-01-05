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

export const fetchSearch = createAsyncThunk("fetchSearch", async (query) => {
  const response = await fetch(
    baseURL + "?api_key=" + apiKey + "&query=" + query
  );

  return response.json();
});

export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    allMovies: [],
    categoryMovies: [],
    searchedMovies: [],
    searching: false,
  },
  reducers: {
    searchMovie: (state, action) => {
      if (state.categoryMovies.length > 0) {
        state.searchedMovies = state.categoryMovies.filter((movie) => {
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
      } else if (state.searchedMovies.length > 0) {
        state.searchedMovies = state.searchedMovies.filter((movie) => {
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
      } else {
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
      }
    },
    toggleSearching: (state, { payload }) => {
      if (payload === 0) {
        state.searching = false;
      } else {
        state.searching = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAPI.fulfilled, (state, action) => {
      state.allMovies = action.payload.results;
      state.categoryMovies = [];
      state.searchedMovies = [];
      state.searching = false;
    });
    builder.addCase(fetchAPI.rejected, (state, action) => {
      console.log("Fetch the API went wrong");
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.categoryMovies = action.payload.items;
    });
    builder.addCase(fetchCategory.rejected, (state, action) => {
      console.log("Fetch the API went wrong");
    });
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.searchedMovies = action.payload.items;
    });
    builder.addCase(fetchSearch.rejected, (state, action) => {
      console.log("Fetch the API went wrong");
    });
  },
});

export default movieSlice;
export const { searchMovie, toggleSearching } = movieSlice.actions;
