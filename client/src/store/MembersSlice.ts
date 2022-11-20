import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  members: [],
  loading: false,
  error: "",
};
export const getMembers = createAsyncThunk("getMembers", async () => {
  try {
    const response = await fetch("http://localhost:3000/members");
    return response.json();
  } catch (error) {
    console.error(error);
  }
});

const membersSlice = createSlice({
  name: "membersList",
  initialState,
  reducers: {
    fetch_success: (state, action) => {
      state.members = action.payload.members;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMembers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getMembers.fulfilled, (state, action) => {
      state.loading = false;
      state.members = action.payload;
    });
    builder.addCase(getMembers.rejected, (state, action) => {
      state.error = action.payload as string;
    });
  },
});

export const { fetch_success } = membersSlice.actions;

export default membersSlice.reducer;
