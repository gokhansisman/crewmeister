import { store } from "./store/store";
import { Provider } from "react-redux";
import AbsenceManagerPage from "./pages/AbsenceManagerPage";
import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import Dropdown from "./components/Dropdown";
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
