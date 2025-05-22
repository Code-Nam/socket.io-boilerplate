//! Input events into ./README.md

import { ResponseCallback } from "./callback";

export type ClientsToServerEvents = {
    message: (payload: string, callback: ResponseCallback<null>) => void;
    "message:ping": (payload: string, callback: ResponseCallback<string>) => void;
};
