import { type InsertOneResult } from 'mongodb'
import { type ICreateProductUseCase } from '../../protocols/use-cases/product/create-product'
import { type IProductRepository } from '../../protocols/repositories/product-repository'
import { type ProductRequestModel } from '../../entities/product'

export default class CreateProduct implements ICreateProductUseCase {
    productRepository: IProductRepository

    constructor(productRepository: IProductRepository) {
        this.productRepository = productRepository
    }

    async execute(product: ProductRequestModel): Promise<InsertOneResult> {
        return await this.productRepository.createProduct(product)
    }
}
