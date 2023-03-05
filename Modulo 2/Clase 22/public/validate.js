const myLabel = document.getElementById("validate");

const checkValidation = async () => {
  console.log("hola");
  try {
    const response = await fetch("/validate", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const data = await response.json();
    console.log(data);
    myLabel.innerHTML = data.message;

    //localStorage.setItem("token", data.token);
    //console.log(data);
  } catch (err) {
    console.log(err);
  }
};

checkValidation();
