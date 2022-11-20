import { shallow } from "enzyme";
import InputDate from "./InputDate";
import React from "react";

it("expect to render InputDate component", () => {
  expect(shallow(<InputDate />).length).toEqual(1);
});
