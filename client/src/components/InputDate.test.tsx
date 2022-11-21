import { mount, shallow } from "enzyme";
import InputDate from "./InputDate";
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
  wrapper = shallow(<Provider store={store}><InputDate/></Provider> )
})
it(' render the InputDate component', () => {
  expect(wrapper.find(InputDate).length).toEqual(1)
});

