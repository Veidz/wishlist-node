import 'dotenv/config'

export default {
    mongoUrl: process.env.MONGO_URL ?? 'mongodb://root:root@localhost:27016',
    port: process.env.PORT ?? 5050
}
