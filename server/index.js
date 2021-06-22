const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("connected");

  socket.on("disconnect", () => {
    console.log("disconnected");
  });
});

app.use(express.static("public"));

server.listen(process.env.PORT || 5000, () => {
  console.log("Listening on *:5000");
});
