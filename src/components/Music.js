import React from "react";
import { useEffect } from "react";
import "../style/Music.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "../StateProvider";
import { Route } from "react-router-dom";
import Search from "./Search";

function Music() {
  const spotify = new SpotifyWebApi();
  const [{ playListId }, dispatch] = useDataLayerValue();
  useEffect(() => {
    spotify.getPlaylist(playListId).then((response) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      });
    });
  }, [playListId]);
  return (
    <div className="music">
      <div className="music__body">
        <Sidebar />
        <Route path="/" exact component={Body} />
        <Route path="/search" component={Search} />
      </div>
      <Footer />
    </div>
  );
}

export default Music;
