import React, { useContext } from "react";
import Upvote from "./Upvote";
import { UpvoteContext } from "../contexts/UpvoteContext";
import { FaPlus } from "react-icons/fa";

const UpvoteList = ({ group }) => {
  const { upvoteGroups, toggleUpvote, addUpvote } = useContext(UpvoteContext);

  return (
    <div className="upvote-list">
      {upvoteGroups[group].map((vote) => (
        <Upvote
          key={vote.id}
          selected={vote.selected}
          onClick={() => toggleUpvote(group, vote.id)}
        />
      ))}
      <button className="add-button" onClick={() => addUpvote(group)}>
        <FaPlus />
      </button>
    </div>
  );
};

export default UpvoteList;
