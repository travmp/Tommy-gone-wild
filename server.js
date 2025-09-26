// Minimal y-websocket server (Node).
// Run locally: npm i && node server.js  (connect to ws://localhost:1234)
// Deploy to Render/Fly/Railway and use wss://<your-app>/ as the server URL in the client.

import express from 'express'
import http from 'http'
import { WebSocketServer } from 'ws'
import { setupWSConnection } from 'y-websocket/bin/utils.js'

const app = express()
app.get('/', (req, res) => res.send('y-websocket server is running'))

const server = http.createServer(app)
const wss = new WebSocketServer({ server })

wss.on('connection', (socket, req) => {
  setupWSConnection(socket, req)
})

const PORT = process.env.PORT || 1234
server.listen(PORT, () => {
  console.log('y-websocket server listening on :' + PORT)
})
