import React from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

function App() {
  const isauth = useSelector((state) => state.authkey.isAuthentication);

  return (
    <React.Fragment>
      <Header></Header>
      {!isauth && <UserProfile></UserProfile>}
      {isauth && <Auth></Auth>}
      <Counter />
    </React.Fragment>
  );
}

export default App;
