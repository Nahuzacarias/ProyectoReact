import React, { useEffect, useState } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import axios from "axios";
import { Link } from "react-router-dom";

const CharacterList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    /*
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
    */
    axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      setUsers(res.data)
    );
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <Link to={`/detail/${user.id}`}>
            <CharacterCard key={user.id} data={user} />
          </Link>
        );
      })}
    </div>
  );
};

export default CharacterList;