document.getElementById("send").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  fetch("/setSignedCookie", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
});

document.getElementById("getButton").addEventListener("click", function () {
  fetch("/getSignedCookie").then((response) => {
    response.json().then((data) => {
      console.log(data);
    });
  });
});
