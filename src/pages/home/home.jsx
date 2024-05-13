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
            <p>Хочу поделиться с вами своим досугом.</p>
          </div>
        </div>
      </section>
      <main>
        <Card />
      </main>
      <footer>
        <div className="footerBox">
          <div className="box">
            <div className="box__title">
              <h5>Personally Newsletter</h5>
              <h4>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                placeat quidem dolor totam excepturi
              </h4>
              <div className="box__input">
                <input placeholder="Email address" />
                <button>Подписаться</button>
              </div>
            </div>
          </div>
        </div>
        <div className="info">
          <p className="info__title">2024 Максим</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
