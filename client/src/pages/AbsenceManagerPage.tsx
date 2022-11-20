import AbsenceList from "../components/AbsenceList";
import Dropdown from "../components/Dropdown";
import styled from "styled-components";
import InputDate from "../components/InputDate";

export default function AbsenceManagerPage() {
  const Filters = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    padding: 0 10px;
  `;
  const Header = styled.h3`
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;
    color: #457b9d;
  `;
  return (
    <>
      <Header>Absance Manager</Header>
      <Filters>
        <Dropdown />
        <InputDate />
      </Filters>
      <AbsenceList />
    </>
  );
}
