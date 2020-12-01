import React from "react";
import "./App.css";
import axios from "axios";
//BOILERPLATE

export function App() {
  const testbackend = () => {
    axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/test`).then((res) => {
      alert(JSON.stringify(res.data));
    });
  };

  const testDatabase = () => {
    axios
      .get(`${process.env.REACT_APP_USERS_SERVICE_URL}/pingdb`)
      .then((res) => {
        alert(JSON.stringify(res.data));
      });
  };
  return (
    <div className="App">
      <br />
      Hello
      <br />
      <br />
      <button onClick={testbackend}>Test backend</button>
      <br />
      <br />
      <button onClick={testDatabase}>Test Database</button>
      <button
        onClick={() =>
          console.log(`REACT_APP_SECRETME :${process.env.REACT_APP_SECRETME}`)
        }
      >
        console.logs
      </button>
      <button
        onClick={() =>
          console.log(
            `REACT_APP_USERS_SERVICE_URL${process.env.REACT_APP_USERS_SERVICE_URL}`
          )
        }
      >
        console.log2
      </button>
    </div>
  );
}

export default App;
