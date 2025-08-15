import React from "react";

const Profile = () => {
  const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="profile">
      <h2>
        <span>Username : </span>
        {userData.username}
      </h2>
      <h2>
        <span>Email : </span>
        {userData.email}
      </h2>
    </div>
  );
};

export default Profile;
