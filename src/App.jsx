import { useState } from "react";
import "./css/index.css";
import Home from "./components/home";
import Skill from "./components/skill";
import Project from "./components/project";
import About from "./components/about";
import Contect from "./components/contect";

export const isMobile =
  /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

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
      <header className="fixed z-10 flex justify-between items-center px-10 lg:h-28 h-48 w-full bg-black text-gray-300">
        <h1
          onClick={() => setPage("home")}
          className="lg:text-[500%] font-thin text-8xl cursor-pointer"
        >
          Portfolio
        </h1>
        <nav>
          <ul className="list-none flex flex-row  lg:text-4xl lg:space-x-10 text-[300%] font-thin space-x-5">
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
