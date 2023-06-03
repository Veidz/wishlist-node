import { ObjectId } from 'mongodb'
import { MongoDbProductDataSource } from '../../../../data/data-sources/mongodb/mongodb-product-data-source'
import { type NoSQLDatabaseWrapper } from '../../../../data/protocols/data-sources'

describe('MongoDb Data Source', () => {
    let mockDatabase: NoSQLDatabaseWrapper

    beforeAll(async() => {
        mockDatabase = {
            insertOne: jest.fn()
        }
    })

    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('should return InsertOneResult with correct data', async() => {
        const dataSource = new MongoDbProductDataSource(mockDatabase)
        jest.spyOn(mockDatabase, 'insertOne').mockImplementation(async() => {
            return {
                acknowledged: true,
                insertedId: new ObjectId('647bb3db14b88e8f2798d61e')
            }
        })
        const result = await dataSource.create({
            name: 'any_name',
            imageUrl: 'any_image_url',
            productUrl: 'product_url'
        })
        expect(result.acknowledged).toBe(true)
        expect(result.insertedId).toEqual(new ObjectId('647bb3db14b88e8f2798d61e'))
        expect(mockDatabase.insertOne).toHaveBeenCalledWith({
            name: 'any_name',
            imageUrl: 'any_image_url',
            productUrl: 'product_url'
        })
    })
})