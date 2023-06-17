import About from "../components/About";
import ImproveSkills from "../components/ImproveSkills";
import Quotesection from "../components/Quotesection";
import Chiefs from "../components/Chiefs";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <About />
      <ImproveSkills />
      <Quotesection />
      <Chiefs />
    </Fragment>
  );
};

export default Home;
