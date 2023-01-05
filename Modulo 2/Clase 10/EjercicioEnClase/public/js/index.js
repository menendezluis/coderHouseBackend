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
