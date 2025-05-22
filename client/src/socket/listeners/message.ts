import type { Socket } from "socket.io-client";

export class MessageListeners {
    private socket: Socket;

    constructor(socket: Socket) {
        this.socket = socket;
        this.initListeners();
    }

    private initListeners = () => {
        this.socket.on("helluuuuuuo", this.hello);
    };

    private hello = (message: string) => {
        try {
            console.log(`Socket ${this.socket.id} has received a hello event - ${message}`);
        } catch (error) {
            console.error(error);
        }
    };
}

