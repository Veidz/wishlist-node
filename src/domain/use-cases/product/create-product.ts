import { type CreateProductUseCase } from '../../protocols/use-cases/product/create-product'
import { type ProductRepository } from '../../protocols/repositories/product-repository'
import { type ProductRequestModel } from '../../entities/product'

export default class CreateProduct implements CreateProductUseCase {
    productRepository: ProductRepository

    constructor(productRepository: ProductRepository) {
        this.productRepository = productRepository
    }

    async execute(product: ProductRequestModel): Promise<void> {
        await this.productRepository.createProduct(product)
    }
}
