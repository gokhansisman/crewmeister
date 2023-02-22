import { Absence, Member } from "../utils/types";
import Moment from "react-moment";
import {  MdPending, MdCancel } from "react-icons/md";
import { FcCalendar } from "react-icons/fc";
import { AiFillCheckCircle } from "react-icons/ai";
import {
  Container,
  Row,
  CardHeader,
  CardHeaderRow,
  AddToCalendar,
  Profile,
  Columns,
  Note,
  NoteContainer,
  NoteOwner,
  Period,
  DateRow,
  VacationBadge,
  DateContainer,
  ProfileContainer,
  ProfileCard,
} from "./CardStyles";

export type AbsenceCardProps = {
  absence: Absence;
  member: Member;
};

const addToCalendar = async (absence: Absence, member: Member) => {
  const settings: RequestInit = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      startTime: absence.startDate,
      endTime: absence.endDate,
      name: member.name,
      summary: absence.type,
    }),
  };
  try {
    const fetchResponse = await fetch(
      `/addToCalendar`,
      settings
    );
    if (await fetchResponse.ok) {
      const downloadICS = document.createElement("a");
      downloadICS.href = "/calendar";
      downloadICS.click();
    }
    return fetchResponse;
  } catch (e) {
    console.log(e);
  }
};
/**
 * AbsenceCard component renders the absence information of a member
 * @param {AbsenceCardProps} props
 * @returns {JSX.Element}
 */
function AbsenceCard({ absence, member }: AbsenceCardProps) {
  return (
    <Container>
      {absence.rejectedAt && (
        <Row>
          <CardHeader backgroundColor="#eb070766">
            <CardHeaderRow>
              <MdCancel size={40} color="#f44336" />
            </CardHeaderRow>
          </CardHeader>
          <VacationBadge shadowColor="#eb070766">
          {absence.type === "vacation" ? <>&#x2708;&#xFE0F;</> : <>&#x1F927;</>}
        </VacationBadge>
        </Row>
      )}
      {absence.confirmedAt && (
        <Row>
          <CardHeader backgroundColor="#00b57a9e">
            <CardHeaderRow>
              <AiFillCheckCircle size={40} color="#4caf50" />
            </CardHeaderRow>
          </CardHeader>
          <VacationBadge shadowColor="#00b57a9e">
          {absence.type === "vacation" ? <>&#x2708;&#xFE0F;</> : <>&#x1F927;</>}
        </VacationBadge>
        </Row>
        
      )}
      {!absence.confirmedAt && !absence.rejectedAt && absence.createdAt && (
        <Row>
          <CardHeader backgroundColor="#BCD1FF">
            <CardHeaderRow>
              <MdPending size={40} color="blue" />
            </CardHeaderRow>
          </CardHeader>
          <VacationBadge shadowColor="#BCD1FF">
          {absence.type === "vacation" ? <>&#x2708;&#xFE0F;</> : <>&#x1F927;</>}
        </VacationBadge>
        </Row>
      )}
      <DateContainer>
        <DateRow color="red">
          <Note>{absence.startDate + " / " + absence.endDate}</Note>
        </DateRow>
        <Period>
          <Moment diff={absence.startDate} unit="days">
            {absence.endDate}
          </Moment>
          days
        </Period>
      </DateContainer>
      {absence.admitterNote && (
        <NoteContainer>
          <NoteOwner>Admitter note</NoteOwner>
          {absence.admitterNote}
        </NoteContainer>
      )}
      {absence.memberNote && (
        <NoteContainer>
          <NoteOwner>Member note</NoteOwner>
          {absence.memberNote}
        </NoteContainer>
      )}
      <ProfileContainer>
        <ProfileCard>
          <Profile src={member && member.image} alt={member && member.name} />
          {member && member.name}
        </ProfileCard>
        <AddToCalendar onClick={() => addToCalendar(absence, member)}>
          <FcCalendar size={24} />
        </AddToCalendar>
      </ProfileContainer>
    </Container>
  );
}

export default AbsenceCard;
