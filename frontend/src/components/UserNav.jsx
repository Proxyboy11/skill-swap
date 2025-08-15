import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import Profile from "./Profile";
import React from "react";
import NotificationBar from "./Notification";
import BackButton from "./BackButton";

const UserNav = () => {
  const rawUser = localStorage.getItem("user");
  const { username } = JSON.parse(rawUser);
  const [showProfile, setShowProfile] = React.useState(false);
  const [showNotification, setShowNotification] = React.useState(false);

  return (
    <div>
      <div className="user-nav" style={{ borderBottom: "3px solid white" }}>
        <Link to={"/skills"}>
          <h2>Explore Skills</h2>
        </Link>
        <Link to={"skills/user"}>
          <h2>Your Skills</h2>
        </Link>
        <Link to={"skills/user/search"}>
          <h2>Search User</h2>
        </Link>
        {showNotification ? <NotificationBar /> : null}
        <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <CgProfile
            style={{ color: "white", fontSize: "1.5rem", cursor: "pointer" }}
            // onClick={() => setShowProfile(!showProfile)}
          />
          <IoIosNotifications
            style={{ color: "yellow", fontSize: "1.5rem", cursor: "pointer" }}
            onClick={() => setShowNotification(!showNotification)}
          />
          {showNotification ? null : (
            <h2 style={{ color: "peachpuff", textTransform: "uppercase" }}>
              {username}
            </h2>
          )}
        </div>
        {/* {showProfile ? <Profile /> : null} */}
      </div>
      <BackButton />
      <Outlet />
    </div>
  );
};

export default UserNav;
