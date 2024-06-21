import { useState, useEffect, useCallback } from "react";
import { fetchCard } from "../api/fetch";

import { BsEyeFill } from "react-icons/bs";
import { GiBookshelf } from "react-icons/gi";
import { BsCalendarCheck } from "react-icons/bs";

const LoadMoreComponent = () => {
  const BASE_URL = "https://run.mocky.io";
  const ARTICLE_URL = BASE_URL + "/v3/a41a4e07-522c-429b-a9fe-c03823baccc1";
  const RESULTS_PER_PAGE = 5;

  const [posts, setPosts] = useState([]);
  const [totalPosts, setTotalPosts] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(0);
  const [page, setPage] = useState(1);

  const fetchTotalPosts = useCallback(async () => {
    try {
      const response = await fetchCard(ARTICLE_URL);
      const data = await response.json();
      console.log(data);
      setTotalPosts(data.length);
    } catch (error) {
      setError(error.message);
    }
  }, [ARTICLE_URL]);

  const fetchPosts = useCallback(async () => {
    try {
      const response = await fetch(
        `${ARTICLE_URL}?_page=${page}&_limit=${RESULTS_PER_PAGE}`,
      );

      let data = await response.json();
      if (data.length > RESULTS_PER_PAGE) {
        data = data.slice(0, RESULTS_PER_PAGE);
      }
      setVisible((prev) => prev + data.length);
      // console.log("Visible:", visible, "Total Posts:", totalPosts);
      // setPosts((prev) => [...prev, ...data]);
      setPosts(data);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [ARTICLE_URL, page]);

  const handleOnLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    fetchTotalPosts();
  }, [fetchTotalPosts]);

  useEffect(() => {
    fetchPosts();
  }, [page, fetchPosts]);

  return (
    <div className="cards-box">
      {/* <section className="cards"> */}
      <div className="cards__dailyBox">
        <button className="cards__view">
          <GiBookshelf />
        </button>
        <button className="cards__view">
          <BsCalendarCheck />
        </button>
        <button className="cards__view">
          <div className="cards__viewBox">
            <BsEyeFill className="cards__eye" />
          </div>
        </button>
      </div>
      <h1>Load More Example</h1>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {posts.length !== 0 &&
        posts.slice(0, visible).map((post, index) => (
          <div className="card" key={post.id + index}>
            <div className="card__box">
              <div className="card__dataBox">
                <h6>{post.date}</h6>
              </div>
              <div className="card__box2">
                <div className="card__titleBox">
                  <h3>{post.title}</h3>
                  <div className="card__textBox">
                    <h4>{post.text}</h4>
                  </div>
                </div>
              </div>
            </div>
            <img className="card__img" src={post.img} />
          </div>
        ))}
      {/* <section /> */}

      {totalPosts > 0 ? (
        visible < totalPosts ? (
          <div className="cards-box__moreBox">
            <button className="cards-box__more" onClick={handleOnLoadMore}>
              Загрузить больше
            </button>
          </div>
        ) : (
          <div>
            <div>Sorry, thats all folks! No more to load.</div>
          </div>
        )
      ) : null}
    </div>
  );
};

export default LoadMoreComponent;
