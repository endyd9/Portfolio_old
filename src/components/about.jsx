const About = () => {
  return (
    <div className="lg:mt-36 mt-64 text-center">
      <h1 className="lg:text-4xl text-6xl font-bold">About</h1>
      <div className="animate-[intro_.5s] lg:my-14 lg:w-[80vw] lg:h-[55vh] my-14 w-[80vw] h-full bg-slate-300 rounded-lg  flex flex-col items-center justify-center text-start">
        <ul className="list-disc lg:w-[35%] px-10 lg:space-y-0 space-y-10">
          <li className="lg:text-2xl text-6xl">2016</li>
          <p className="lg:text-base text-4xl">영남이공대 컴퓨터 정보과 입학</p>
          <li className="lg:text-2xl text-6xl">2020</li>
          <p className="lg:text-base text-4xl">영남이공대 컴퓨터 정보과 졸업</p>
          <li className="lg:text-2xl text-6xl">2022</li>
          <p className="lg:text-base text-4xl">
            한국디지털직업전문학교 풀스택 과정 참여
          </p>
          <li className="lg:text-2xl text-6xl">2023</li>
          <p className="lg:text-base text-4xl">
            한국디지털직업전문학교 풀스택 과정 수료
          </p>
        </ul>
      </div>
    </div>
  );
};

export default About;
