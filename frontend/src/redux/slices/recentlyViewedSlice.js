// recentlyViewedSlice.js
import { createSlice } from "@reduxjs/toolkit";

const loadRecentlyViewedFromLocalStorage = () => {
	const storedData = localStorage.getItem("recentlyViewed");
	return storedData ? JSON.parse(storedData) : [];
};

const saveRecentlyViewedToLocalStorage = (data) => {
	localStorage.setItem("recentlyViewed", JSON.stringify(data));
};

const recentlyViewedSlice = createSlice({
	name: "recentlyViewed",
	initialState: loadRecentlyViewedFromLocalStorage(),
	reducers: {
		addViewedProduct: (state, action) => {
			if (!state.includes(action.payload)) {
				state.push(action.payload);
				saveRecentlyViewedToLocalStorage(state);
			}
		},
		clearViewedProducts: (state) => {
			state = [];
			saveRecentlyViewedToLocalStorage(state);
		},
	},
});

export const { addViewedProduct, clearViewedProducts } =
	recentlyViewedSlice.actions;
export default recentlyViewedSlice.reducer;
