import React from "react";
import UpvoteList from "../components/UpvoteList";
import "../styles/global.scss";

const Home = () => {
  return (
    <div className="home">
      <h1>Upvote System</h1>
      <UpvoteList group="agreeing" />
      <UpvoteList group="disagreeing" />
    </div>
  );
};

export default Home;
