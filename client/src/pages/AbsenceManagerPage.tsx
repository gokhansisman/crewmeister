import React, { useEffect } from "react";
import AbsenceList from "../components/AbsenceList";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import {
  getAbsences,
  filteredAbsences,
  filteredAbsencesByDate,
} from "../store/AbsencesSlice";
import { getMembers } from "../store/MembersSlice";

import Loader from "../assets/loading.svg";
import Dropdown from "../components/Dropdown";
import styled from "styled-components";

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

  const Header = styled.h3`
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
    color: #457b9d;
  `;
  const Input = styled.input`
    width: 240px;
    height: 35px;
    background: white;
    color: gray;
    padding-left: 5px;
    font-size: 14px;
    border: none;
    margin-left: 10px;
  `;
  const Filters = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    padding: 0 10px;
  `;
  const Loading = styled.img`
  display: flex;
  margin: auto;
  margin-top: 20px;
  `
  return (
    <div>
      <Header>Absence Manager Page</Header>
      <Filters>
        <Dropdown setFilter={setFilter} />
        <Input
          type="date"
          value={filterByDate}
          min="2015-01-01"
          max="2023-12-31"
          onChange={(e) => setFilterByDate(e.target.value)}
        />
      </Filters>
      {(absencesError || membersError) && <h3>Error!</h3>}

      {absencesLoading || membersLoading ? (
        <Loading src={Loader} alt="loading" />
      ) : (
        <AbsenceList absences={absences} members={members} />
      )}
    </div>
  );
}
