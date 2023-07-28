const DB = () => {
  return (
    <div className="text-center">
      <h2 className="lg:mt-5 mt-32 lg:text-2xl text-5xl font-semibold">SQL</h2>
      <div className="lg:my-16 lg:mx-32 my-32 animate-up flex flex-row justify-center space-x-36">
        <figure className="lg:w-24 w-32 text-center">
          <img
            className="bg-white w-full rounded-full hover:scale-150 transition-transform"
            src="https://endyd9.github.io/Portfolio//img/skill/mysql.png"
            alt="mysql"
          />
          <figcaption className="lg:text-base text-3xl">MySql</figcaption>
        </figure>
      </div>
      <h2 className="lg:mt-5 mt-32 lg:text-2xl text-5xl font-semibold">
        NoSQL
      </h2>
      <div className="my-16 mx-32 animate-up flex flex-row justify-center">
        <figure className="lg:w-24 w-32 text-center">
          <img
            className="bg-white w-full rounded-full hover:scale-150 transition-transform"
            src="https://endyd9.github.io/Portfolio//img/skill/mongo.png"
            alt="mongo"
          />
          <figcaption className="lg:text-base text-3xl">MongoDB</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default DB;
