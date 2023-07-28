import { useState } from "react";
import Languages from "./Languaes";
import DB from "./db";
import FrameWorkAndLibs from "./Framework_Libs";
import Tried from "./Tried";

const Skill = () => {
  const [skill, setSkille] = useState("");
  return (
    <div className="lg:mt-28 mt-48 w-full lg:h-[100%] animate-[intro_.5s] overflow-y-hidden">
      <div className="mt-12 ml-[10%] w-[80%] lg:h-[78vh] h-[75vh] bg-slate-400 rounded-lg">
        <h1 className="lg:py-5 py-10 lg:text-4xl text-6xl text-center font-bold">
          Skills
        </h1>
        <nav>
          <ul className="list-none flex flex-row justify-center space-x-5 text-xl">
            <li
              onClick={() => setSkille("l")}
              className="hover:font-bold cursor-pointer lg:text-base text-4xl"
            >
              Languages
            </li>
            <li
              onClick={() => setSkille("d")}
              className="hover:font-bold cursor-pointer lg:text-base text-4xl"
            >
              DB
            </li>
            <li
              onClick={() => setSkille("f")}
              className="hover:font-bold cursor-pointer lg:text-base text-4xl"
            >
              FrameWork and Libarys
            </li>
            <li
              onClick={() => setSkille("o")}
              className="hover:font-bold cursor-pointer lg:text-base text-4xl"
            >
              Tried
            </li>
          </ul>
        </nav>
        {skill === "" ? (
          <div className="animate-pulse text-center mt-[30vh] lg:text-4xl text-6xl text-white font-bold ">
            Select Menu
          </div>
        ) : null}
        {skill === "l" ? <Languages /> : null}
        {skill === "d" ? <DB /> : null}
        {skill === "f" ? <FrameWorkAndLibs /> : null}
        {skill === "o" ? <Tried /> : null}
      </div>
    </div>
  );
};

export default Skill;
