// import { useState, useEffect, useCallback } from "react";
// // import { fetchCard } from "../api/fetch";

// import { BsEyeFill } from "react-icons/bs";
// import { GiBookshelf } from "react-icons/gi";
// import { BsCalendarCheck } from "react-icons/bs";

// const LoadMoreComponent = () => {
//   const BASE_URL = "http://mocky.io";
//   const ARTICLE_URL = BASE_URL + "/v3/770e098b-5589-49a8-8320-4e410d3b855d";
//   const RESULTS_PER_PAGE = 10;

//   const [posts, setPosts] = useState([]);
//   const [startIndex, setStartIndex] = useState(0);
//   const [endIndex, setEndIndex] = useState(RESULTS_PER_PAGE);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = useCallback(async () => {
//     try {
//       const response = await fetch(
//         `${ARTICLE_URL}?_start=${startIndex}&_end=${endIndex}`,
//         {
//           method: "GET",
//           mode: "cors",
//           headers: { "Content-Type": "application/json" },
//         },
//       );
//       // const response = await fetchCard();
//       let data = await response.json();
//       if (!response.ok || !data || data.length === 0) {
//         throw new Error("Failed to fetch data");
//       }
//       // setHasNextPage(data.length >= RESULTS_PER_PAGE);
//       setPosts(data);
//       setError(null);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [startIndex, endIndex]);

//   const handleOnLoadMore = async () => {
//     setIsLoading(true);
//     setStartIndex(endIndex);
//     setEndIndex(endIndex + posts.length);
//     await fetchData();
//   };
//   // limit offset
//   // Прилипать

//   useEffect(() => {
//     setIsLoading(true);
//     fetchData();
//   }, [fetchData]);

//   return (
//     <div className="cards-box">
//       <section className="cards">
//         <div className="cards__dailyBox">
//           <button className="cards__view">
//             <GiBookshelf />
//           </button>
//           <button className="cards__view">
//             <BsCalendarCheck />
//           </button>
//           <button className="cards__view">
//             <div className="cards__viewBox">
//               <BsEyeFill className="cards__eye" />
//             </div>
//           </button>
//         </div>
//         {error && <div>{error}</div>}
//         {isLoading && <div>Loading...</div>}
//         {posts.slice(startIndex, endIndex).map((post, index) => (
//           <div className="card" key={index}>
//             <div className="card__box">
//               <div className="card__dataBox">
//                 <h6>{post.date}</h6>
//               </div>
//               <div className="card__box2">
//                 <div className="card__titleBox">
//                   <h3>{post.title}</h3>
//                   <div className="card__textBox">
//                     <h4>{post.text}</h4>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <img className="card__img" src={post.img} alt="" />
//           </div>
//         ))}
//       </section>

//       <div className="cards-box__moreBox">
//         <button className="cards-box__more" onClick={handleOnLoadMore}>
//           Загрузить больше
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LoadMoreComponent;

import { useState, useEffect, useCallback } from "react";
import { BsEyeFill } from "react-icons/bs";
import { GiBookshelf } from "react-icons/gi";
import { BsCalendarCheck } from "react-icons/bs";

const LoadMoreComponent = () => {
  const BASE_URL = "https://run.mocky.io";
  const ARTICLE_URL = BASE_URL + "/v3/770e098b-5589-49a8-8320-4e410d3b855d";
  const LIMIT = 10;
  const OFFSET = 0;

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [startIndex, setStartIndex] = useState(0);
  // const [endIndex, setEndIndex] = useState(LIMIT)

  const fetchData = useCallback(
    async ({ limit, offset }) => {
      try {
        const response = await fetch(
          `${ARTICLE_URL}?limit=${limit}&offset=${offset}`,
        );
        let data = await response.json();
        if (!response.ok || !data || data.length === 0) {
          throw new Error("Failed to fetch data");
        }
        setPosts((prevPosts) => [...prevPosts, ...data]);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    },
    [ARTICLE_URL],
  );

  const handleOnLoadMore = () => {
    setIsLoading(true);
    const currentOffset = OFFSET + LIMIT;
    fetchData({ limit: LIMIT, offset: currentOffset });
  };

  useEffect(() => {
    setIsLoading(true);
    fetchData({ limit: LIMIT, offset: OFFSET });
  }, [fetchData, LIMIT, OFFSET]);

  return (
    <div className="cards-box">
      <section className="cards">
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

        {/* {posts.slice(startIndex, endIndex).map((post, index) => */}
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {/* {posts.slice(0,10).map((post, index) => ( */}
        {posts.map((post, index) => (
          <div className="card" key={index}>
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
            <img className="card__img" src={post.img} alt="" />
          </div>
        ))}
      </section>

      <div className="cards-box__moreBox">
        <button className="cards-box__more" onClick={handleOnLoadMore}>
          Загрузить больше
        </button>
      </div>
    </div>
  );
};

export default LoadMoreComponent;
