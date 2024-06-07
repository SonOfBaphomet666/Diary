
async function fetchCard() {
  try {
    const response = await fetch("https://run.mocky.io/v3/3d09d1ec-3a2b-40e2-b6c8-bf7f268ad908", {
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