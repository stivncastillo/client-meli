import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Category, Item } from '../../types';
import { fetchItems } from './items.api';

export type Status = 'idle' | 'loading' | 'failed'

export interface ItemState {
  all: Array<Item>;
  itemsStatus: Status;
  categories: Array<Category>
}

const initialState: ItemState = {
  all: [],
  itemsStatus: 'idle',
  categories: [],
};

export const fetchItemsAsync = createAsyncThunk(
  'items/fetchItemsAsync',
  async (query: string) => {
    const response = await fetchItems(query);
    return {
      items: response.data.data?.items,
      categories: response.data.data?.categories,
    };
  }
);

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemsAsync.pending, (state) => {
        state.itemsStatus = 'loading';
      })
      .addCase(fetchItemsAsync.fulfilled, (state, action) => {
        state.itemsStatus = 'idle';
        state.all = action.payload.items?.slice(0, 4) as Item[];
        state.categories = action.payload.categories ? action.payload.categories : [];
      })
      .addCase(fetchItemsAsync.rejected, (state) => {
        state.itemsStatus = 'failed';
      })
  },
});

// export const { cleanUpDetail } = itemsSlice.actions;

export const selectItems = (state: RootState) => state.items.all;
export const selectCategories = (state: RootState) => state.items.categories;
export const selectItemsStatus = (state: RootState) => state.items.itemsStatus;

export default itemsSlice.reducer;
