import { createSlice } from '@reduxjs/toolkit';

type Tab = 'TABLE' | 'CARDS';
// TODO показать животное из 9 строки
const initialState: Tab = 'TABLE';

const displayTabsSlice = createSlice({
  name: 'tabs',
  initialState: initialState as Tab, // TODO посмотри в 4 строку
  reducers: {
    setTab: (state, action) => {
      state = action.payload;
    },
    revertTab: (state) => {
      return state === 'TABLE' ? 'CARDS' : 'TABLE';
    },
  },
});

export const { setTab, revertTab } = displayTabsSlice.actions;
export default displayTabsSlice.reducer;
