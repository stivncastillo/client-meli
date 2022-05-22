import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import itemsReducer from './items/items.slice';
import detailReducer from './detail/detail.slice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    detail: detailReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
