import { configureStore } from "@reduxjs/toolkit";
import { IAbsences, IMembers } from "../utils/types";
import absencesSlice from "./AbsencesSlice";

export const store = configureStore({
  reducer: absencesSlice,
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export interface IRootState {
  members: IMembers[];
  absences: IAbsences[];
}
