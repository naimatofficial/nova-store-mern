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
			const productId = action.payload;
			const timestamp = Date.now();
			const existingProductIndex = state.findIndex(
				(product) => product.id === productId
			);

			if (existingProductIndex !== -1) {
				// If the product is already in the list, update its timestamp
				state[existingProductIndex].timestamp = timestamp;
			} else {
				// Otherwise, add the product with a new timestamp
				state.unshift({ id: productId, timestamp });
			}

			// Save the updated list to local storage
			saveRecentlyViewedToLocalStorage(state);
		},
		clearViewedProducts: () => {
			localStorage.removeItem("recentlyViewed");
			return [];
		},
	},
});

export const { addViewedProduct, clearViewedProducts } =
	recentlyViewedSlice.actions;
export default recentlyViewedSlice.reducer;

// if (!state.includes(action.payload)) {
// 	state.push(action.payload);
// 	saveRecentlyViewedToLocalStorage(state);
// }
