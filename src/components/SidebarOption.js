import React from "react";
import "../style/SidebarOption.css";
import { useDataLayerValue } from "../StateProvider";
import { Link } from "react-router-dom";

function SidebarOption({ title, Icon, playlistId, playlistUri }) {
  const [{}, dispatch] = useDataLayerValue();
  const handleClick = () => {
    dispatch({
      type: "SET_PLAYLIST_ID",
      playListId: playlistId,
    });
    dispatch({
      type: "SET_TRACK_URI",
      trackUri: playlistUri,
    });
  };

  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        title === "Search" ? (
          <h3>
            <Link to="search">{title}</Link>
          </h3>
        ) : title === "Home" ? (
          <h3>
            <Link to="/">{title}</Link>
          </h3>
        ) : (
          <h3>{title}</h3>
        )
      ) : (
        <p onClick={handleClick}>{title}</p>
      )}
    </div>
  );
}

export default SidebarOption;
