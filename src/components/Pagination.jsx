import { useState, useEffect, useCallback } from "react";
import { fetchCard } from "../api/fetch";

const LoadMoreComponent = () => {
  const BASE_URL = "https://run.mocky.io";
  const ARTICLE_URL = BASE_URL + "/v3/58d4253f-92c8-4b25-b246-270b64d459af";
  const RESULTS_PER_PAGE = 10;

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
      const data = await response.json();
      setVisible((prev) => prev + data.length);
      setPosts((prev) => [...prev, ...data]);
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
    <div className="container">
      <h1>Load More Example in React</h1>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {posts.length !== 0 &&
        posts.slice(0, visible).map((post, index) => (
          <div className="post" key={post.id + index}>
            <h2>{post.id}</h2>
            <p>{post.date}</p>
            <h3>{post.title}</h3>
            <p>{post.text}</p>
          </div>
        ))}

      {totalPosts > 0 ? (
        visible < totalPosts ? (
          <div>
            <button className="cards-box__more" onClick={handleOnLoadMore}>
              Load More
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
