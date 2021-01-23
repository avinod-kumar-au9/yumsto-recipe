import React from "react";
import HomeDetail from "../Components/Home/Home_Details";
import Search from "../Components/Home/searchbar";

import "./styles/home.scss";

const Home = () => {
  return (
    <div>
      <div className="bg">
        <Search />
      </div>
      <HomeDetail />
    </div>
  );
};
export default Home;
