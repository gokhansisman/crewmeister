import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  border-radius: 16px;
  box-shadow: #00000033 8px 8px 13px 0px;
  max-width: 1080px;
  overflow: hidden;
  width: 340px;
  margin: 10px auto;
  flex-direction: column;
  background-color: rgb(255 255 255);
  color: rgb(29, 53, 87);
  column-gap: 8px;
`;
export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
  color: #457b9d;
  font-size: 14px;
  font-weight: 600;
`;
export const ProfileCard = styled.div`
  display: flex;
  justify-content: start;
  padding-left: 8px;
  column-gap: 8px;
  align-items: center;
`;

export const DateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
  padding-top: 4px;
`;
export const CardHeaderRow = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const DateRow = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 24px;
  padding-right: 24px;
  color: #6e798c;
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
export const Columns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px 0;
  flex: 1;
  position: absolute;
  top: 0;
  right: 0;
`;
export const VacationBadge = styled.div`
  font-size: 24px;
  margin-right: 6px;
  margin-top: -6px;
  color: white;
  transform: rotateZ(45deg);
`;
export const Note = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4px;
  column-gap: 4px;
`;
export const Profile = styled.img`
  width: 32px;
  height: 32px;
  background-size: cover;
  border-radius: 50%;
`;
export const CardHeader = styled.div<{ backgroundColor: string }>`
  width: 100%;
  height: 80px;
  background-size: cover;
  background-color: ${(props) => props.backgroundColor};
`;
export const Period = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 4px;
  align-items: center;
  font-family: Open Sans, sans-serif;
  font-style: normal;
  font-size: 13px;
  font-weight: 500;
  color: #6e798c;
`;
export const NoteContainer = styled.div`
  color: #374a59;
  padding-top: 8px;
  padding-left: 24px;
  padding-right: 24px;
  line-height: 19px;
  font-size: 13px;
  font-weight: normal;
`;
export const NoteOwner = styled.div`
  font-weight: 600;
  padding-bottom: 4px;
`;
