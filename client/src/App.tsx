import { store } from "./store/store";
import Card from "./components/Card";
import { Provider } from 'react-redux';

export type RootState = ReturnType<typeof store.getState>

function App() {
  return (
    <>
      <Provider store={store}>
        <Card />
      </Provider>
    </>
  );
}

export default App;
