import React from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

export const Home = (props) => {
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
      .get(`${process.env.REACT_APP_SECRETME}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  console.log(process.env);
  console.log(user);
  console.log(isAuthenticated);
  return (
    <div>
      <br />
      i am super fast
      
      <br />
      <br />
      <button onClick={testbackend}>Test backend</button>
      <button onClick={testEnv}>Test ENV</button>
      <button onClick={() => loginWithRedirect()}>Log In with amazon</button>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
      <button onClick={() => props.history.push("/dashboard")}>
        dashboard
      </button>
      <br />
      <br />
      <button onClick={testDatabase}>Test Database</button>
    </div>
  );
};
export default Home;
