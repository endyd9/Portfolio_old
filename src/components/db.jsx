const DB = () => {
  return (
    <div className="text-center">
      <h2 className="mt-5 text-2xl font-semibold">SQL</h2>
      <div className="my-16 mx-32 animate-up flex flex-row justify-center space-x-36">
        <figure className="w-24 text-center">
          <img
            className="bg-white w-full rounded-full hover:scale-150 transition-transform"
            src="https://endyd9.github.io/Portfolio//img/skill/mysql.png"
            alt="mysql"
          />
          <figcaption>MySql</figcaption>
        </figure>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">NoSQL</h2>
      <div className="my-16 mx-32 animate-up flex flex-row justify-center">
        <figure className="w-24 text-center">
          <img
            className="bg-white w-full rounded-full hover:scale-150 transition-transform"
            src="https://endyd9.github.io/Portfolio//img/skill/mongo.png"
            alt="mongo"
          />
          <figcaption>MongoDB</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default DB;
