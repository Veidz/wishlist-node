import { type ProductDataSource, type NoSQLDatabaseWrapper } from '../../protocols/data-sources'
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
