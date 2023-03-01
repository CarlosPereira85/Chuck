import { useContext } from "react";
import MyContext from "../context/MyContext";

const Button = () => {
  const { select, handleJokeButton } = useContext(MyContext);

  return <>{select && <button onClick={handleJokeButton}>Get Joke</button>} </>;
  // return <>{select ? <button onClick={handleJokeButton}>Get Joke</button>:null} </>;
};
export default Button;
