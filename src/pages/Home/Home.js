import React from "react";
import "./Home.css";
import Profile from "../../components/Profile/Profile";
import Repos from "../../components/Repos/Repos";

const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <Profile />
      </div>
      <div className="home-right">
        <Repos />
      </div>
    </div>
  );
};

export default Home;
