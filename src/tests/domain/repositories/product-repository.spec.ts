import { ObjectId, type InsertOneResult } from 'mongodb'
import { type ProductDataSource } from '../../../data/protocols/data-sources'
import { type ProductRequestModel } from '../../../domain/entities/product'
import { type ProductRepository } from '../../../domain/protocols/repositories/product-repository'
import ProductRepositoryImpl from '../../../domain/repositories/product-repository'

class MockProductDataSource implements ProductDataSource {
    async create(product: ProductRequestModel): Promise<InsertOneResult> {
        return {
            acknowledged: true,
            insertedId: new ObjectId('647bb3db14b88e8f2798d61e')
        }
    }
}

describe('Product Repository', () => {
    let mockProductDataSource: ProductDataSource
    let productRepository: ProductRepository

    beforeEach(() => {
        jest.clearAllMocks()
        mockProductDataSource = new MockProductDataSource()
        productRepository = new ProductRepositoryImpl(mockProductDataSource)
    })

    describe('createProduct', () => {
        it('should call data source with correct values', async() => {
            jest.spyOn(mockProductDataSource, 'create').mockImplementation(async() => {
                return {
                    acknowledged: true,
                    insertedId: new ObjectId('647bb3db14b88e8f2798d61e')
                }
            })
            await productRepository.createProduct({
                name: 'any_name',
                imageUrl: 'any_image_url',
                productUrl: 'product_url'
            })
            expect(mockProductDataSource.create).toHaveBeenCalledWith({
                name: 'any_name',
                imageUrl: 'any_image_url',
                productUrl: 'product_url'
            })
        })
    })
})
