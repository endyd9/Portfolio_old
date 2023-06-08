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
        return <Home></Home>;
      case "skill":
        return <Skill></Skill>;
      case "project":
        return <Project></Project>;
      case "about":
        return <About></About>;
      case "contect":
        return <Contect></Contect>;
    }
  };
  return (
    <div className="App">
      <header className="fixed -z-0 flex justify-between h-28 w-full bg-black text-gray-300">
        <h1
          onClick={() => setPage("home")}
          className="text-5xl mt-6 ml-10 cursor-pointer"
        >
          Portfolio
        </h1>
        <nav>
          <ul className="list-none flex flex-row mt-10 mr-10 text-2xl space-x-10">
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
