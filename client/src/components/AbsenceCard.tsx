import { Absence, Member } from "../utils/types";
import styled from "styled-components";
import Moment from "react-moment";
import { FaPlane } from "react-icons/fa";
import { MdSick } from "react-icons/md";

export type AbsenceCardProps = {
  absence: Absence;
  member: Member;
};

export const Container = styled.div`
  display: flex;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 2px #ccc;
  width: 100%;
  max-width: 1080px;
  padding: 20px;
  margin: 20px;
  height: 80px;
`;
export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  padding: 0 10px;
`;
export const Column = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  padding: 0 10px;
  height: 100%;
`;
export const Image = styled.img`
  width: 100px;
  height: 100px;
  background-size: cover;
  border-radius: 50%;
`;
export const Badge = styled.span<{ backgroundColor: string }>`
  height: 24px;
  color: white;
  font-weight: bold;
  background-color: ${(props) => props.backgroundColor};
  border-radius: 8px;
  padding: 4px;
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
      `http://localhost:3000/addToCalendar`,
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
      <Row onClick={addToCalendar}>Add to calendar</Row>
      <Row>
        <Image src={member && member.image} alt={member && member.name} />
      </Row>
      <Column>
        <Row> {member && member.name}</Row>
        <Row>
          Vacation type
          <Row>{absence.type === "vacation" ? <FaPlane /> : <MdSick />}</Row>
        </Row>
      </Column>
      <Column>
        <Row>{absence.startDate + " / " + absence.endDate}</Row>
        <Row>
          <Moment diff={absence.startDate} unit="days">
            {absence.endDate}
          </Moment>
        </Row>
      </Column>
      {absence.admitterNote && <Row>Admitter note: {absence.admitterNote}</Row>}
      {absence.memberNote && <Row>Member note: {absence.memberNote}</Row>}
      {absence.rejectedAt && <Badge backgroundColor="red">Rejected</Badge>}
      {absence.confirmedAt && <Badge backgroundColor="green">Accepted</Badge>}
      {!absence.confirmedAt && !absence.rejectedAt && absence.createdAt && (
        <Badge backgroundColor="blue">Pending</Badge>
      )}
    </Container>
  );
}

export default AbsenceCard;
