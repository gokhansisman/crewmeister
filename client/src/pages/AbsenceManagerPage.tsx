import React, { useEffect } from "react";
import AbsenceList from "../components/AbsenceList";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import { getAbsences, filteredAbsences, filteredAbsencesByDate } from "../store/AbsencesSlice";
import { getMembers } from "../store/MembersSlice";

import Loader from "../assets/loading.svg";
import Dropdown from "../components/Dropdown";

export default function AbsenceManagerPage() {
  const [filter, setFilter] = React.useState("");
  const [filterByDate, setFilterByDate] = React.useState("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAbsences());
    dispatch(getMembers());
  }, []);

  useEffect(() => {
    dispatch(filteredAbsences(filter));
  }, [filter]);

  useEffect(() => {
    dispatch(filteredAbsencesByDate(filterByDate));
  }, [filterByDate]);
  
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
      <Dropdown setFilter={setFilter} />
      <input
        type="date"
        value={filterByDate}
        min="2015-01-01"
        max="2023-12-31"
        onChange={(e) => setFilterByDate(e.target.value)}
      />
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
