import "../styles/global.scss";
import UpvoteList from "../components/UpvoteList";
import { useContext } from "react";
import { UpvoteContext } from "../contexts/UpvoteContext";
import { GrPowerReset } from "react-icons/gr";

const Home = () => {
  const { resetUpvotes } = useContext(UpvoteContext);

  return (
    <div className="home">
      <h1 className="header">Upvote System</h1>
      <div className="lists-container">
        <UpvoteList group="agreeing" />
        <UpvoteList group="disagreeing" />
      </div>

      <button className="reset-button" onClick={resetUpvotes}>
        <GrPowerReset />
        Reset
      </button>
    </div>
  );
};

export default Home;
