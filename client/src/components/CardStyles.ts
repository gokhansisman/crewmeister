import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  border-radius: 16px;
  box-shadow: #00000033 8px 8px 13px 0px;
  max-width: 1080px;
  width: 320px;
  height: 280px;
  margin: 10px auto;
  flex-direction: column;
  background-color: rgb(255 255 255);
  color: rgb(29, 53, 87);
  column-gap: 8px;
  transition: all 500ms ease;
  &:hover {
    transform: skew(0deg, 1deg) scale(1.05);
  }
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
  width: 94%;
  position: absolute;
  bottom: 0px;
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
  padding-top: 12px;
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
export const VacationBadge = styled.div<{shadowColor: string}>`
position: absolute;
    top: -10px;
    right: 10px;
    background: #efeff2;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    padding: 10px;
    box-shadow: 0px 0px 11px 2px ${(props) => props.shadowColor};
    font-size: 20px;
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
  object-fit: cover;
`;
export const CardHeader = styled.div<{ backgroundColor: string }>`
  width: 100%;
  height: 80px;
  border-radius: 16px 16px 0 0;
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
`;
