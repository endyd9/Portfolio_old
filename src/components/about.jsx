import { isMobile } from "../App";

const About = () => {
  return (
    <div className="lg:mt-36 mt-64 text-center">
      <h1 className="lg:text-4xl text-8xl font-bold">About</h1>
      <div className="animate-[intro_.5s] lg:my-14 lg:w-[80vw] lg:h-[65vh] my-14 w-[80vw] h-full bg-slate-300 rounded-lg flex flex-row ">
        <div className="w-full h-full flex lg:flex-row flex-col items-center xl:justify-between justify-center">
          <div className="xl:w-[50%] xl:ml-20 py-10 mx-10">
            <p className="lg:text-lg text-4xl 2xl:w-[30vw] lg:w-[35vw] xl:text-center text-start">
              안녕하세요.
              <br /> 풀스택 개발자를 지향하는 성장중인 웹개발자 김두용입니다.
              <br /> 선호하는 개발언어는 자바스크립트, 타입스크립트이고,
              <br />
              프론트엔드는 React.JS, 백엔드는 Express.JS, 를 선호합니다.
              <br />
              관련학과를 졸업 후 공백기가 있어 국비지원 웹풀스택 교육과정에
              참여하여 기초를 다시 다지고 <br /> 따로 인터넷 강의 등을 통해
              ReactJS, NextJS expressJS와 같은 라이브러리와 프레임워크를 사용해
              보았습니다
              <br /> 새로운 프레임워크나 언어를 학습하는데에 관심이 많고
              <br /> 가독성 좋은 코드를 작성하기위해 많이 고민하고있습니다.
            </p>
          </div>
          <div className="xl:w-[50%] text-start 2xl:ml-36 lg:ml-20 flex flex-col items-center justify-center">
            {isMobile ? (
              <h1 className="text-5xl mb-5 font-bold">교육</h1>
            ) : null}
            <ul className="w-full h-full px-10 lg:space-y-0 space-y-10">
              <li className="lg:text-3xl text-6xl">2016</li>
              <p className="lg:text-xl text-5xl">
                영남이공대 컴퓨터 정보과 입학
              </p>
              <li className="lg:text-3xl text-6xl">2020</li>
              <p className="lg:text-xl text-5xl">
                영남이공대 컴퓨터 정보과 졸업
              </p>
              <li className="lg:text-3xl text-6xl">2022</li>
              <p className="lg:text-xl text-5xl">
                한국디지털직업전문학교 풀스택 과정 참여
              </p>
              <li className="lg:text-3xl text-6xl">2023</li>
              <p className="lg:text-xl text-5xl">
                한국디지털직업전문학교 풀스택 과정 수료
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
