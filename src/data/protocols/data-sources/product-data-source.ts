import { type ProductRequestModel } from '../../../domain/entities/product'

export interface ProductDataSource {
    create: (product: ProductRequestModel) => Promise<void>
}
