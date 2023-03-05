const myButton = document.getElementById("btn");

const handleLogin = async () => {
  console.log(
    document.getElementById("email").value,
    document.getElementById("password").value
  );

  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    }),
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      localStorage.setItem("token", data.token);
    })
    .catch((err) => {
      console.log(err);
    });
  //console.log(data);
};

myButton.addEventListener("click", () => {
  handleLogin();
});
