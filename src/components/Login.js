import React from "react";
import "../style/Login.css";
import spotifyLogo from "../img/spotify.png";
import { loginUrl } from "./spotify";
function Login() {
  return (
    <div className="login">
      <img src={spotifyLogo} alt="spotify_logo" />
      <a href={loginUrl}>Login</a>
    </div>
  );
}

export default Login;
