import styled from "styled-components";

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
export type DropdownProps = {
  setFilter: (filter: string) => void;
};
const Dropdown = ({ setFilter }: DropdownProps) => {
  return (
      <Select onChange={(e) => setFilter(e.target.value)}>
        <option value="all" hidden>
          Vacation Type
        </option>
        <option value="vacation">vacation</option>
        <option value="sickness">sickness</option>
      </Select>
  );
};
export default Dropdown;
