async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });
  return response.json();
}

document.getElementById("signup").addEventListener("click", function () {
  let form = document.getElementById("form");
  postData("/api/user", {
    user: form.owner.value,
    name: form.name.value,
    type: form.type.value,
    age: form.age.value,
  }).then((data) => {
    console.log(data); // JSON data parsed by `data.json()` call
  });
  form.submit();
});

fetch("/users")
  .then((response) => response.json())
  .then((data) => {
    let select = document.getElementById("user");
    data.forEach((user) => {
      let option = document.createElement("option");
      option.value = user.id;
      option.innerHTML = user.name;
      select.appendChild(option);
    });
  });
