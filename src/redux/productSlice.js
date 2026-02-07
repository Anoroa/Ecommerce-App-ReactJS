    import {createSlice} from '@reduxjs/toolkit'

    const initialState = {
        value: [],
        filtered: [],
    }

    export const productSlice = createSlice({
        name: 'products',
        initialState,
        reducers: {
            setProducts: (state, action) => {
                state.value = action.payload;
                state.filtered = action.payload;
            },
            filterByCategory: (state, action) => {
                state.filtered = state.value.filter(
                    item => item.category === action.payload
                );
            },
            clearFilter: (state) => {
                state.filtered = state.value;
            },
        }
    })

    // Action creators are generated for each case reducer function
    export const {setProducts, filterByCategory, clearFilter} = productSlice.actions

    export default productSlice.reducer;