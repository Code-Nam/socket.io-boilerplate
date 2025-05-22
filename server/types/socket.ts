import { DefaultEventsMap, Socket } from "socket.io";
import { ServerToClientEvents } from "./server-to-client";
import { ClientsToServerEvents } from "./client-to-server";

export type SocketType = Socket<DefaultEventsMap, ServerToClientEvents, ClientsToServerEvents>;

