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