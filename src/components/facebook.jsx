import React, { useState } from "react";
import ReactFacebookLogin from "react-facebook-login";
import FacebookLogin from "react-facebook-login";

const Facebook = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [state, setstate] = useState({
    userId: "",
    name: "",
    email: "",
    picture: "",
  });

  let fbContent = null;

  const componentClicked = () => {
    console.log("first");
  };

  const responseFacebook = (response) => {
    setisLoggedIn(true);
    setstate({
      userId: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
  };

  if (isLoggedIn) {
    fbContent = (
      <div
        style={{
          width: "400px",
          margin: "auto",
          padding: "20px",
        }}
      >
        <img src={state.picture} alt={state.name} />
        <h2>Welcome {state.name}</h2>
        <p>Email: {state.email}</p>
      </div>
    );
  } else {
    fbContent = (
      <ReactFacebookLogin
        appId=""
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    );
  }

  return fbContent;
};

export default Facebook;
