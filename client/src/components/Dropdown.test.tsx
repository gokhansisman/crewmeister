import { shallow } from "enzyme";
import Dropdown from "./Dropdown";
import React from "react";

it("expect to render Dropdown component", () => {
  expect(shallow(<Dropdown />).length).toEqual(1);
});
