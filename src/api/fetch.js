function fetchData() {
    let stat = function (response) {
        if (response.status !== 200) {
            return Promise.reject(new Error(response.statusText));
        }
        return Promise.resolve(response)
    }
    let json = function (response) {
        return response.json();
    }

    fetch("https://run.mocky.io/v3/6e91b7a4-fa62-40f8-b5e6-b8d8b089033e", {
        method: "post",
        body: "test=1"
    })
        .then(stat)
        .then(json)
        .then(function (data) {
            console.log("data", data);
        })
        .catch(function (error) {
            console.log("error", error);
        });
}

export {fetchData};


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