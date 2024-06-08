
async function fetchCard() {
  try {
    const response = await fetch("https://run.mocky.io/v3/58d4253f-92c8-4b25-b246-270b64d459af", {
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