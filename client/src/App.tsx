import { store } from "./store/store";
import { Provider } from "react-redux";
import AbsenceManagerPage from "./pages/AbsenceManagerPage";
import "./App.css";
export type RootState = ReturnType<typeof store.getState>;

function App() {
  return (
    <>
      <Provider store={store}>
        <AbsenceManagerPage />
      </Provider>
    </>
  );
}

export default App;
