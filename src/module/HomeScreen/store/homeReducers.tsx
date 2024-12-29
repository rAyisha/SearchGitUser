
import { createSlice } from '@reduxjs/toolkit';
import { HomeReducerState } from './home.types';
import { getHomeMiddleWareData } from './homeMiddleWare';

const homeInitialState: HomeReducerState = {
    isLoading: false,
    error: '',
    HomeData: [],
};

const homeReducer = createSlice({
    name: 'home',
    initialState: homeInitialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getHomeMiddleWareData.pending, state => {
            state.isLoading = true;
            state.error = '';
        });
        builder.addCase(getHomeMiddleWareData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.HomeData = action.payload;

        });
        builder.addCase(getHomeMiddleWareData.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === 'string') {
                state.error = action.payload;
            }
        });
       
    },
});

export const homeMainReducers = homeReducer.reducer;