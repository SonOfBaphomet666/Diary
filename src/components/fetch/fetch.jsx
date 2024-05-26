// import { useState, useEffect } from "react";

// const Fetch = () => {
//     const [serverUrl, setServerUrl] = useState('https://run.mocky.io/v3/a835941e-5eda-44df-be52-d1542d7a7806');

//     useEffect(() => {
//         const connection = createConnection(serverUrl, roomId);
//     })
// }

// export default Fetch;

// import React, { useState, useEffect } from "react";

// https://monsterlessons.com/project/lessons/poluchenie-dannyh-ot-servera-s-pomoshyu-fetch#:~:text=Fetch%20%2D%20%D1%8D%D1%82%D0%BE%20%D1%83%D0%BB%D1%83%D1%87%D1%88%D0%B5%D0%BD%D1%8B%D0%B9%20XMLHttpRequest%2C%20%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8B%D0%B9,%D0%BE%D0%BD%20%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%B5%D1%82%20%D1%81%20%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D0%B8%2010.

// const MyComponent = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch("http://www.mocky.io/v2/5944e07213000038025b6f30", {
//           method: "post",
//           body: "test=1"
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const jsonResponse = await response.json();

//         setData(jsonResponse);
//         setLoading(false);
//       } catch (err) {
//         setError(err);
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, []); // Empty array as second argument means this effect runs once when the component mounts

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>An error occurred: {error.message}</div>;
//   }

//   return (
//     <div>
//       <h1>Fetched Data</h1>
//       {/* Render your data here */}
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   );
// };

// export default MyComponent;
