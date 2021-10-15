import React from "react";
import "./_sidebar.scss";
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { log_out } from "../../redux/actions/auth.action";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebar, handleToogleSidebar }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(log_out());
  };
  return (
    <nav
      className={sidebar ? "sidebar open" : "sidebar"}
      onClick={() => handleToogleSidebar(false)}
    >
      <li>
        <MdHome size={23} />
        <span>Home</span>
      </li>
      
      <Link to="/feed/subcriptions">
        <li>
          <MdSubscriptions size={23} />
          <span>Subscriptions</span>
        </li>
      </Link>

      <li>
        <MdThumbUp size={23} />
        <span>Liked Videos</span>
      </li>

      <li>
        <MdHistory size={23} />
        <span>History</span>
      </li>

      <li>
        <MdLibraryBooks size={23} />
        <span>Library</span>
      </li>

      <li>
        <MdSentimentDissatisfied size={23} />
        <span>I don't know</span>
      </li>

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
