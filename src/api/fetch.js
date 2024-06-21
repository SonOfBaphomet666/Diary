
async function fetchCard() {
  try {
    const response = await fetch("https://run.mocky.io/v3/a41a4e07-522c-429b-a9fe-c03823baccc1", {
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

export { fetchCard };