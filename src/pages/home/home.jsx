// import ArticleList from "../../components/hooks/articleList";
import Pagination from "../../components/Pagination"

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__box">
          <div className="hero__headingBox">
            <h1>Я начинающий разработчик.</h1>
          </div>
          <div className="hero__headingBox2">
            <p>Хочу поделиться с вами своим досугом.</p>
          </div>
        </div>
      </section>
      <main>
        <Pagination/>
        {/* <ArticleList /> */}
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
            </div>
            <div className="box__input">
              <input placeholder="    Email address" />
              <button className="box__btnInput">Подписаться</button>
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
