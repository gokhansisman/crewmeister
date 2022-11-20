import { Absence, Member } from "../utils/types";
import styled from "styled-components";
import Moment from "react-moment";
import { FaPlane } from "react-icons/fa";
import { MdSick, MdPending } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import { GiCancel } from "react-icons/gi";
import { AiFillCheckCircle } from "react-icons/ai";

export type AbsenceCardProps = {
  absence: Absence;
  member: Member;
};

export const Container = styled.div`
  display: flex;
  border-radius: 8px;
  box-shadow: 0 2px 2px white;
  max-width: 1080px;
  margin: 10px auto;
  padding: 20px;
  height: 50px;
  background-color: #a8dadc;
  color: #1d3557;
  border-right: 4px solid #1d3557;
  column-gap: 8px;
  justify-content: space-around;
`;
export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  padding: 0 10px;
`;

export const AddToCalendar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  padding: 0 10px;
  margin-left: auto;
  &:hover {
    cursor: pointer;
  }
`;
export const Column = styled.div`
  display: contents;
`;
export const Columns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px 0;
`;
export const Note = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4px;
  column-gap: 4px;
`;
export const NoteHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;
export const Image = styled.img`
  width: 40px;
  height: 40px;
  background-size: cover;
  border-radius: 50%;
`;
export const Badge = styled.span<{ color: string }>`
  font-size: 20px;
  color: ${(props) => props.color};
`;

const addToCalendar = async () => {
  const settings: RequestInit = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      startTime: "2022-11-19",
      endTime: "2022-11-19",
      name: "gokhan",
    }),
  };

  try {
    const fetchResponse = await fetch(
      `/addToCalendar`,
      settings
    );
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

function AbsenceCard({ absence, member }: AbsenceCardProps) {
  return (
    <Container>
      {absence.rejectedAt && (
        <Badge color="red">
          <GiCancel />
        </Badge>
      )}
      {absence.confirmedAt && (
        <Badge color="green">
          <AiFillCheckCircle />
        </Badge>
      )}
      {!absence.confirmedAt && !absence.rejectedAt && absence.createdAt && (
        <Badge color="blue">
          <MdPending />
        </Badge>
      )}
      <Row>
        <Image src={member && member.image} alt={member && member.name} />
      </Row>
      <Column>
        <Row> {member && member.name}</Row>
      </Column>

      <Columns>
        <NoteHeader> Vacation type</NoteHeader>
        <Note>
          {absence.type === "vacation" ? <FaPlane /> : <MdSick />}
          {absence.type}
        </Note>
      </Columns>

      <Columns>
        <NoteHeader>Dates/Days</NoteHeader>
        <Note>{absence.startDate + " / " + absence.endDate}</Note>
      </Columns>
      <Columns>
        <NoteHeader>Period</NoteHeader>
        <Note>
          <Moment diff={absence.startDate} unit="days">
            {absence.endDate}
          </Moment>
        </Note>
      </Columns>
      {absence.admitterNote && (
        <Columns>
          <NoteHeader>Admitter note</NoteHeader>
          <Note> {absence.admitterNote}</Note>
        </Columns>
      )}
      {absence.memberNote && (
        <Columns>
          <NoteHeader>Member note</NoteHeader>
          <Note> {absence.memberNote}</Note>
        </Columns>
      )}

      <AddToCalendar onClick={addToCalendar}>
        <FcCalendar size={24} />
      </AddToCalendar>
    </Container>
  );
}

export default AbsenceCard;
