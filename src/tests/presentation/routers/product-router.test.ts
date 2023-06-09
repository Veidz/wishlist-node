import request from 'supertest'
import { ObjectId, type InsertOneResult } from 'mongodb'
import { type ICreateProductUseCase } from '../../../domain/protocols/use-cases/product/create-product'
import { type ProductRequestModel } from '../../../domain/entities/product'
import server from '../../../server'
import ProductsRouter from '../../../presentation/routers/product-router'

class MockCreateProductUseCase implements ICreateProductUseCase {
    async execute(product: ProductRequestModel): Promise<InsertOneResult> {
        return {
            acknowledged: true,
            insertedId: new ObjectId('647bb3db14b88e8f2798d61e')
        }
    }
}

describe('Product Router', () => {
    let mockCreateProductUseCase: ICreateProductUseCase

    beforeAll(() => {
        mockCreateProductUseCase = new MockCreateProductUseCase()
        server.use('/products', ProductsRouter(mockCreateProductUseCase))
    })

    beforeEach(() => {
        jest.clearAllMocks()
    })

    describe('POST /products', () => {
        it('Should return 201 on use case success', async() => {
            const inputData = {
                Name: 'any_name',
                ImageUrl: 'any_image_url',
                ProductUrl: 'any_product_url'
            }
            const response = await request(server).post('/products').send(inputData)
            expect(response.status).toBe(201)
        })

        it('Should return 400 on middleware missing param', async() => {
            const inputData = {
                ImageUrl: 'any_image_url',
                ProductUrl: 'any_product_url'
            }
            const response = await request(server).post('/products').send(inputData)
            expect(response.status).toBe(400)
        })

        it('Should return 500 on use case error', async() => {
            const inputData = {
                Name: 'any_name',
                ImageUrl: 'any_image_url',
                ProductUrl: 'any_product_url'
            }
            jest.spyOn(mockCreateProductUseCase, 'execute').mockImplementation(async() => { return await Promise.reject(new Error()) })
            const response = await request(server).post('/products').send(inputData)
            expect(response.status).toBe(500)
        })
    })
})
