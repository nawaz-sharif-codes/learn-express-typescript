import type { Request, Response, NextFunction } from "express";

export function LoggerMiddleware(request: Request, response: Response, next: NextFunction) : void {
    console.log('Request Method :', request.method)
    console.log('Request URL :', request.url)
    console.log('Request Headers :', request.headers)

    next()
}
