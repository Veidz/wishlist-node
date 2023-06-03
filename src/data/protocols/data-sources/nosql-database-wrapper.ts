import { type InsertOneResult } from 'mongodb'

export interface NoSQLDatabaseWrapper {
    insertOne: (entity: any) => Promise<InsertOneResult>
}
