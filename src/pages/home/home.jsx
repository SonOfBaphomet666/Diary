import Card from "../../components/card/card";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__box">
          <div className="hero__headingBox">
            <h1>Тут начинаются мысли!</h1>
          </div>
          <div className="hero__headingBox2">
            <p>
              Хочу поделиться с вами своим досугом.
            </p>
          </div>
        </div>
      </section>
      <main>
        <Card />
      </main>
    </>
  );
};

export default Home;
