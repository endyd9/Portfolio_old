const Languages = () => {
  return (
    <div className="text-center">
      <h2 className="mt-5 text-2xl font-semibold">Frontend</h2>
      <div className="my-16 mx-32 animate-up flex flex-row justify-center space-x-36">
        <figure className="w-24 text-center">
          <img
            className="bg-white w-full rounded-full hover:scale-150 transition-transform"
            src="/img/skill/html.png"
            alt="html"
          />
          <figcaption>HTML</figcaption>
        </figure>
        <figure className="w-24 text-center">
          <img
            className="bg-white w-full rounded-full hover:scale-150 transition-transform"
            src="/img/skill/css.png"
            alt="css"
          />
          <figcaption>CSS</figcaption>
        </figure>
        <figure className="w-24 text-center">
          <img
            className="bg-white w-full rounded-full hover:scale-150 transition-transform"
            src="/img/skill/js.png"
            alt="js"
          />
          <figcaption>JS</figcaption>
        </figure>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Backend</h2>
      <div className="my-16 mx-32 animate-up flex flex-row justify-center space-x-36">
        <figure className="w-24 text-center">
          <img
            className="bg-white w-full rounded-full hover:scale-150 transition-transform"
            src="/img/skill/node.png"
            alt="node"
          />
          <figcaption>Node.JS</figcaption>
        </figure>
        <figure className="w-24 text-center">
          <img
            className="bg-white w-full rounded-full hover:scale-150 transition-transform"
            src="/img/skill/ts.png"
            alt="ts"
          />
          <figcaption>TypeScript</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Languages;
