import { useState } from "react";
import "./css/index.css";
import Home from "./components/home";
import Skill from "./components/skill";
import Project from "./components/project";
import About from "./components/about";
import Contect from "./components/contect";

function App() {
  const [page, setPage] = useState("home");

  const getPage = () => {
    switch (page) {
      case "home":
        return <Home />;
      case "skill":
        return <Skill />;
      case "project":
        return <Project />;
      case "about":
        return <About />;
      case "contect":
        return <Contect />;
    }
  };
  return (
    <div className="App">
      <header className="fixed z-10 flex justify-between xl:h-28 h-48 w-full bg-black text-gray-300">
        <h1
          onClick={() => setPage("home")}
          className="xl:text-5xl xl:mt-6 xl:ml-10 text-8xl mt-10 ml-10 cursor-pointer"
        >
          Portfolio
        </h1>
        <nav>
          <ul className="list-none flex flex-row xl:mt-10 xl:mr-10 xl:text-2xl xl:space-x-10 mt-16 mr-5 text-[45px] space-x-5">
            <li
              onClick={() => setPage("skill")}
              className="cursor-pointer hover:text-white"
            >
              Skill
            </li>
            <li
              onClick={() => setPage("project")}
              className="cursor-pointer hover:text-white"
            >
              Project
            </li>
            <li
              onClick={() => setPage("about")}
              className="cursor-pointer hover:text-white"
            >
              About
            </li>
            <li
              onClick={() => setPage("contect")}
              className="cursor-pointer hover:text-white"
            >
              Contect
            </li>
          </ul>
        </nav>
      </header>
      <section className="flex justify-center">{getPage()}</section>
    </div>
  );
}

export default App;
