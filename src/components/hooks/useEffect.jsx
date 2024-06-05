import { useState, useEffect } from "react";
import { fetchCard } from "../../api/fetch";

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
    <div>
      <h1>Инфо</h1>
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
                      <h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perferendis beatae dolores fuga eius quia nobis? Tempora
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <img className="card__img" src={item.imgUrl} />
            </div>
          );
        })}
    </div>
  );
};

export default ArticleList;
