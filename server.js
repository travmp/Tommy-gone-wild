// server.js
import express from "express";
import http from "http";
import { WebSocketServer } from "ws";
import { setupWSConnection } from "@y/websocket-server"; // <- official export

const app = express();
app.get("/", (_req, res) => res.send("y-websocket server is running"));

const server = http.createServer(app);
const wss = new WebSocketServer({ server });

wss.on("connection", (socket, req) => {
  setupWSConnection(socket, req);
});

const PORT = process.env.PORT || 1234;
server.listen(PORT, "0.0.0.0", () => {
  console.log("y-websocket server listening on :" + PORT);
});
