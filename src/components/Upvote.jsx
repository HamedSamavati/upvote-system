import React from "react";
import "../styles/_upvote.scss";
import { FaArrowUp } from "react-icons/fa";

const Upvote = ({ selected, onClick }) => {
  return (
    <button
      className={`upvote ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <FaArrowUp />
    </button>
  );
};

export default Upvote;
