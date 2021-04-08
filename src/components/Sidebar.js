import React from "react";
import "../style/Sidebar.css";
import logo from "../img/logo.png";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../StateProvider";
function Sidebar() {
  const [{ playlist }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <a target="_blank " href="https://www.spotify.com/pl/home/">
        <img className="sidebar__logo" src={logo} alt="logo" />
      </a>
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Libary" Icon={LibraryMusicIcon} />

      <h5>Playlist</h5>
      <hr />
      {playlist?.items?.map((playlist, id) => (
        <SidebarOption
          key={id}
          title={playlist.name}
          playlistId={playlist.id}
          playlistUri={playlist.uri}
        />
      ))}
    </div>
  );
}

export default Sidebar;
