import { type IProductDataSource } from '../../protocols/data-sources/product-data-source'
import { type INoSQLDatabaseWrapper } from '../../protocols/data-sources/nosql-database-wrapper'
import { type ProductRequestModel } from '../../../domain/entities/product'
import { type InsertOneResult } from 'mongodb'

export class MongoDbProductDataSource implements IProductDataSource {
    private readonly db: INoSQLDatabaseWrapper

    constructor(db: INoSQLDatabaseWrapper) {
        this.db = db
    }

    async create(product: ProductRequestModel): Promise<InsertOneResult> {
        return await this.db.insertOne(product)
    }
}
