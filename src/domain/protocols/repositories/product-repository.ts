import { type InsertOneResult } from 'mongodb'
import { type ProductRequestModel } from '../../entities/product'

export interface ProductRepository {
    createProduct: (produt: ProductRequestModel) => Promise<InsertOneResult>
}
