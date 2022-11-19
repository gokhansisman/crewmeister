import { configureStore } from "@reduxjs/toolkit";
import absencesSlice from "./AbsencesSlice";
import membersSlice from "./MembersSlice";

export const store = configureStore({
  reducer: {
    absenceReducer: absencesSlice,
    membersReducer: membersSlice,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
