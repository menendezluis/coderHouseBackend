const elementExists = (id) => document.getElementById(id) !== null;

elementExists("send") &&
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

elementExists("getButton") &&
  document.getElementById("getButton").addEventListener("click", function () {
    fetch("/getSignedCookie").then((response) => {
      response.json().then((data) => {
        console.log(data);
      });
    });
  });

elementExists("signup") &&
  document.getElementById("signup").addEventListener("click", function () {
    const myForm = document.getElementById("myForm");
    const formData = new FormData(myForm);
    const data = Object.fromEntries(formData);
    console.log(data);

    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  });
