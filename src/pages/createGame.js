import React from "react";
import "../styles/createGame.css";
import gamesActions from "../redux/actions/gamesActions";
import { useDispatch } from "react-redux";

export default function CreateGame() {
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name: await e.target[0].value,
      image: await e.target[1].value,
      image2: await e.target[2].value,
      image3: await e.target[3].value,
      image4: await e.target[4].value,
      platform: await e.target[5].value,
      gender: await e.target[6].value,
      story: await e.target[7].value,
    };
    dispatch(gamesActions.postGame(data));
  };

  return (
    <div className="container-createGame">
      <form onSubmit={handleSubmit} className="form-createGame">
        <input placeholder="game name" />
        <input placeholder="image 1" />
        <input placeholder="image 2" />
        <input placeholder="image 3" />
        <input placeholder="image 4" />
        <input placeholder="platform" />
        <input placeholder="gender" />
        <input placeholder="story" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
