import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import store from "./store"
import Counter from "./Counter";
function App() {
  return (
      <Provider store={store}>
        <div className="App">
<Counter/>
        </div>
      </Provider>

  );
}

export default App;
