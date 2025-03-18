import "./styles/global.scss";

import React from "react";
import Home from "./pages/Home";
import { UpvoteProvider } from "./contexts/UpvoteContext.jsx";

const App = () => {
  return (
    <UpvoteProvider>
      <Home />
    </UpvoteProvider>
  );
};

export default App;
