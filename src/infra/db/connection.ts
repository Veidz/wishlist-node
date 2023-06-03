import mongoose from 'mongoose'
import env from '../../main/env'

export default class Connection {
    async connect(): Promise<void> {
        try {
            await mongoose.connect(env.mongoUrl)
        } catch (error) {
            console.error(error)
        }
    }
}
