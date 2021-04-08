import React from "react";
import "../style/Albums.css";
import { useDataLayerValue } from "../StateProvider";

function Albums({ album }) {
  const [{}, dispatch] = useDataLayerValue();
  const handleClick = () => {
    dispatch({
      type: "SET_TRACK_URI",
      trackUri: album.uri,
    });
  };
  return (
    <div onClick={handleClick} className="albums">
      <img src={album.images[0]?.url} alt={`Album ${album.name}`} />
      <p>{album.name}</p>
    </div>
  );
}

export default Albums;
