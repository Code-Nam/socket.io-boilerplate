//! Input events into ./README.md

export type ServerToClientEvents = {
    hello: (payload: string) => void;
};
