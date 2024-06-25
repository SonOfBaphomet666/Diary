

function fetchCard() {
    const response = fetch("https://run.mocky.io/v3/a41a4e07-522c-429b-a9fe-c03823baccc1", {
      method: "GET"
      // body: "test=1"
    });
    return response;
}

export { fetchCard };