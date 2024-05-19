// import { TiSocialInstagramCircular } from "react-icons/ti";
// import { SlSocialVkontakte } from "react-icons/sl";
// import { VscGithubInverted } from "react-icons/vsc";
import { BsEyeFill } from "react-icons/bs";

const About = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__box">
          <div className="hero__headingBox">
            <h1>Моя жизнь</h1>
          </div>
          <div className="hero__headingBox2">
            <p>Что делаю в свободное время от учёбы</p>
          </div>
        </div>
      </section>

      {/* THIS IS BIOGRAPHY */}
      {/* <section className="main"> */}
      {/* <div className="imgBox">
        <div className="about">
          <div className="about__title">
            <h3>Моя биография</h3>
            <h4 style={{ color: "black" }}>Максима Шушпанников</h4>
          </div>
          <div className="about__text">
            <h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit vel odio commodi sed similique, veniam distinctio
              ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda odio harum optio deserunt ipsam quidem, beatae adipisci
              quam.
            </h4>
          </div>
          <div className="about__media">
            <TiSocialInstagramCircular className="about__icons" />
            <SlSocialVkontakte className="about__icons" />
            <VscGithubInverted className="about__icons" />
          </div>
        </div>
      </div> */}

      {/* <img className="about__img" src="/src/assets/img/aboutMe.jpg" /> */}
      {/* </section> */}

      {/* END BIOGRAPHY */}
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis beatae dolores fuga eius quia nobis? Tempora
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

export default About;

{
  /* <div className="about">
          <div className="about__title">
            <h3>Моя биография</h3>
            <h4 style={{ color: "black" }}>Максима Шушпанников</h4>
          </div>
          <div className="about__text">
            <h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit vel odio commodi sed similique, veniam distinctio
              ipsam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda odio harum optio deserunt ipsam quidem, beatae adipisci
              quam.
            </h4>
          </div>
          <div className="about__media">
            <TiSocialInstagramCircular className="about__icons" />
            <SlSocialVkontakte className="about__icons" />
            <VscGithubInverted className="about__icons" />
          </div>
        </div> */
}
