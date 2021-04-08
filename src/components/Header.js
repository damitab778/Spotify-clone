import React from "react";
import "../style/Header.css";
import Avatar from "@material-ui/core/Avatar";
import { useDataLayerValue } from "../StateProvider";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__container">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
