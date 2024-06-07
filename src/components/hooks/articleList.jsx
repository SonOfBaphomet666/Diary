import { useState, useEffect } from "react";
import { fetchCard } from "../../api/fetch";
import { BsEyeFill } from "react-icons/bs";

const ArticleList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const result = await fetchCard();
        setData(result);
      } catch (err) {
        console.log("Error while fetching data:", err);
      }
    }
    getData();
  }, []);

  return (
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
        {data &&
          data.map((item, index) => {
            return (
              <div key={index} className="card">
                <div className="card__box">
                  <div className="card__dataBox">
                    <h6>{item.date}</h6>
                  </div>
                  <div className="card__box2">
                    <div className="card__titleBox">
                      <h3>{item.title}</h3>
                      <div className="card__textBox">
                        <h4>{item.text}</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <img className="card__img" src={item.img} />
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default ArticleList;
