declare class CustomError extends Error {
    statusCode: number;
    message: string;
    constructor(statusCode: number, message: string);
}
export { CustomError };
