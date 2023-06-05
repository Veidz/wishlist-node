import { ObjectId, type InsertOneResult } from 'mongodb'
import { type ProductRequestModel } from '../../../domain/entities/product'
import { type IProductRepository } from '../../../domain/protocols/repositories/product-repository'
import CreateProduct from '../../../domain/use-cases/product/create-product'

describe('Create Product Use Case', () => {
    class MockProductRepository implements IProductRepository {
        async createProduct(produt: ProductRequestModel): Promise<InsertOneResult> {
            return {
                acknowledged: true,
                insertedId: new ObjectId('647bb3db14b88e8f2798d61e')
            }
        }
    }

    let mockProductRepository: IProductRepository

    beforeEach(() => {
        jest.clearAllMocks()
        mockProductRepository = new MockProductRepository()
    })

    it('Should return InsertOneResult with correct data', async() => {
        const inputData = {
            Name: 'any_name',
            ImageUrl: 'any_image_url',
            ProductUrl: 'product_url'
        }

        jest.spyOn(mockProductRepository, 'createProduct').mockImplementation(async() => {
            return {
                acknowledged: true,
                insertedId: new ObjectId('647bb3db14b88e8f2798d61e')
            }
        })
        const createProductUseCase = new CreateProduct(mockProductRepository)
        const result = await createProductUseCase.execute(inputData)
        expect(result.acknowledged).toBe(true)
        expect(result.insertedId).toEqual(new ObjectId('647bb3db14b88e8f2798d61e'))
        expect(mockProductRepository.createProduct).toBeCalledTimes(1)
    })
})
