import request from 'supertest'
import { type CreateProductUseCase } from '../../../domain/protocols/use-cases/product/create-product'
import { type ProductRequestModel } from '../../../domain/entities/product'
import server from '../../../server'
import ProductsRouter from '../../../presentation/routers/product-router'

class MockCreateProductUseCase implements CreateProductUseCase {
    async execute(product: ProductRequestModel): Promise<void> {
        throw new Error()
    }
}

describe('Product Router', () => {
    let mockCreateProductUseCase: CreateProductUseCase

    beforeAll(() => {
        mockCreateProductUseCase = new MockCreateProductUseCase()
        server.use('/products', ProductsRouter(mockCreateProductUseCase))
    })

    beforeEach(() => {
        jest.clearAllMocks()
    })

    describe('POST /products', () => {
        it('Should return 500 on use case error', async() => {
            const inputData = {
                name: 'any_name',
                imageUrl: 'any_image_url',
                productUrl: 'any_product_url'
            }
            jest.spyOn(mockCreateProductUseCase, 'execute').mockImplementation(async() => { await Promise.reject(new Error()) })
            const response = await request(server).post('/products').send(inputData)
            expect(response.status).toBe(500)
        })
    })
})
