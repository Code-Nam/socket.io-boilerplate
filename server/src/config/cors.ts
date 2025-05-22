export const allowedOrigins = ["http://localhost:5173"];

export const originConfig = (origin: any, callback: any) => {
    if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
    } else {
        callback(new Error("Not allowed by CORS"));
    }
};
