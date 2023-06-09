import { useState } from "react";
import Languages from "./Languaes";
import DB from "./db";
import FrameWorkAndLibs from "./Framework_Libs";
import Tried from "./Tried";

const Skill = () => {
  const [skill, setSkille] = useState("");
  return (
    <div className="mt-28 w-full h-[100%] animate-[intro_.5s] overflow-y-hidden">
      <div className="mt-10 ml-[10%] w-[80%] h-[700px] bg-slate-400 rounded-lg">
        <h1 className="pt-5 pb-5 text-4xl text-center font-bold">Skills</h1>
        <nav>
          <ul className="list-none flex flex-row justify-center space-x-5 text-xl">
            <li
              onClick={() => setSkille("l")}
              className="hover:font-bold cursor-pointer"
            >
              Languages
            </li>
            <li
              onClick={() => setSkille("d")}
              className="hover:font-bold cursor-pointer"
            >
              DB
            </li>
            <li
              onClick={() => setSkille("f")}
              className="hover:font-bold cursor-pointer"
            >
              FrameWork and Libarys
            </li>
            <li
              onClick={() => setSkille("o")}
              className="hover:font-bold cursor-pointer"
            >
              Tried
            </li>
          </ul>
        </nav>
        {skill === "" ? (
          <div className="animate-pulse text-center mt-[20%] text-4xl text-white font-bold">
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
