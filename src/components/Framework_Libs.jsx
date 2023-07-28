const FrameWorkAndLibs = () => {
  return (
    <div className="text-center">
      <h2 className="xl:mt-5 mt-32 xl:text-2xl text-5xl font-semibold">
        Frontend
      </h2>
      <div className="my-16 mx-32 animate-up flex flex-row justify-center space-x-36">
        <figure className="xl:w-24 w-32 text-center">
          <img
            className="bg-white w-full xl:h-24 h-32 rounded-full hover:scale-150 transition-transform"
            src="https://endyd9.github.io/Portfolio//img/skill/react.png"
            alt="react"
          />
          <figcaption className="xl:text-base text-3xl">React.JS</figcaption>
        </figure>
        <figure className="xl:w-24 w-32 text-center">
          <img
            className="bg-white w-full rounded-full hover:scale-150 transition-transform"
            src="https://endyd9.github.io/Portfolio//img/skill/next.png"
            alt="next"
          />
          <figcaption className="xl:text-base text-3xl">Next.JS</figcaption>
        </figure>
      </div>
      <h2 className="xl:mt-5 mt-32 xl:text-2xl text-5xl font-semibold">
        Backend
      </h2>
      <div className="my-16 mx-32 animate-up flex flex-row justify-center">
        <figure className="xl:w-24 w-32 text-center">
          <img
            className="bg-white w-full rounded-full hover:scale-150 transition-transform"
            src="https://endyd9.github.io/Portfolio//img/skill/express.svg"
            alt="express"
          />
          <figcaption className="xl:text-base text-3xl">Express.JS</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default FrameWorkAndLibs;
