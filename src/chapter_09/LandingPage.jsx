import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
  const [isLoggedIn, setISLoggedIn] = useState(false);

  const onClickLogin = () => {
    setISLoggedIn(true);
  };

  const onClickLogout = () => {
    setISLoggedIn(false);
  };

  return (
    <div>
      <Toolbar
        isLoggedIn={isLoggedIn}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
      <div style={{ padding: 16 }}>소플과 함께하는 리액트 공부!</div>
    </div>
  );
}

export default LandingPage;
