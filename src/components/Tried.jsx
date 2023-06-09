const Tried = () => {
  return (
    <div className="text-center">
      <h2 className="mt-5 text-2xl font-semibold">Tried</h2>
      <div className="mt-8 mx-32 animate-up flex flex-row flex-wrap justify-center">
        <figure className="w-1/4 text-center items-center mb-5">
          <img
            className="bg-white ml-14 w-24 h-24 rounded-full hover:scale-150 transition-transform"
            src="/img/skill/py.png"
            alt="py"
          />
          <figcaption>Python</figcaption>
        </figure>
        <figure className="w-1/4 text-center items-center mb-5">
          <img
            className="bg-white ml-14 w-24 h-24 rounded-full hover:scale-150 transition-transform"
            src="/img/skill/flask.png"
            alt="flask"
          />
          <figcaption>Flask</figcaption>
        </figure>
        <figure className="w-1/4 text-center items-center mb-5">
          <img
            className="bg-white ml-14 w-24 h-24 rounded-full hover:scale-150 transition-transform"
            src="/img/skill/bs4.png"
            alt="bs4"
          />
          <figcaption>BS4</figcaption>
        </figure>
        <figure className="w-1/4 text-center items-center mb-5">
          <img
            className="bg-white ml-14 w-24 h-24 rounded-full hover:scale-150 transition-transform"
            src="/img/skill/dart.png"
            alt="dart"
          />
          <figcaption>Dart</figcaption>
        </figure>
        <figure className="w-1/4 text-center items-center">
          <img
            className="bg-white ml-14 w-24 h-24 rounded-full hover:scale-150 transition-transform"
            src="/img/skill/scss.jpg"
            alt="scss"
          />
          <figcaption>SCSS</figcaption>
        </figure>
        <figure className="w-1/4 text-center items-center">
          <img
            className="bg-white ml-14 w-24 h-24 rounded-full hover:scale-150 transition-transform"
            src="/img/skill/java.png"
            alt="java"
          />
          <figcaption>JAVA</figcaption>
        </figure>
        <figure className="w-1/4 text-center items-center">
          <img
            className="bg-white ml-14 w-24 h-24 rounded-full hover:scale-150 transition-transform"
            src="/img/skill/android.png"
            alt="android"
          />
          <figcaption>Android</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Tried;
