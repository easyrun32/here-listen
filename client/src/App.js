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

  const testEnv = () => {
    axios
      .get(`${process.env.REACT_APP_SECRETME}/12312`)
      .then((res) => {
        console.log("testing env");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  console.log(process.env);
  return (
    <div className="App">
      <br />
      Hello
      <br />
      <br />
      <button onClick={testbackend}>Test backend</button>
      <button onClick={testEnv}>Test ENV</button>
      <br />
      <br />
      <button onClick={testDatabase}>Test Database</button>
    </div>
  );
}

export default App;
