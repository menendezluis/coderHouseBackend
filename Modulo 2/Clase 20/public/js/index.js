const elementExists = (id) => document.getElementById(id) !== null;

elementExists("send") &&
  document.getElementById("send").addEventListener("click", function () {
    const email = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    /*fetch(`/login?username=${username}&password=${password}`, {});
    console
      .log("aqui voy api")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));*/
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
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

//forgotPassword
elementExists("forgotPassword") &&
  document
    .getElementById("forgotPassword")
    .addEventListener("click", function () {
      const email = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      fetch("/forgot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
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
