import { type InsertOneResult } from 'mongodb'
import { type ProductRepository } from '../protocols/repositories/product-repository'
import { type ProductRequestModel } from '../entities/product'
import { type ProductDataSource } from '../../data/protocols/data-sources/product-data-source'

export default class ProductRepositoryImpl implements ProductRepository {
    productDataSource: ProductDataSource

    constructor(productDataSource: ProductDataSource) {
        this.productDataSource = productDataSource
    }

    async createProduct(product: ProductRequestModel): Promise<InsertOneResult> {
        return await this.productDataSource.create(product)
    }
}
