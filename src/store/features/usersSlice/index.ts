import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from './types';

interface UserMetaData {
  page: number;
  results: number;
  seed: string;
  version: string;
}

const initialState: { entities: User[]; metaInfo?: UserMetaData } = {
  entities: [],
  metaInfo: undefined,
};

// const initialState: User[] = [];

interface FetchUsersParams {
  page: number;
  pageSize: string;
  seed?: string;
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async ({ page, pageSize, seed }: FetchUsersParams) => {
  return fetch(`https://randomuser.me/api/?page=${page}&results=${pageSize}${seed ? `&seed=${seed}` : ''}`).then(
    (res) => res.json(),
  );
});

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.entities = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.entities = payload.results;
      state.metaInfo = payload.info;
    });
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
