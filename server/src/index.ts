import "dotenv/config";

import io, { server } from "./server";
import { SocketType } from "types/socket";
import { MessageHandler } from "./socket/handlers/message";

io.on("connection", (socket: SocketType) => {
    console.log(`Socket ${socket.id} connected`);

    const messageHandler: MessageHandler = new MessageHandler(io, socket);

    messageHandler.hello("Hello from server");

    socket.on("disconnect", () => {
        console.log(`Socket ${socket.id} disconnected`);
    });
});

// @ts-ignore
if (typeof PhusionPassenger !== "undefined") {
    server.listen("passenger");
} else {
    server.listen(parseInt(process.env.SOCKET_PORT || "3001"));
}
console.log(`Socket server listening on port ${process.env.SOCKET_PORT || "3001"} and cors ${process.env.CORS_ORIGIN}`);
