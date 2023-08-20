import { useEffect, useState } from "react";
import { isMobile } from "../App";

const ProjectDetail = ({ name, detailStatus }) => {
  let buttonPosition;
  const [slider, setSlider] = useState(0);
  const [dcount, setDcount] = useState(0);
  let description;
  useEffect(() => {
    const container = document.getElementById("container");
    container.scrollTo({
      top: 0,
      left: slider,
      behavior: "smooth",
    });
  }, [slider]);

  const prev = () => {
    const container = document.getElementById("container");
    const width = container.clientWidth;
    if (slider === 0) return alert("첫번째 사진입니다.");
    setSlider((prev) => prev - width);
    setDcount((prev) => prev - 1);
  };

  const next = () => {
    const container = document.getElementById("container");
    const width = container.clientWidth;
    if (slider === width * (container.childElementCount - 1))
      return alert("마지막 사진입니다.");
    setSlider((prev) => prev + width);
    setDcount((prev) => prev + 1);
  };

  const project = () => {
    switch (name) {
      case "Drawing Game":
        buttonPosition = isMobile ? "lg:top-[27vh]" : "lg:top-[36vh]";
        description = [
          "시작화면",
          "게임화면",
          "답안 제출후 채점",
          "오답 화면",
          "정답 화면",
          "게임결과",
        ];
        return (
          <div className="h-full flex lg:flex-row flex-col lg:justify-between items-center justify-center ">
            <div className="w-[50vw] xl:mb-0 mb-44 h-96 lg:mx-10 mx-5 mr-[32.5vw] lg:mr-0">
              <button
                onClick={prev}
                className={`absolute lg:hover:scale-150  transition-transform 2xl:left-[3vw] lg:left-[3.5vw] ${buttonPosition} top-72 left-14 lg:w-8 lg:h-8 w-16 h-16 bg-white lg:text-2xl text-5xl rounded-full`}
              >
                ＜
              </button>
              <button
                onClick={next}
                className={`absolute lg:hover:scale-150 transition-transform lg:right-[40.7vw] ${buttonPosition}  top-72 right-14 lg:w-8 lg:h-8 w-16 h-16 bg-white lg:text-2xl text-5xl rounded-full`}
              >
                ＞
              </button>
              <div
                id="container"
                className="transition-all flex flex-nowrap overflow-x-hidden lg:w-[100%] w-[80vw]"
              >
                <img
                  src="https://endyd9.github.io/Portfolio//img/drawing/1.png"
                  alt=""
                />
                <img
                  src="https://endyd9.github.io/Portfolio//img/drawing/2.png"
                  alt=""
                />
                <img
                  src="https://endyd9.github.io/Portfolio//img/drawing/3.png"
                  alt=""
                />
                <img
                  src="https://endyd9.github.io/Portfolio//img/drawing/4.png"
                  alt=""
                />
                <img
                  src="https://endyd9.github.io/Portfolio//img/drawing/5.png"
                  alt=""
                />
                <img
                  src="https://endyd9.github.io/Portfolio//img/drawing/6.png"
                  alt=""
                />
              </div>
              <p className="w-full h-full my-5 ml-36 lg:ml-0 lg:text-sm text-3xl">
                {description?.length ? description[dcount] : null}
              </p>
            </div>
            <div className="bg-white lg:w-[50vw] w-[80vw] lg:min-h[50vh]  relative rounded-md mx-5">
              <ul className="mt-5 ml-8 list-disc text-start text-sm px-3">
                <li className="lg:text-lg text-4xl">프로젝트 개요</li>
                <p className="lg:text-sm text-2xl">
                  구글의 Vision API를 활용한 간단한 게임입니다.
                </p>
                <p className="lg:text-sm text-2xl">
                  NomardCoder의{" "}
                  <a
                    className="underline text-slate-400"
                    href="https://nomadcoders.co/javascript-for-beginners-2"
                    target="_blank"
                  >
                    바닐라 JS 로 그림 앱 만들기
                  </a>{" "}
                  강의를 수강하고,
                </p>
                <p className="lg:text-sm text-2xl">
                  이미지 인식AI를 활용하면 게임으로 발전시킬 수 있을거 같아
                  시작한 프로젝트 입니다.
                </p>
                <p className="lg:text-sm text-2xl">
                  프론트는 강의소스를 활용하여 EJS 템플릿 엔진을 사용해
                  구현하였고,
                </p>
                <p className="lg:text-sm text-2xl">
                  백엔드는 Express.JS로 서버를 구축하여 프론트에서 답안 체크
                  요청을
                </p>
                <p className="lg:text-sm text-2xl">
                  받으면 구글 Vision을 사용해 유저의 그림을 라벨링하여 돌려주는
                  방식을
                </p>
                <p className="lg:text-sm text-2xl">사용했습니다.</p>
                <br />
                <li className="lg:text-lg text-4xl">사용언어 및 프레임 워크</li>
                <p className="lg:text-sm text-2xl">
                  개발환경 : MacOS13, VScode
                </p>
                <p className="lg:text-sm text-2xl">
                  Frontend :HTML, CSS, JavaScript
                </p>
                <p className="lg:text-sm text-2xl">
                  Backend : Node.JS, Express.JS, EJS, Google Vision
                </p>
                <br />
                <li className="lg:text-lg text-4xl">소스코드</li>
                <p className="lg:text-sm text-2xl">
                  github :{" "}
                  <a
                    className="underline text-slate-400"
                    href="https://github.com/endyd9/Drawing-Game"
                    target="_blank"
                  >
                    소스코드 바로가기
                  </a>
                </p>
                <br />
              </ul>
            </div>
          </div>
        );
      case "Oi-Market":
        buttonPosition = isMobile ? "lg:top-[30vh]" : "lg:top-[33vh]";
        description = [
          "메인 페이지",
          "로그인 페이지",
          "회원가입 페이지",
          "로그인 후 메인 페이지",
          "결과물 없는 검색 화면",
          "검색결과 화면",
          "상품 업로드 페이지",
          "메세지 페이지",
          "채팅방",
          "마이페이지",
          "회원정보 수정",
          "본인이 업로드 한 상품 페이지",
          "상품 수정 페이지",
          "판매상태 변경1",
          "판매상태 변경2",
          "다른 이용자의 상품 페이지",
          "다른 이용자의 마이페이지",
        ];
        return (
          <div className="lg:pt-0 pt-10  h-full flex lg:flex-row flex-col lg:justify-between items-center justify-center ">
            <div className="w-[50vw] h-96 mx-5 mr-[32.5vw] lg:mr-0 mt-10 xl:-mt-32 lg:-mt-10">
              <button
                onClick={prev}
                className={`absolute lg:hover:scale-150 transition-transform lg:left-9 ${buttonPosition} top-96 left-14 lg:w-8 lg:h-8 w-16 h-16 bg-white lg:text-2xl text-5xl rounded-full`}
              >
                ＜
              </button>
              <button
                onClick={next}
                className={`absolute lg:hover:scale-150 transition-transform lg:right-[41.5vw] ${buttonPosition}  top-96 right-14 lg:w-8 lg:h-8 w-16 h-16 bg-white lg:text-2xl text-5xl rounded-full`}
              >
                ＞
              </button>
              <div
                id="container"
                className="transition-all flex flex-nowrap overflow-x-hidden 2xl:mt-10 xl:mt-20 lg:w-[100%] w-[80vw]"
              >
                <img
                  src="https://endyd9.github.io/Portfolio//img/oi/로그인 안한 메인.png"
                  alt=""
                />
                <img
                  src="https://endyd9.github.io/Portfolio//img/oi/로그인.png"
                  alt=""
                />
                <img
                  src="https://endyd9.github.io/Portfolio//img/oi/회원가입 폼.png"
                  alt=""
                />
                <img
                  src="https://endyd9.github.io/Portfolio//img/oi/로그인 한 메인.png"
                  alt=""
                />
                <img
                  src="https://endyd9.github.io/Portfolio//img/oi/결과물 없는 검색.png"
                  alt=""
                />
                <img
                  src="https://endyd9.github.io/Portfolio//img/oi/결과물 있는 검색.png"
                  alt=""
                />
                <img
                  src="https://endyd9.github.io/Portfolio//img/oi/글쓰기.png"
                  alt=""
                />
                <img
                  src="https://endyd9.github.io/Portfolio//img/oi/메세지 리스트.png"
                  alt=""
                />
                <img
                  src="https://endyd9.github.io/Portfolio//img/oi/메세지 내용.png"
                  alt=""
                />
                <img
                  src="https://endyd9.github.io/Portfolio//img/oi/마이페이지.png"
                  alt=""
                />
                <img
                  src="https://endyd9.github.io/Portfolio//img/oi/회원정보 수정.png"
                  alt=""
                />
                <img
                  src="https://endyd9.github.io/Portfolio//img/oi/내 상품.png"
                  alt=""
                />
                <img
                  src="https://endyd9.github.io/Portfolio//img/oi/글 수정.png"
                  alt=""
                />
                <img
                  src="https://endyd9.github.io/Portfolio//img/oi/상품상태변경1.png"
                  alt=""
                />
                <img
                  src="https://endyd9.github.io/Portfolio//img/oi/상품상태변경3.png"
                  alt=""
                />
                <img
                  src="https://endyd9.github.io/Portfolio//img/oi/남에 상품.png"
                  alt=""
                />
                <img
                  src="https://endyd9.github.io/Portfolio//img/oi/남에페이지.png"
                  alt=""
                />
              </div>
              <p className="w-full h-full my-5 ml-36 lg:ml-0 lg:text-sm text-3xl">
                {description?.length ? description[dcount] : null}
              </p>
            </div>
            <div className="bg-white lg:my-28 my-48 lg:mt-32 lg:w-[50vw] w-[80vw] lg:min-h[50vh] relative rounded-md mx-5">
              <ul className="mt-5 ml-8 list-disc text-start text-sm px-5">
                <li className="lg:text-lg text-4xl">프로젝트 개요</li>
                <p className="lg:text-sm text-2xl">
                  React.JS와 Express.JS 를 활용한 중고거래 서비스 입니다.
                </p>
                <p className="lg:text-sm text-2xl">
                  React.JS를 배우고 손에 익히기 위해 진행한 프로젝트입니다.
                </p>
                {isMobile ? (
                  <>
                    <p className="lg:text-sm text-2xl">
                      백엔드는 DB의 CRUD만 담당하고 라우팅은 ReactRoute를
                      활용하여 SPA로
                    </p>
                    <p className="lg:text-sm text-2xl">구현하였습니다.</p>
                  </>
                ) : (
                  <>
                    <p className="lg:text-sm text-2xl">
                      백엔드는 DB의 CRUD만 담당하고 라우팅은 ReactRoute를
                      활용하여 SPA로 구현하였습니다.
                    </p>
                  </>
                )}
                <p className="lg:text-sm text-2xl">
                  프론트는 React.JS를 활용한 SPA로 구현하여, 회원가입, 로그인,
                  게시글 작성,
                </p>
                <p className="lg:text-sm text-2xl">
                  게시글 검색 등 기본적인 기능들을 구현하였고, Socket.io를
                  활용하여 실시간
                </p>
                <p className="lg:text-sm text-2xl">
                  통신방식으로 채팅 기능을 구현하였습니다.
                </p>
                <br />
                <li className="lg:text-lg text-4xl">사용언어 및 프레임 워크</li>
                <p className="lg:text-sm text-2xl">
                  개발환경 : MacOS13, VScode
                </p>
                <p className="lg:text-sm text-2xl">
                  Frontend : JavaScript, React.JS{" "}
                </p>
                <p className="lg:text-sm text-2xl">
                  Backend : Node.JS, Express.JS, Socket.io
                </p>
                <p className="lg:text-sm text-2xl">DB : MongoDB</p>
                <br />
                <li className="lg:text-lg text-4xl">소스코드</li>
                <ul className="list-disc ml-1">
                  <li className="lg:text-base text-2xl">Frontend</li>
                  <p className="lg:text-sm text-2xl">
                    github :{" "}
                    <a
                      className="underline text-slate-400"
                      href="https://github.com/endyd9/OiMarket-client"
                      target="_blank"
                    >
                      소스코드 바로가기
                    </a>
                  </p>
                  <li className="lg:text-base text-2xl">Backend</li>
                  <p className="lg:text-sm text-2xl">
                    github :{" "}
                    <a
                      className="underline text-slate-400"
                      href="https://github.com/endyd9/Oimarket-server"
                      target="_blank"
                    >
                      소스코드 바로가기
                    </a>
                  </p>
                  <li className="lg:text-base text-2xl">Page</li>
                  <p className="lg:text-sm text-2xl">
                    Deploy :{" "}
                    <a
                      target="_blank"
                      href="https://endyd9.github.io/OiMarket-client/"
                      className="underline text-slate-400"
                    >
                      페이지 바로가기
                    </a>
                  </p>
                </ul>
                <br />
              </ul>
            </div>
          </div>
        );
    }
  };
  return (
    <div className="relative animate-[intro_1s] mt-10 bg-slate-300 lg:w-[80vw] lg:h-[68vh] h-[100%] w-[90vw] rounded-md">
      <button
        onClick={() => detailStatus()}
        className="absolute lg:text-2xl text-4xl mt-5 right-6"
      >
        ❌
      </button>
      {project()}
    </div>
  );
};

export default ProjectDetail;
