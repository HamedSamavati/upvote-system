import { createContext, useState, useEffect } from "react";

export const UpvoteContext = createContext();

export const UpvoteProvider = ({ children }) => {
  const initialState = () => {
    const storedData = localStorage.getItem("upvoteGroups");
    return storedData
      ? JSON.parse(storedData)
      : {
          agreeing: [
            { id: 1, selected: false },
            { id: 2, selected: false },
          ],
          disagreeing: [
            { id: 3, selected: false },
            { id: 4, selected: false },
          ],
        };
  };

  const [upvoteGroups, setUpvoteGroups] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("upvoteGroups", JSON.stringify(upvoteGroups));
  }, [upvoteGroups]);

  const toggleUpvote = (group, id) => {
    setUpvoteGroups((prev) => ({
      ...prev,
      [group]: prev[group].map((vote) =>
        vote.id === id ? { ...vote, selected: !vote.selected } : vote
      ),
    }));
  };

  const addUpvote = (group) => {
    setUpvoteGroups((prev) => ({
      ...prev,
      [group]: [...prev[group], { id: Date.now(), selected: false }],
    }));
  };

  return (
    <UpvoteContext.Provider value={{ upvoteGroups, toggleUpvote, addUpvote }}>
      {children}
    </UpvoteContext.Provider>
  );
};
