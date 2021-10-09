import Wrapper from '../interface/wrapper'
import { Response } from 'express'
export const responseWriter = <T>(res: Response, body: T) => {
    return res.json(new Wrapper<T>().out(body))
}