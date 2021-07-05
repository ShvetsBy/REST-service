import { Request, Response, NextFunction } from 'express';
declare const checkToken: (req: Request, res: Response, next: NextFunction) => void | Response<any, Record<string, any>>;
export { checkToken };
