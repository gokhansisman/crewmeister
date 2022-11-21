import { Absence, Member } from "../utils/types";
import AbsenceCard from "./AbsenceCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import styled from "styled-components";
import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedSelector";
import {
  getAbsences,
  filteredAbsences,
  filteredAbsencesByDate,
} from "../store/AbsencesSlice";
import { getMembers } from "../store/MembersSlice";
import Loader from "../assets/loading.svg";

/**
 * AbsenceList component that renders a list of AbsenceCards
 * @returns {JSX.Element}
 */
export default function AbsenceList() {
  const [page, setPage] = useState(1);
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
  const PAGE_ROW_COUNT = 10;
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    & {
      @media (max-width: 1080px) {
        grid-template-columns: 1fr 1fr;
      }
      @media (max-width: 720px) {
        grid-template-columns: 1fr;
      }
    }
  `;
  const Sum = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #1d3557;
  `;
  const NoAbsence = styled.h3`
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
    color: #457b9d;
  `;
  const Loading = styled.img`
    display: flex;
    margin: auto;
    margin-top: 20px;
  `;
  return (
    <div>
      <Sum>{absences.length} absences</Sum>
      {absences.length === 0 && <NoAbsence>No absences found</NoAbsence>}
      {(absencesError || membersError) && <h3>Error!</h3>}

      {absencesLoading || membersLoading ? (
        <Loading src={Loader} alt="loading" />
      ) : (
        <Grid>
          {absences
            .slice(
              (page - 1) * PAGE_ROW_COUNT,
              PAGE_ROW_COUNT * (page - 1) + PAGE_ROW_COUNT
            )
            .map((absence: Absence) => (
              <AbsenceCard
                key={absence.id}
                absence={absence}
                member={
                  members.find(
                    (member: Member) => member.userId === absence.userId
                  ) as unknown as Member
                }
              />
            ))}
        </Grid>
      )}
      <Stack spacing={2} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(absences.length / 10)}
          page={page}
          onChange={handleChange}
          className="pagination"
        />
      </Stack>
    </div>
  );
}
