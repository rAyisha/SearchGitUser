import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { HOME } from '../../../redux/actions';


export const getHomeMiddleWareData = createAsyncThunk(
  HOME,
  async ({ query, pageNumber }: { query: string; pageNumber: number }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://api.github.com/search/users?q=${query}+in:login&page=${pageNumber}&per_page=10`
      );
      
      return data;
    } catch (error: any) {

      const typedError = error as Error;
      return rejectWithValue(typedError.message || 'Failed to fetch data');
    }
  }
);
