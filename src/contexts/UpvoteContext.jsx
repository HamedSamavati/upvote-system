import { createContext, useState, useEffect, React } from "react";
import {
  saveToLocalStorage,
  getInitialState,
  InitialState,
} from "../services/app";

export const UpvoteContext = createContext();

export const UpvoteProvider = ({ children }) => {
  const [upvoteGroups, setUpvoteGroups] = useState(getInitialState);

  useEffect(() => {
    saveToLocalStorage("upvoteGroups", upvoteGroups);
    console.log(upvoteGroups);
  }, [upvoteGroups]);

  const toggleUpvote = (group, id) => {
    setUpvoteGroups((prev) => ({
      ...prev,
      [group]: Array.isArray(prev[group])
        ? prev[group].map((vote) =>
            vote.id === id ? { ...vote, selected: !vote.selected } : vote
          )
        : [],
    }));
  };

  const addUpvote = (group) => {
    setUpvoteGroups((prev) => ({
      ...prev,
      [group]: [...(prev[group] || []), { id: Date.now(), selected: false }],
    }));
  };

  const resetUpvotes = () => {
    setUpvoteGroups(InitialState);
  };

  return (
    <UpvoteContext.Provider
      value={{ upvoteGroups, toggleUpvote, addUpvote, resetUpvotes }}
    >
      {children}
    </UpvoteContext.Provider>
  );
};
