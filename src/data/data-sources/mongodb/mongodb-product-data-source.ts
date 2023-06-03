import { type ProductDataSource, type NoSQLDatabaseWrapper } from '../../protocols/data-sources'
import { type ProductRequestModel } from '../../../domain/entities/product'
import { type InsertOneResult } from 'mongodb'

export class MongoDbProductDataSource implements ProductDataSource {
    private readonly db: NoSQLDatabaseWrapper

    constructor(db: NoSQLDatabaseWrapper) {
        this.db = db
    }

    async create(product: ProductRequestModel): Promise<InsertOneResult> {
        return await this.db.insertOne(product)
    }
}
