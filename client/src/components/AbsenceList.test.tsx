import { shallow } from "enzyme";
import AbsenceList from "./AbsenceList";
import React from "react";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store'
import { Store, AnyAction } from "redux";

const initialState = {
  absences: [],
  absencesContainer: [],
  loading: false,
  error: false,
};
const mockStore = configureStore();
let store: Store<unknown, AnyAction>, wrapper: any;

beforeEach(()=>{
  store = mockStore(initialState);
  wrapper = shallow(<Provider store={store}><AbsenceList/></Provider> )
})
it(' render the AbsanceList component', () => {
  expect(wrapper.find(AbsenceList).length).toEqual(1)
});

