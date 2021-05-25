export default async function session() {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user_id");
  if (user === null && token === null) {
    console.log("hiii 1");
    return false;
  } else {
    let data = { user, token };
    console.warn(data);
    let result = await fetch("http://localhost:4000/session", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.log("session: ", result.data.active_session);
    return result.data.active_session;
  }
}
