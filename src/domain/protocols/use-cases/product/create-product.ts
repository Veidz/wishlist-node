import { type ProductRequestModel } from '../../../entities/product'

export interface CreateProductUseCase {
    execute: (product: ProductRequestModel) => Promise<void>
}
