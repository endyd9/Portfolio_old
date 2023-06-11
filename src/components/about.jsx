const About = () => {
  return (
    <div className="mt-36">
      <h1 className="text-4xl font-bold text-center">About</h1>
      <div className="animate-[intro_.5s] mt-14 pt-28 w-[80vw] h-[55vh] bg-slate-300 rounded-lg flex justify-center">
        <ul className="list-disc">
          <li className="text-2xl">2016</li>
          <p>영남이공대 컴퓨터 정보과 입학</p>
          <li className="text-2xl">2020</li>
          <p>영남이공대 컴퓨터 정보과 졸업</p>
          <li className="text-2xl">2022</li>
          <p>한국디지털직업전문학교 풀스택 과정 참여</p>
          <li className="text-2xl">2023</li>
          <p>한국디지털직업전문학교 풀스택 과정 수료 예정</p>
        </ul>
      </div>
    </div>
  );
};
export default About;
