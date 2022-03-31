import { useContext } from "react";
import { AppContext } from "../App";

const Blue = () => {
  const Context = useContext(AppContext);
  console.log(Context);
  return (
    <>
      <h1 style={{ color: "blue" }}>Blue for Context</h1>
    </>
  );
};

export default Blue;
