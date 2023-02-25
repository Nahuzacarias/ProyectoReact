import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import CharacterCard from "../../CharacterCard/CharacterCard";

const CharacterDetail = () => {
  const [user, setUser] = useState({});

  let { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
      setUser(res.data)
    );
  }, [id]);

  return (
    <div className="CharacterList-detail">
      <div key={user.id}>
        <CharacterCard data={user} />
      </div>
    </div>
  );
};

export default CharacterDetail;