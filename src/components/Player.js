import React from "react";
import { useDataLayerValue } from "../StateProvider";
import SpotifyPlayer from "react-spotify-web-playback";
import "../style/Player.css";
function Player() {
  const [{ token, trackUri }, dispatch] = useDataLayerValue();
  return (
    <div className="player">
      <SpotifyPlayer
        styles={{
          sliderColor: "green",
          activeColor: "green",
          loaderColor: "green",
          bgColor: "#181818",
          color: "lightgray",
          trackNameColor: "#fff",
          sliderHandleColor: "green",
        }}
        autoPlay={true}
        showSaveIcon={true}
        token={token}
        uris={
          trackUri ? [trackUri] : ["spotify:playlist:0yN0S2jhUptsI7RLBwDypz"]
        }
      />
    </div>
  );
}

export default Player;

/*
 */
