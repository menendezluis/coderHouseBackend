document.getElementById("send").addEventListener("click", function () {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch(`/login?username=${username}&password=${password}`, {});
  console
    .log("aqui voy api")
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
