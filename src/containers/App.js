import React from "react";
import Cardlist from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { useState, useEffect } from "react";
import Scroll from "../components/Scroll";

const App = () => {
  const [query, setQuery] = useState("");
  const [robots, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setUser(users));
  }, []);

  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(query.toLowerCase())
  );
  return !robots.length ? (
    <h1>Loading...</h1>
  ) : (
    <div className="inputContainer">
      <h1 id="header">RoboFriends</h1>
      <SearchBox searchChange={(e) => setQuery(e.target.value)} />
      <Scroll>
        <Cardlist robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default App;
