import { useState } from "react";

const Skill = () => {
  const [skill, setSkille] = useState("");
  console.log(skill);
  return (
    <div className="mt-28 w-full h-[100%] animate-intro overflow-y-hidden">
      <div className="mt-10 ml-[10%] w-[80%] h-[700px] bg-slate-400 rounded-lg">
        <h1 className="pt-5 pb-5 text-4xl text-center font-bold">Skills</h1>
        <nav>
          <ul className="list-none flex flex-row justify-center space-x-5 text-xl">
            <li
              onClick={() => setSkille("l")}
              className="hover:font-bold cursor-pointer"
            >
              Language
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
              FrameWork
            </li>
          </ul>
        </nav>
        {skill === "l" ? (
          <div className="text-center">
            <h2 className="mt-5 text-2xl font-semibold">Frontend</h2>
            <div className="my-16 mx-32 animate-up flex flex-row justify-between">
              <figure className="w-24 text-center">
                <img
                  className="bg-white w-full rounded-full"
                  src="/img/html.png"
                  alt="html"
                />
                <figcaption>HTML</figcaption>
              </figure>
              <figure className="w-24 text-center">
                <img
                  className="bg-white w-full rounded-full"
                  src="/img/css.png"
                  alt="css"
                />
                <figcaption>CSS</figcaption>
              </figure>
              <figure className="w-24 text-center">
                <img
                  className="bg-white w-full rounded-full"
                  src="/img/js.png"
                  alt="js"
                />
                <figcaption>JS</figcaption>
              </figure>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">Backend</h2>
            <div className="my-16 mx-32 animate-up flex flex-row justify-center">
              <figure className="w-24 text-center">
                <img
                  className="bg-white w-full rounded-full"
                  src="/img/node.png"
                  alt="node"
                />
                <figcaption>Node.JS</figcaption>
              </figure>
            </div>
          </div>
        ) : null}
        {skill === "d" ? (
          <div className="text-center">
            <h2 className="mt-5 text-2xl font-semibold">SQL</h2>
            <div className="my-16 mx-32 animate-up flex flex-row justify-between">
              <figure className="w-24 text-center">
                <img
                  className="bg-white w-full rounded-full"
                  src="/img/html.png"
                  alt="html"
                />
                <figcaption>HTML</figcaption>
              </figure>
              <figure className="w-24 text-center">
                <img
                  className="bg-white w-full rounded-full"
                  src="/img/js.png"
                  alt="js"
                />
                <figcaption>JS</figcaption>
              </figure>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">NoSQL</h2>
            <div className="my-16 mx-32 animate-up flex flex-row justify-center">
              <figure className="w-24 text-center">
                <img
                  className="bg-white w-full rounded-full"
                  src="/img/node.png"
                  alt="node"
                />
                <figcaption>Node.JS</figcaption>
              </figure>
            </div>
          </div>
        ) : null}
        {skill === "f" ? <div>f</div> : null}
      </div>
    </div>
  );
};

export default Skill;
