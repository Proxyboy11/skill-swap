import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  function back() {
    navigate(-1);
  }
  return (
    <div className="back-btn">
      <IoMdArrowBack
        // style={{
        //   fontSize: "1.5rem",
        //   color: "white",
        //   marginLeft: "2rem",
        //   marginTop: "1.5rem",
        //   cursor: "pointer",
        // }}
        onClick={back}
      />
    </div>
  );
};

export default BackButton;
