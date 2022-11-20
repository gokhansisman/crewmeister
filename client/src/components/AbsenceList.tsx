import { Absence, Member } from "../utils/types";
import AbsenceCard from "./AbsenceCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import styled from "styled-components";

export type AbsenceListProps = {
  absences: Absence[];
  members: Member[];
};
export default function AbsenceList({ absences, members }: AbsenceListProps) {
  const [page, setPage] = useState(1);
  const PAGE_ROW_COUNT = 10;
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

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
  return (
    <div>
      <Sum>{absences.length} absences</Sum>
      {absences.length === 0 && <NoAbsence>No absences found</NoAbsence>}
      <div>
        {absences
          .slice(
            (page - 1) * PAGE_ROW_COUNT,
            PAGE_ROW_COUNT * (page - 1) + PAGE_ROW_COUNT
          )
          .map((absence) => (
            <AbsenceCard
              key={absence.id}
              absence={absence}
              member={
                members.find(
                  (member) => member.userId === absence.userId
                ) as Member
              }
            />
          ))}
      </div>
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
