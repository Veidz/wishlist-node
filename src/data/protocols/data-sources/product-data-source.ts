import { type InsertOneResult } from 'mongodb'
import { type ProductRequestModel } from '../../../domain/entities/product'

export interface IProductDataSource {
    create: (product: ProductRequestModel) => Promise<InsertOneResult>
}
