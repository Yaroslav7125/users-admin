import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/store/features/usersSlice';
import paginationReducer from '@/store/features/paginationSlice';
import displayTabsReducer from '@/store/features/displayTabsSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    pagination: paginationReducer,
    displayTab: displayTabsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
