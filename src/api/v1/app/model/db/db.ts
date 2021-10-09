import mongoose, { ConnectOptions } from 'mongoose'

const dbConnect = async (connectionUri: string | undefined) => {
    try {
        const conn = await mongoose.connect(`${connectionUri}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true  
        } as ConnectOptions)
        console.log('Database connection successful:', conn.connection.host)
    }
    catch (e) {
        console.log('Database connection falied')
        throw(e)
    }
}

export default dbConnect