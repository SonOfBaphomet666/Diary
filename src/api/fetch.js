
async function fetchCard() {
    try {
      const response = await fetch("https://run.mocky.io/v3/41245208-e518-4794-b759-9a99c4439a98", {
        method: "post",
        body: "test=1"
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("data", data);
      return data;
    } catch (err) {
      console.log("error", err);
      throw err;
    }
  }
  
  export {fetchCard};


// ASYNC FUNCTION
// async function fetchData() {
//     const url = "https://run.mocky.io/v3/6e91b7a4-fa62-40f8-b5e6-b8d8b089033e";


//     try {
//         const response = await fetch(url, {
//             method: "Post",
//             body: "test=1"
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         return data;

//     } catch (err) {
//         console.error("Error fetching or parsing data: ", err);
//         throw err;
//     }
// }

// export default fetchData;

// END