import { type InsertOneResult } from 'mongodb'

export interface INoSQLDatabaseWrapper {
    insertOne: (entity: any) => Promise<InsertOneResult>
}
