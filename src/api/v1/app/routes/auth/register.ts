import express, { Router } from 'express'
import { registerUser } from '../../controller/registerUser'

const registerRouter: Router = express.Router()

registerRouter.post('/register', registerUser)

export default registerRouter