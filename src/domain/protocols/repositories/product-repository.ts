import { type ProductRequestModel } from '../../entities/product'

export interface ProductRepository {
    createProduct: (produt: ProductRequestModel) => Promise<void>
}
