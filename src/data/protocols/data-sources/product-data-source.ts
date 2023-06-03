import { type InsertOneResult } from 'mongodb'
import { type ProductRequestModel } from '../../../domain/entities/product'

export interface ProductDataSource {
    create: (product: ProductRequestModel) => Promise<InsertOneResult>
}
