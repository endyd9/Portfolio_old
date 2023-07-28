import { useEffect, useState } from "react";
import { isMobile } from "../App";

const Home = () => {
  const [intro, setIntro] = useState(false);
  const [text, setText] = useState("");

  const showText = async () => {
    let cnt = 0;
    const inner = "성장중인 개발자 김두용입니다.";
    setText("");
    while (cnt !== inner.length) {
      setText((prev) => prev + inner[cnt]);
      await new Promise((res) => setTimeout(res, 150));
      cnt += 1;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIntro(true);
      setTimeout(() => showText(), 500);
    }, 1000);
  }, []);
  return (
    <div
      className={
        isMobile
          ? "w-full h-screen -z-10 bg-[url(https://endyd9.github.io/Portfolio/img/main2.jpg)] bg-cover "
          : "w-full h-screen -z-10 bg-[url(https://endyd9.github.io/Portfolio/img/main.jpg)] bg-cover "
      }
    >
      {/* 이미지 출처 출처 https://kr.freepik.com/free-photo/programming-background-with-html_36238378.htm#query=%EA%B0%9C%EB%B0%9C%EC%9E%90&position=5&from_view=keyword&track=sph" */}
      {intro ? (
        <div
          className={
            "animate-intro absolute -z-10 w-full h-screen text-center right-0 bg-black bg-opacity-50"
          }
        >
          <h1 className="relative animate-cursor inline-block w-auto  text-white lg:text-4xl lg:top-1/2 text-7xl top-[45vh] ">
            {text}
          </h1>
        </div>
      ) : null}
      {/* <img
        className="fixed right-0 -z-20 bg-cover"
        src={
          isMobile
            ? "https://endyd9.github.io/Portfolio/img/main2.jpg"
            : "https://endyd9.github.io/Portfolio/img/main.jpg"
        }
        alt="메인사진"
      /> */}
    </div>
  );
};
export default Home;
