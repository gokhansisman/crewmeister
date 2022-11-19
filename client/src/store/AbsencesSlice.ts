import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  absences: [],
  loading: false,
  error: false,
};
export const getAbsences = createAsyncThunk("getAbsences", async () => {
  try {
    const response = await fetch("http://localhost:3000/absences");
    return response.json();
  } catch (error) {
    console.error(error);
  }
});

const absencesSlice = createSlice({
  name: "absencesList",
  initialState,
  reducers: {
    fetch_success: (state, action) => {
      state.absences = action.payload.absences;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAbsences.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAbsences.fulfilled, (state, action) => {
      state.loading = false;
      state.absences = action.payload;
    });
    builder.addCase(getAbsences.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export const { fetch_success } = absencesSlice.actions;

export default absencesSlice.reducer;
