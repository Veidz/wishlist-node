import { type InsertOneResult } from 'mongodb'
import { type ProductRequestModel } from '../../../entities/product'

export interface ICreateProductUseCase {
    execute: (product: ProductRequestModel) => Promise<InsertOneResult>
}
