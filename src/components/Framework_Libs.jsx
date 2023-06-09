const FrameWorkAndLibs = () => {
  return (
    <div className="text-center">
      <h2 className="mt-5 text-2xl font-semibold">Frontend</h2>
      <div className="my-16 mx-32 animate-up flex flex-row justify-center space-x-36">
        <figure className="w-24 text-center">
          <img
            className="bg-white w-full h-24 rounded-full hover:scale-150 transition-transform"
            src="/img/skill/react.png"
            alt="react"
          />
          <figcaption>React.JS</figcaption>
        </figure>
        <figure className="w-24 text-center">
          <img
            className="bg-white w-full rounded-full hover:scale-150 transition-transform"
            src="/img/skill/next.png"
            alt="next"
          />
          <figcaption>Next.JS</figcaption>
        </figure>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Backend</h2>
      <div className="my-16 mx-32 animate-up flex flex-row justify-center">
        <figure className="w-24 text-center">
          <img
            className="bg-white w-full rounded-full hover:scale-150 transition-transform"
            src="/img/skill/express.svg"
            alt="express"
          />
          <figcaption>Express.JS</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default FrameWorkAndLibs;
