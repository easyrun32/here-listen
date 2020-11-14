import React from "react";
import "./App.css";
import axios from "axios";
function App() {
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
    </div>
  );
}

export default App;
