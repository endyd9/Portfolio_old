import { useEffect, useState } from "react";

const ProjectDetail = ({ name, detailStatus }) => {
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
        description = [
          "시작화면",
          "게임화면",
          "답안 제출후 채점",
          "오답 화면",
          "정답 화면",
          "게임결과",
        ];
        return (
          <div className="pt-14 flex justify-between">
            <div className="pt-5 w-[40vw] h-96 relative mx-5">
              <button
                onClick={prev}
                className="absolute hover:scale-150 transition-transform left-3 top-48 w-8 h-8 bg-white text-2xl rounded-full"
              >
                ＜
              </button>
              <button
                onClick={next}
                className="absolute hover:scale-150 transition-transform right-3 top-48 w-8 h-8 bg-white text-2xl rounded-full"
              >
                ＞
              </button>
              <div
                id="container"
                className="transition-all flex flex-nowrap overflow-x-hidden w-[100%]"
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
              <p className="mt-8">
                {description?.length ? description[dcount] : null}
              </p>
            </div>
            <div className="bg-white mt-3 mb-0 w-[40vw] h-96 relative rounded-md mx-5">
              <ul className="mt-5 ml-8 list-disc text-start text-sm">
                <li className="text-lg">프로젝트 개요</li>
                <p>구글의 Vision API를 활용한 간단한 게임입니다.</p>
                <p>
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
                <p>
                  이미지 인식AI를 활용하면 게임으로 발전시킬 수 있을거 같아
                  시작한 프로젝트 입니다.
                </p>
                <p>
                  프론트는 강의소스를 활용하여 EJS로 옮겨 SSR방식으로
                  구현하였고,
                </p>
                <p>
                  백엔드는 Express.JS로 서버를 구축하여 프론트에서 답안 체크
                  요청을
                </p>
                <p>
                  받으면 구글 Vision을 사용해 유저의 그림을 라벨링하여 돌려주는
                  방식을
                </p>
                <p>사용했습니다.</p>
                <br />
                <li className="text-lg">사용언어 및 프레임 워크</li>
                <p>Frontend :HTML, CSS, JavaScript</p>
                <p>Backend : Node.JS, Express.JS, EJS, Google Vision</p>
                <br />
                <li className="text-lg">소스코드</li>
                <p>
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
          <div className="pt-10 flex justify-between">
            <div className="pt-10 w-[40vw] h-96 relative mx-5">
              <button
                onClick={prev}
                className="absolute hover:scale-150 transition-transform left-3 top-56 w-8 h-8 bg-white text-2xl rounded-full"
              >
                ＜
              </button>
              <button
                onClick={next}
                className="absolute hover:scale-150 transition-transform right-3 top-56 w-8 h-8 bg-white text-2xl rounded-full"
              >
                ＞
              </button>
              <div
                id="container"
                className="transition-all flex flex-nowrap overflow-x-hidden"
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
              <p className="mt-7">
                {description?.length ? description[dcount] : null}
              </p>
            </div>
            <div className="bg-white mt-5 mb-0 w-[40vw] h-[450px] relative rounded-md mx-5">
              <ul className="mt-5 ml-8 list-disc text-start text-sm">
                <li className="text-lg">프로젝트 개요</li>
                <p>React.JS와 Express.JS 를 활용한 중고거래 서비스 입니다.</p>
                <p>React.JS를 배우고 손에 익히기 위해 진행한 프로젝트입니다.</p>
                <p>
                  백엔드는 DB의 CRUD만 담당하고 라우팅은 ReactRoute를 활용하여
                  CSR로
                </p>
                <p>구현하였습니다.</p>
                <p>
                  프론트는 React.JS를 활용한 SPA로 구현하여, 회원가입, 로그인,
                  게시글 작성,
                </p>
                <p>
                  게시글 검색 등 기본적인 기능들을 구현하였고, Socket.io를
                  활용하여 실시간
                </p>
                <p>통신방식으로 채팅 기능을 구현하였습니다.</p>
                <br />
                <li className="text-lg">사용언어 및 프레임 워크</li>
                <p>Frontend : JavaScript, React.JS </p>
                <p>Backend : Node.JS, Express.JS, Socket.io</p>
                <p>DB : MongoDB</p>
                <br />
                <li className="text-lg">소스코드</li>

                <ul className="list-disc ml-1">
                  <li className="text-base">React</li>
                  <p>
                    github :{" "}
                    <a
                      className="underline text-slate-400"
                      href="https://github.com/endyd9/OiMarket-client"
                      target="_blank"
                    >
                      소스코드 바로가기
                    </a>
                  </p>
                  <li className="text-base">ALL</li>
                  <p>
                    github :{" "}
                    <a
                      className="underline text-slate-400"
                      href="https://github.com/endyd9/OI-Market"
                      target="_blank"
                    >
                      소스코드 바로가기
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
    <div className="relative animate-[intro_1s] mt-10 bg-slate-300 w-[80vw] h-full rounded-md">
      <button
        onClick={() => detailStatus()}
        className="absolute text-2xl mt-5 right-6 tex"
      >
        ❌
      </button>
      {project()}
    </div>
  );
};

export default ProjectDetail;
