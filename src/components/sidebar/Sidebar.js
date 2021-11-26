import React from "react";
import "./_sidebar.scss";
import {
  MdExitToApp,
  MdHome,
  MdWatchLater,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { log_out } from "../../redux/actions/auth.action";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebar, handleToggleSidebar }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(log_out());
  };
  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToggleSidebar(false)}
    >
      <Link to="/" style={{ textDecoration: "none", color : "#b1bdb4" }}>
        <li>
          <MdHome size={23} />
          <span>Home</span>
        </li>
      </Link>

      <Link to="/feed/playlist" style={{textDecoration: "none", color : "#b1bdb4"}}>
        <li>
          <MdWatchLater size={23} />
          <span>Playlist</span>
        </li>
      </Link>

      {/* <li>
        <MdThumbUp size={23} />
        <span>Liked Videos</span>
      </li>
      */}

      <hr />

      <li onClick={handleLogOut}>
        <MdExitToApp size={23} />
        <span>Log out</span>
      </li>

      <hr />
    </nav>
  );
};

export default Sidebar;
