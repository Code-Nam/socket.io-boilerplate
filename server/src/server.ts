import cors from "cors";
import express from "express";
import { createServer } from "node:http";

import { DefaultEventsMap, Server } from "socket.io";
import { originConfig } from "./config/cors";
import { ServerToClientEvents } from "types/server-to-client";
import { ClientsToServerEvents } from "types/client-to-server";

const app = express();
const corsConfig = cors({
    origin: originConfig,
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: true, // Allow cookies to be sent with requests
});

app.use(corsConfig);
const server = createServer(app);

const io = new Server<ServerToClientEvents, ClientsToServerEvents, DefaultEventsMap>(server, {
    cors: {
        origin: originConfig,
    },
    serveClient: false,
});

export default io;

export { server };
