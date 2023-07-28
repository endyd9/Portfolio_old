const Languages = () => {
  return (
    <div className="text-center">
      <h2 className="xl:mt-5 mt-32 xl:text-2xl text-5xl font-semibold">
        Frontend
      </h2>
      <div className="xl:my-16 xl:mx-32 my-32 animate-up flex flex-row justify-center space-x-36">
        <figure className="xl:w-24 w-32 text-center">
          <img
            className="bg-white w-full rounded-full hover:scale-150 transition-transform"
            src="https://endyd9.github.io/Portfolio//img/skill/html.png"
            alt="html"
          />
          <figcaption className="xl:text-base text-3xl">HTML</figcaption>
        </figure>
        <figure className="xl:w-24 w-32 text-center">
          <img
            className="bg-white w-full rounded-full hover:scale-150 transition-transform"
            src="https://endyd9.github.io/Portfolio//img/skill/css.png"
            alt="css"
          />
          <figcaption className="xl:text-base text-3xl">CSS</figcaption>
        </figure>
        <figure className="xl:w-24 w-32 text-center">
          <img
            className="bg-white w-full rounded-full hover:scale-150 transition-transform"
            src="https://endyd9.github.io/Portfolio//img/skill/js.png"
            alt="js"
          />
          <figcaption className="xl:text-base text-3xl">JS</figcaption>
        </figure>
      </div>
      <h2 className="xl:mt-5 mt-32 xl:text-2xl text-5xl font-semibold">
        Backend
      </h2>
      <div className="my-16 mx-32 animate-up flex flex-row justify-center space-x-36">
        <figure className="xl:w-24 w-32 text-center">
          <img
            className="bg-white w-full rounded-full hover:scale-150 transition-transform"
            src="https://endyd9.github.io/Portfolio//img/skill/node.png"
            alt="node"
          />
          <figcaption className="xl:text-base text-3xl">Node.JS</figcaption>
        </figure>
        <figure className="xl:w-24 w-32 text-center">
          <img
            className="bg-white w-full rounded-full hover:scale-150 transition-transform"
            src="https://endyd9.github.io/Portfolio//img/skill/ts.png"
            alt="ts"
          />
          <figcaption className="xl:text-base text-3xl">TypeScript</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Languages;
