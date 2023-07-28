import { useState } from "react";
import ProjectDetail from "./ProjectDetail";

const Project = () => {
  const [title, setTitle] = useState("Projects");
  const [detail, setDetail] = useState(false);
  const [name, setName] = useState("");

  const detailStatus = (value) => {
    setDetail(value);
    setTitle("Projects");
  };
  const showDetail = (name) => {
    setDetail(true);
    setName(name);
    setTitle(name);
  };
  return (
    <div className="animate-[intro_.5s] lg:mt-32 mt-56 text-center">
      <h1 className="mt-5 lg:text-4xl text-6xl font-bold">{title}</h1>
      {detail ? (
        <ProjectDetail name={name} detailStatus={detailStatus} />
      ) : (
        <div className="animate-[intro_1s] lg:mt-36 mt-28 flex lg:flex-row flex-col flex-wrap justify-center items-center lg:space-y-0 space-y-20 ">
          <div
            onClick={() => showDetail("Drawing Game")}
            onMouseEnter={() =>
              document.querySelector("#draw").classList.add("animate-bounce")
            }
            onMouseLeave={() =>
              document.querySelector("#draw").classList.remove("animate-bounce")
            }
            className="lg:w-1/3 lg:mx-14 mx-10 lg:my-3 cursor-pointer  lg:space-y-0 space-y-10"
          >
            <img
              id="draw"
              src="https://endyd9.github.io/Portfolio//img/drawing/7.png"
              alt="DrawingGame"
            />
            <p className="lg:text-lg text-4xl">DrawingGame</p>
          </div>
          <div
            onClick={() => showDetail("Oi-Market")}
            onMouseEnter={() =>
              document.querySelector("#oi").classList.add("animate-bounce")
            }
            onMouseLeave={() =>
              document.querySelector("#oi").classList.remove("animate-bounce")
            }
            className="lg:w-1/3 lg:mx-14 mx-10 lg:my-3 cursor-pointer lg:space-y-0 space-y-10"
          >
            <img
              id="oi"
              src="https://endyd9.github.io/Portfolio//img/oi/로그인 안한 메인.png"
              alt=""
            />
            <p className="lg:text-lg text-4xl">Oi-Market</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Project;
