import React from "react";
import "../style/SearchTopRight.css";
import { useDataLayerValue } from "../StateProvider";
function SearchTopRight({
  trackDuration,
  trackName,
  trackUri,
  trackAlbum,
  trackId,
}) {
  const [{}, dispatch] = useDataLayerValue();
  const handleClick = () => {
    dispatch({
      type: "SET_TRACK_URI",
      trackUri: trackUri,
    });
  };

  return (
    <div className="top__right" onClick={handleClick}>
      <div className="top__right__left">
        <img src={trackAlbum} alt="track_img" />
        <p value={trackId}>{trackName}</p>
      </div>
      <p className="time"> {(trackDuration / 1000 / 60).toFixed(2)}</p>
    </div>
  );
}

export default SearchTopRight;
