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
    <div className="animate-[intro_.5s] mt-32 text-center">
      <h1 className="mt-5 text-4xl font-bold">{title}</h1>
      {detail ? (
        <ProjectDetail name={name} detailStatus={detailStatus} />
      ) : (
        <div className="animate-[intro_1s] mt-36 flex flex-wrap justify-center ">
          <div
            onClick={() => showDetail("Drawing Game")}
            className="w-1/3 mx-14 my-3 cursor-pointer"
          >
            <img
              className="hover:animate-bounce"
              src="https://endyd9.github.io/Portfolio//img/drawing/7.png"
              alt="DrawingGame"
            />
            <p>DrawingGame</p>
          </div>
          <div
            onClick={() => showDetail("Oi-Market")}
            className="w-1/3 mx-14 my-3 cursor-pointer"
          >
            <img
              className="hover:animate-bounce"
              src="https://endyd9.github.io/Portfolio//img/oi/로그인 안한 메인.png"
              alt=""
            />
            <p>Oi-Market</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default Project;
