import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Item } from '../../types';
import { fetchItemDetail } from './detail.api';

export type Status = 'idle' | 'loading' | 'failed'

export interface ItemState {
  detail: Item | null;
  status: Status;
}

const initialState: ItemState = {
  detail: null,
  status: 'idle',
};

export const fetchDetail = createAsyncThunk(
  'detail/fetchDetail',
  async (id: string) => {
    const response = await fetchItemDetail(id);
    return response.data.data?.item;
  }
);

export const itemsSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    cleanUpDetail: (state) => {
      state.detail = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetail.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDetail.fulfilled, (state, action) => {
        state.status = 'idle';
        state.detail = action.payload as Item;
      })
      .addCase(fetchDetail.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { cleanUpDetail } = itemsSlice.actions;

export const selectItemDetail = (state: RootState) => state.detail.detail;
export const selectStatus = (state: RootState) => state.detail.status;

export default itemsSlice.reducer;
