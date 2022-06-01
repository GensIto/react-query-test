import type { NextPage } from "next";
import { FetchData } from "../components/FetchData";

const Home: NextPage = () => {
  return (
    <div>
      <h1>HI</h1>
      <FetchData />
    </div>
  );
};

export default Home;
