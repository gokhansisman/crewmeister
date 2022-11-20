import { shallow } from "enzyme";
import AbsenceCard from "./AbsenceCard";

const mockAbsence = {
  admitterId: 1,
  admitterNote: "",
  confirmedAt: new Date(2020 - 12 - 12),
  createdAt: new Date(2020 - 12 - 15),
  crewId: 352,
  endDate: "2021-01-13",
  id: 2351,
  memberNote: "",
  rejectedAt: new Date(),
  startDate: "2021-01-13",
  type: "sickness",
  userId: 2664,
};

const mockMember = {
  crewId: 352,
  id: 709,
  image: "https://loremflickr.com/300/400",
  name: "Max",
  userId: 644,
};

it("expect to render AbsenceCard component", () => {
  expect(
    shallow(<AbsenceCard absence={mockAbsence} member={mockMember} />).length
  ).toEqual(1); 
});
