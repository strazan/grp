import Header from "../components/Header";
import Head from "../components/head.js";
import Hero from "../components/Hero";
import Initiatives from "../components/Initiatives";
import Intro from "../components/Intro";
import style from "./style/index.module.scss";
import SearchBar from "../components/SearchBar";

const IndexPage = () => {
<<<<<<< HEAD
  return (
    <div>
      <Head />
      <Header />
      <div className={style.root}>
        <Intro />

        <Initiatives />
      </div>
    </div>
  );
=======
     return (
          <div>
               <Head />
               <Header />
               <div className={style.root}>
                    <Intro />
                    <Hero />
                    <Initiatives />
               </div>
          </div>
     );
>>>>>>> 56d5529fc52dfbbf0ff55346c351df9cf1ea8d3b
};

export default IndexPage;
