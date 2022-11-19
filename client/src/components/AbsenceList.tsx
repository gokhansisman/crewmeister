import { Absence, Member } from "../utils/types";
import AbsenceCard from "./AbsenceCard";

export type AbsenceListProps = {
  absences: Absence[];
  members: Member[];
};
export default function AbsenceList({ absences, members }: AbsenceListProps) {
  return (
    <div>
      {absences.length === 0 && <h3>No absences found</h3>}
      {absences.slice(0, 100).map((absence) => (
        <AbsenceCard
          key={absence.id}
          absence={absence}
          member={
            members.find((member) => member.userId === absence.userId) as Member
          }
        />
      ))}
    </div>
  );
}
