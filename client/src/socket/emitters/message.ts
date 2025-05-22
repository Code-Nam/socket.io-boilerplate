import type { PayloadMessage } from "shared/payloads/payload-message";
import type { Response } from "shared/response";

import type { Socket } from "socket.io-client";

export class MessageEmitters {
    private socket: Socket;

    constructor(socket: Socket) {
        this.socket = socket;
    }

    public message = (message: string): string => {
        const payload: PayloadMessage = {
            message,
        };

        //TODO: validate trycatch logic
        try {
            this.socket.emit("message", payload, (callback: Response<null>) => {
                if (!callback.success) return callback.error;
            });

            return "Message has been sent to Server";
        } catch (error) {
            console.error(error);
            return "Error encountered while emitting message";
        }
    };

    public messagePing = (message: string): string => {
        const payload: PayloadMessage = {
            message,
        };

        try {
            this.socket.emit("message:pinguuuuuu", payload, (callback: Response<string>) => {
                if (!callback.success) return callback.error;
                console.log(callback.data);
            });
        } catch (error) {
            console.error(error);
            return "Error encountered while emitting message";
        }

        // It's asynchronous why would i bother trying to return it in a synchronous method when it's only for example 💀
        return "Check console (im lazy)";
    };
}
