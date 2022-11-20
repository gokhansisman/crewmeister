import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Absence } from "../utils/types";

const initialState = {
  absences: [],
  absencesContainer: [],
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
    filteredAbsences: (state, action) => {
      if (action.payload === "all") {
        state.absences = state.absencesContainer;
      } else {
        state.absences = state.absencesContainer.filter(
          (absence: Absence) => absence.type === action.payload
        );
      }
    },
    filteredAbsencesByDate: (state, action) => {
      if (action.payload === "") {
        state.absences = state.absencesContainer;
      } else {
        state.absences = state.absencesContainer.filter(
          (absence: Absence) =>
            new Date(absence.startDate) <= new Date(action.payload) &&
            new Date(absence.endDate) >= new Date(action.payload)
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAbsences.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getAbsences.fulfilled, (state, action) => {
      state.loading = false;
      state.absencesContainer = action.payload;
      state.absences = action.payload;
    });
    builder.addCase(getAbsences.rejected, (state, action) => {
      state.error = true;
    });
  },
});

export const { filteredAbsences, filteredAbsencesByDate } =
  absencesSlice.actions;

export default absencesSlice.reducer;
