import React, { useEffect } from "react";
import AbsenceList from "../components/AbsenceList";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { getAbsences } from "../store/AbsencesSlice";
import { getMembers } from "../store/MembersSlice";
import Loader from "../assets/loading.svg";

export default function AbsenceManagerPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAbsences());
    dispatch(getMembers());
  }, []);

  const {
    absences,
    loading: absencesLoading,
    error: absencesError,
  } = useAppSelector((state) => state.absenceReducer);
  const {
    members,
    loading: membersLoading,
    error: membersError,
  } = useAppSelector((state) => state.membersReducer);

  return (
    <div>
      <h4>Absence Manager Page</h4>
      {(absencesError || membersError) && <h3>Error!</h3>}

      {absencesLoading || membersLoading ? (
        <img src={Loader} style={{ marginTop: 16 }} alt="loading" />
      ) : (
        <AbsenceList absences={absences} members={members} />
      )}
      
    </div>
  );
}