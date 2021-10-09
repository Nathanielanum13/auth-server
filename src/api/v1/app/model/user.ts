import mongoose from 'mongoose'
import { User } from '../interface/types'

const userSchema = new mongoose.Schema<User>({
    first_name: {
        type: String,
        default: null
    },
    last_name: {
        type: String,
        default: null
    },
    email: {
        type: String,
        unique: true
    },
    team: {
        type: String,
        default: null
    },
    password: {
        type: String
    },
    token: {
        type: String,
    }
})
const userModel = mongoose.model("user", userSchema)

export default userModel