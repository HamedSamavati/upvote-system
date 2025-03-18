export const saveToLocalStorage = (key, state) => {
  localStorage.setItem(key, JSON.stringify(state));
};

export const getFromLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const InitialState = () => {
  return {
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

export const getInitialState = () => {
  try {
    const storedData = getFromLocalStorage("upvoteGroups");
    return storedData ? storedData : InitialState();
  } catch (error) {
    console.error("Error loading localStorage:", error);
    return InitialState();
  }
};
