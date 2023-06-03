import { type ProductDataSource } from '../../protocols/data-sources/product-data-source'
import { type NoSQLDatabaseWrapper } from '../../protocols/data-sources/nosql-database-wrapper'
import { type ProductRequestModel } from '../../../domain/entities/product'

export class MongoDbProductDataSource implements ProductDataSource {
    private readonly db: NoSQLDatabaseWrapper

    constructor(db: NoSQLDatabaseWrapper) {
        this.db = db
    }

    async create(product: ProductRequestModel): Promise<void> {
        await this.db.insertOne(product)
    }
}
