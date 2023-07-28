const FrameWorkAndLibs = () => {
  return (
    <div className="text-center">
      <h2 className="lg:mt-5 mt-32 lg:text-2xl text-5xl font-semibold">
        Frontend
      </h2>
      <div className="my-16 mx-32 animate-up flex flex-row justify-center space-x-36">
        <figure className="lg:w-24 w-32 text-center">
          <img
            className="bg-white w-full lg:h-24 h-32 rounded-full hover:scale-150 transition-transform"
            src="https://endyd9.github.io/Portfolio//img/skill/react.png"
            alt="react"
          />
          <figcaption className="lg:text-base text-3xl">React.JS</figcaption>
        </figure>
        <figure className="lg:w-24 w-32 text-center">
          <img
            className="bg-white w-full rounded-full hover:scale-150 transition-transform"
            src="https://endyd9.github.io/Portfolio//img/skill/next.png"
            alt="next"
          />
          <figcaption className="lg:text-base text-3xl">Next.JS</figcaption>
        </figure>
      </div>
      <h2 className="lg:mt-5 mt-32 lg:text-2xl text-5xl font-semibold">
        Backend
      </h2>
      <div className="my-16 mx-32 animate-up flex flex-row justify-center">
        <figure className="lg:w-24 w-32 text-center">
          <img
            className="bg-white w-full rounded-full hover:scale-150 transition-transform"
            src="https://endyd9.github.io/Portfolio//img/skill/express.svg"
            alt="express"
          />
          <figcaption className="lg:text-base text-3xl">Express.JS</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default FrameWorkAndLibs;
