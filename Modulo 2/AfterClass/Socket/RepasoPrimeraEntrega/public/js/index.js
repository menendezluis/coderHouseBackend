const socket = io();

// Send a message to the server
socket.emit("message", "Hola desde el cliente!");

socket.on("message", (data) => {
  console.log(data);
});

socket.on("messages", (data) => {
  render(data);
});

document.getElementById("send").addEventListener("click", function () {
  console.log("hola");
  //get socket id
  const socketId = socket.id;
  const data = {
    id: socketId,
    name: document.getElementById("name").value,
    message: document.getElementById("message").value,
  };

  socket.emit("new-message", data);
});

function render(data) {
  const html = data
    .map((elem) => {
      return ` 
      <div class="chat-message">
      <div class="message-bubble">
      <div class="message-sender">${elem.name}
      <span class="socketid">(${elem.id})</span>

      </div>
            <p>${elem.message}</p>
            </div>
            </div>`;
    })
    .join(" ");

  document.getElementById("messages").innerHTML = html;
}

// Select your input type file and store it in a variable
const input = document.getElementById("fileinput");

// This will upload the file after having read it

const upload = async (file) => {
  const formData = new FormData(document.getElementById("form"));

  fetch("/upload", {
    method: "POST",
    headers: { "Content-Type": "multipart/form-data" },
    body: formData,
  })
    .then((response) => response.json())
    .then(
      (success) => console.log(success) // Handle the success response object
    )
    .catch(
      (error) => console.log(error) // Handle the error response object
    );
};

// Event handler executed when a file is selected
const onSelectFile = () => upload(input.files[0]);

// Add a listener on your input
// It will be triggered when a file will be selected
input.addEventListener("change", onSelectFile, false);
