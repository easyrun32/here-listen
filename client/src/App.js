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
  const tester = () => {
    axios
      .get(`${process.env.REACT_APP_SECRETME}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const tester2 = () => {
    axios
      .get(`${process.env.REACT_APP_SECRETME}/123123123`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const testDatabase = () => {
    axios
      .get(`${process.env.REACT_APP_USERS_SERVICE_URL}/pingdb`)
      .then((res) => {
        alert(JSON.stringify(res.data));
      });
  };
  // console.log(
  //   "REACT_APP_USERS_SERVICE_URL",
  //   process.env.REACT_APP_USERS_SERVICE_URL
  // );
  // console.log("process.env.REACT_APP_SECRETME", process.env.REACT_APP_SECRETME);
  return (
    <div className="App">
      <br />
      Hello
      <br />
      <br />
      <button onClick={tester}>secretify</button>
      <button onClick={tester2}>secretify2</button>
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
