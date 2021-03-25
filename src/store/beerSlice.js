import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const data = localStorage.getItem("wishes");
  if (data === null || data.length === 0) {
    return [];
  } else {
    return JSON.parse(data);
  }
};

const saveToLocalStorage = (data) => {
  localStorage.setItem("wishes", JSON.stringify(data));
};

export const fetchBeers = createAsyncThunk("beer/search", async (query) => {
  const response = await fetch(
    `https://api.punkapi.com/v2/beers?beer_name=${query} `
  );
  const res = await response.json();
  console.log(res);
  return res;
});

export const beerSlice = createSlice({
  name: "beers",
  initialState: {
    searchResults: [],
    wishlist: loadFromLocalStorage(),
  },
  reducers: {
    addWishlist: (state, action) => {
      const newState = {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };

      saveToLocalStorage(newState.wishlist);

      return newState;
    },

    deleteWishlist: (state, action) => {
      const newState = {
        ...state,
        wishlist: state.wishlist.filter((wish) =>  {
          if (wish.id !== action.payload) {
            return wish;
           
          }
        }),
      };

      saveToLocalStorage(newState.wishlist);

      return newState;
    },
  },

  extraReducers: {
    [fetchBeers.fulfilled]: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const {addWishlist, deleteWishlist}=beerSlice.actions;


export const selectSearchResults = (state) => state.beer.searchResults;
export const selectWish = (state) => state.beer.wishlist;

export default beerSlice.reducer;
