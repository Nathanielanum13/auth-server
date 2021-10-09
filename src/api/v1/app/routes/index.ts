import express, { Router, Response, Request } from 'express'
import registerRouter from './auth/register'
import ServerLog from '../interface/types'
import Wrapper from '../interface/wrapper'

const router: Router = express.Router()

router.get('/', (req: Request, res: Response) => {
    res.status(200).json(new Wrapper<ServerLog>().out({
        author: "Nathaniel Anum Adjah",
        status: "alive",
        keep_alive: true,
        statusCode: 200
    }))    
})

router.use(registerRouter)

export default router