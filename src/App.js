import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import store from "./store"
import Counter from "./Counter";
import CounterReduxHooks from "./CounterReduxHooks";
function App() {
  return (
      <Provider store={store}>
        <div className="App">
<CounterReduxHooks/>
        </div>
      </Provider>

  );
}

export default App;
