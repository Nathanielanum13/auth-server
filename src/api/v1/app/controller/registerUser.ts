import {Response, Request} from 'express'
import { nullValidate, emptyValidate, emailValidate } from '../validation/validate'
import { responseWriter } from './response'
import { StandardResponse } from '../interface/types'
import { httpStatus } from '../../config/httpStatus'
import userModel from '../model/user'
import { User } from '../interface/types'
const bcrypt = require('bcryptjs')

export const registerUser = async (req: Request, res: Response) => {
    // extract user details
    const { first_name, last_name, password, email, team } = req.body

    // validate user details
    const itemsToValidate = [first_name, last_name, password, email, team]
    const validationForNullValues = nullValidate<string>(itemsToValidate)
    const validationForEmptyValues = emptyValidate(itemsToValidate)
    const validationForEmail = emailValidate(email)

    if (!validationForNullValues || !validationForEmptyValues || !validationForEmail) {
        responseWriter<StandardResponse>(res, {
            data: {
                status: httpStatus.HTTP_STATUS_BAD_REQUEST,
                message: "All fields are required. Provide correct information",
            },
            meta: {
                time_stamp: new Date().toLocaleTimeString()
            }
        })
        return
    }

    // check if user already exist in database
    const existingUser = userModel.findOne({ email })
    console.log(existingUser)

    // encrypt users password
    const encryptedPassword = await bcrypt.hash(password, 10)
    // create new user with hash password
    const newUser: User = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        team: team,
        password: encryptedPassword
    }
    const user = await userModel.create(newUser)

    res.status(200).json({ message: 'Successful' })
}
