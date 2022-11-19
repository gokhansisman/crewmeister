import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  absences: [],
  loading: false,
  error: "",
};
export const getAbsences = createAsyncThunk("getAbsences", async () => {
  try {
    const response = await fetch("http://localhost:3000/absences");
    console.log("Worked");
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
      state.error = action.payload as string;
    });
  },
});

export const { fetch_success } = absencesSlice.actions;
export const fetchAbsences = (state: { absencesList: { absences: any } }) =>
  state.absencesList?.absences;

export default absencesSlice.reducer;
