/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { type Request, type Response, type Router } from 'express'
import ProductsMiddleware from '../middlewares/product-middleware'
import { type CreateProductUseCase } from '../../domain/protocols/use-cases/product/create-product'

export default function ProductsRouter(
    createProductUseCase: CreateProductUseCase
): Router {
    const router = express.Router()

    router.post('/', ProductsMiddleware, async(req: Request, res: Response) => {
        try {
            await createProductUseCase.execute(req.body)
            res.status(201).json({ message: 'Created.' })
        } catch (error) {
            res.status(500).send({ message: 'Error saving data.' })
        }
    })

    return router
}
