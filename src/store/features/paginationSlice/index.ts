import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const PAGINATION_LIMIT_OPTION: LimitType[] = ['10', '20', '30', '40', '50', '60', '70', '80', '100'];

export type LimitType = '10' | '20' | '30' | '40' | '50' | '60' | '70' | '80' | '100';

type PaginationData = { page: number; limit: LimitType };

const initialState: PaginationData = { limit: PAGINATION_LIMIT_OPTION[PAGINATION_LIMIT_OPTION.length - 1], page: 1 };

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<PaginationData>) => {
      state = action.payload;
    },
    incrementPage: (state) => {
      state.page++;
    },
    decrementPage: (state) => {
      state.page--;
    },
    setLimit: (state, action: PayloadAction<LimitType>) => {
      state.limit = action.payload;
    },
  },
});

export const { setPagination, decrementPage, incrementPage, setLimit } = paginationSlice.actions;
export default paginationSlice.reducer;
