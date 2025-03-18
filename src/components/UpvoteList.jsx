import React, { useContext } from "react";
import Upvote from "./Upvote";
import { UpvoteContext } from "../contexts/UpvoteContext";
import { FaPlus } from "react-icons/fa";
import "../styles/_upvote.scss";

const UpvoteList = ({ group }) => {
  const { upvoteGroups, toggleUpvote, addUpvote } = useContext(UpvoteContext);
  const upvotes = upvoteGroups[group] || [];

  return (
    <div className="upvote-list-container">
      <div className="upvote-list">
        {upvotes.map((vote) => (
          <Upvote
            key={vote.id}
            data-testid="upvote-button"
            selected={vote.selected}
            onClick={() => toggleUpvote(group, vote.id)}
          />
        ))}
      </div>
      <button
        className="add-button"
        data-testid="upvote-plus"
        onClick={() => addUpvote(group)}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default UpvoteList;
