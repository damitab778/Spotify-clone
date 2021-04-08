import { useEffect } from "react";
import "../style/App.css";
import Login from "./Login";
import { getToken } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Music from "./Music";
import { useDataLayerValue } from "../StateProvider";
import { BrowserRouter as Router } from "react-router-dom";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getToken();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlist) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlist: playlist,
        });
      });
    }
  }, []);
  return (
    <Router>
      <div className="app">{token ? <Music /> : <Login />}</div>
    </Router>
  );
}

export default App;
