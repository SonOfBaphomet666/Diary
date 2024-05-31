import { useState, useEffect } from "react";
import {fetchData} from "../../api/fetch";

const Fetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData()
    
    // let ignore = false;
    // setData(null);
    // fetchData
  })
}

export default Fetch;


// ASYNC FUNCTION
// const Fetch = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//      async function loadData() {
//       const result = await fetchData();
//       setData(result);
//     }

//     loadData().catch((error) => {
//       console.error("An error occured while loading the data: ", error);
//     });
//   }, []);

//   return (
//     <div>
//       <h1>Инфо</h1>
//       <ul>
//               {data.map((item, index) => { (
//                 <li key={index}>
//                   <p>{item.date}</p>
//                   <p>{item.imgUrl}</p>
//                 </li>
//               )})}
//             </ul>
//     </div>
//   );
// };

// export default Fetch;

// END

// ALL TOGEHTER
// const Fetch = () => {
//   const [serverUrl, setServerUrl] = useState([]);

//   useEffect(() => {
//     fetch("https://run.mocky.io/v3/6e91b7a4-fa62-40f8-b5e6-b8d8b089033e")
//       .then((response) => response.json())
//       .then((data) => setServerUrl(data))
//       .catch((error) => {
//         console.log("Error:", error);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Инфо</h1>
//       <ul>
//         {serverUrl.map((item, index) => {console.log(index); (
//           <li key={index[0]}>
//             <p>{item.date}</p>
//             <p>{item.imgUrl}</p>
//           </li>
//         )})}
//       </ul>
//     </div>
//   );
// };

// export default Fetch;
// END
