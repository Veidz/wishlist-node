import { MongoClient } from 'mongodb'
import http from 'http'

import env from './env'
import server from './server'

import { type NoSQLDatabaseWrapper } from './data/protocols/data-sources/nosql-database-wrapper'
import { MongoDbProductDataSource } from './data/data-sources/mongodb/mongodb-product-data-source'
import ProductsRouter from './presentation/routers/product-router'
import CreateProduct from './domain/use-cases/product/create-product'
import ProductRepositoryImpl from './domain/repositories/product-repository'

async function getMongoDataSource(): Promise<MongoDbProductDataSource> {
    const client: MongoClient = new MongoClient(env.mongoUrl)
    await client.connect()
    const db = client.db('Wishlist')

    const productDatabase: NoSQLDatabaseWrapper = {
        insertOne: async(entity: any) => await db.collection('products').insertOne(entity)
    }

    return new MongoDbProductDataSource(productDatabase)
}

(async() => {
    const dataSource = await getMongoDataSource()

    const productsRouter = ProductsRouter(new CreateProduct(new ProductRepositoryImpl(dataSource)))

    server.use('/products', productsRouter)

    // https.createServer({
    //     key: fs.readFileSync('certs/key.pem'),
    //     cert: fs.readFileSync('certs/cert.pem')
    // }, server).listen(env.port)
    http.createServer({
    }, server).listen(env.port)

    console.log(`Server is running at http://localhost:${env.port}`)
})().catch(console.error)
