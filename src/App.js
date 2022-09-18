import React from "react";
import "./App.css";
// import Card from "./card/Card";
// import Data from "./Data";
import { useSelector, useDispatch } from "react-redux";
import { Provider } from "react-redux";
import store from "./redux/store/store";
// import { increment, decrement } from "./redux/actions/userAction";
import Home from "./pages/Home/Home";

function App() {
  const state = useSelector((state) => state);

  const dispatch = useDispatch();

  console.log("state", state);

  const [data, setData] = React.useState({});
  const [userName, setUserName] = React.useState("");
  const [value, setValue] = React.useState(10);

  const getData = () => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((Response) => Response.json())
      .then((Result) => {
        setData(Result);
      });
  };
  console.log(data);

  const HandleChange = (event) => {
    setUserName(event.target.value);
  };

  React.useEffect(() => {
    let timeoutId = setTimeout(() => {
      console.log("This is search value", userName);
      getData();
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [userName]);

  return (
    <Provider store={store}>
      <div>
        {/* <h2>Git Profile Search</h2>
      <div>
      <input type="text" placeholder = "Enter username ..." className='input' onChange={HandleChange} value={userName}/>
      <button>Search</button>
      </div>
      <div>
        <Card data={data}/>
      </div> */}
        {/* <Data /> */}
        {/* <h2>{state}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button> */}
        <Home />
      </div>
    </Provider>
  );
}

export default App;
