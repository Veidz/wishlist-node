import { type InsertOneResult } from 'mongodb'
import { type IProductRepository } from '../protocols/repositories/product-repository'
import { type ProductRequestModel } from '../entities/product'
import { type IProductDataSource } from '../../data/protocols/data-sources/product-data-source'

export default class ProductRepository implements IProductRepository {
    productDataSource: IProductDataSource

    constructor(productDataSource: IProductDataSource) {
        this.productDataSource = productDataSource
    }

    async createProduct(product: ProductRequestModel): Promise<InsertOneResult> {
        return await this.productDataSource.create(product)
    }
}
