import { shallow } from "enzyme";
import AbsenceList from "./AbsenceList";
import React from "react";

it("expect to render AbsenceList component", () => {
  expect(shallow(<AbsenceList />).length).toEqual(1); 
});
