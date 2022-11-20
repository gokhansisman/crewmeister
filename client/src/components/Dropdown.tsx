import styled from "styled-components";
import { useAppDispatch } from "../hooks/useTypedSelector";
import { filteredAbsences } from "../store/AbsencesSlice";

const Select = styled.select`
  width: 240px;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
/**
 * Dropdown component that renders a dropdown menu
 * @returns {JSX.Element}
 */
const Dropdown = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <Select onChange={(e) => dispatch(filteredAbsences(e.target.value))}>
        <option value="all">Vacation Type</option>
        <option value="vacation">vacation</option>
        <option value="sickness">sickness</option>
      </Select>
    </div>
  );
};
export default Dropdown;
