import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { Store, AnyAction } from "redux";
import Dropdown from "./Dropdown";

const initialState = {
  absences: [],
  absencesContainer: [],
  loading: false,
  error: false,
};
const mockStore = configureStore();
let store: Store<unknown, AnyAction>, wrapper: any;

beforeEach(() => {
  store = mockStore(initialState);
  wrapper = shallow(
    <Provider store={store}>
      <Dropdown />
    </Provider>
  );
});
it(" render the InputDate component", () => {
  expect(wrapper.find(Dropdown).length).toEqual(1);
});
