import { SocketType } from "types/socket";
import { PayloadMessage } from "types/payload-message";
import { ResponseCallback } from "types/callback";
import { failure, success } from "types/constructors";

export class MessageHandler {
    io: any;
    socket: SocketType;

    constructor(io: any, socket: SocketType) {
        this.io = io;
        this.socket = socket;
        this.initListeners();
    }

    private initListeners = () => {
        this.socket.on("message", this.message);
        this.socket.on("message:ping", this.messagePing);
    };

    private message = (payload: PayloadMessage, callback: ResponseCallback<null>) => {
        const { message } = payload;
        try {
            console.log(`Socket ${this.socket.id} has sent a message - ${message}`);

            callback(success(null));
        } catch (error) {
            console.error(error);
            callback(failure("Error handling message"));
        }
    };

    private messagePing = (payload: PayloadMessage, callback: ResponseCallback<string>) => {
        const { message } = payload;
        try {
            console.log(`Socket ${this.socket.id} has sent a message:ping - ${message}`);
            callback(success("pong"));
        } catch (error) {
            console.error(error);
            callback(failure("Error handling message:ping"));
        }
    };

    public hello = (message: string) => {
        try {
            this.socket.emit("hello", message);
            console.log(`Socket ${this.socket.id} has sent ${message}`);
        } catch (error) {
            console.error(error);
        }
    };
}
