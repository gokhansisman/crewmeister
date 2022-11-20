import React from "react";
import styled from "styled-components";
import { useAppDispatch } from "../hooks/useTypedSelector";
import { filteredAbsencesByDate } from "../store/AbsencesSlice";

const InputDate = () => {
const [date, setDate] = React.useState("");
const dispatch = useAppDispatch();
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
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    dispatch(filteredAbsencesByDate(e.target.value));
  };
    return (
      <Input
        type="date"
        value={date}
        min="2015-01-01"
        max="2023-12-31"
        onChange={handleChange}
      />
    );
  };
export default InputDate;
