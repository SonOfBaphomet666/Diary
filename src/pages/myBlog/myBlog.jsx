import { BsEyeFill } from "react-icons/bs";

const MyBlog = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__box">
          <div className="hero__headingBox">
            <h1>Моя учёба</h1>
          </div>
          <div className="hero__headingBox2">
            <p>Хочу поделиться с вами своим досугом.</p>
          </div>
        </div>
      </section>
      <section className="main">
        <div className="cards-box">
          <section className="cards">
            <div className="cards__dailyBox">
              <h2>Ежедневная рубрика</h2>
              <button className="cards__view">
                <div className="cards__viewBox">
                  <BsEyeFill className="cards__eye" />
                  все
                </div>
              </button>
            </div>

            <div className="card">
              <div className="card__box">
                <div className="card__dataBox">
                  <h6>May 10, 2024</h6>
                </div>
                <div className="card__box2">
                  <div className="card__titleBox">
                    <h3>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Mollitia excepturi quo.
                    </h3>
                    <div className="card__textBox">
                      <h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis beatae dolores fuga eius quia nobis? Tempora
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <img className="card__img" src="/src/assets/img/1.png" />
            </div>
            <div className="card">
              <div className="card__box">
                <div className="card__dataBox">
                  <h6>May 10, 2024</h6>
                </div>
                <div className="card__box2">
                  <div className="card__titleBox">
                    <h3>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Mollitia excepturi quo.
                    </h3>
                    <div className="card__textBox">
                      <h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis beatae dolores fuga eius quia nobis? Tempora
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <img className="card__img" src="/src/assets/img/2.png" />
            </div>
            <div className="card">
              <div className="card__box">
                <div className="card__dataBox">
                  <h6>May 10, 2024</h6>
                </div>
                <div className="card__box2">
                  <div className="card__titleBox">
                    <h3>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Mollitia excepturi quo.
                    </h3>
                    <div className="card__textBox">
                      <h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis beatae dolores fuga eius quia nobis? Tempora
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <img className="card__img" src="/src/assets/img/3.png" />
            </div>
          </section>
        </div>
      </section>
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

export default MyBlog;
