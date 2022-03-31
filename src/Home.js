import { useContext } from "react";
import { AppContext } from "../App";

const Home = () => {
  const Context = useContext(AppContext);
  console.log(Context);
  return (
    <>
      <h1 style={{ color: "orange" }}>Home for Context</h1>
    </>
  );
};

export default Home;
