import { type InsertOneResult } from 'mongodb'
import { type ProductRequestModel } from '../../entities/product'

export interface IProductRepository {
    createProduct: (produt: ProductRequestModel) => Promise<InsertOneResult>
}
