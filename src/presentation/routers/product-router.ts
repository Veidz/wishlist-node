/* eslint-disable @typescript-eslint/no-misused-promises */
import express, { type Request, type Response, type Router } from 'express'
import ProductsMiddleware from '../middlewares/product-middleware'
import { type ICreateProductUseCase } from '../../domain/protocols/use-cases/product/create-product'
import ResultViewModel from '../view-models/result-view-model'

export default function ProductsRouter(
    createProductUseCase: ICreateProductUseCase
): Router {
    const router = express.Router()

    router.post('/', ProductsMiddleware, async(req: Request, res: Response) => {
        try {
            await createProductUseCase.execute(req.body)
            res.status(201).json(new ResultViewModel(false, 'Created.'))
        } catch (error) {
            console.log(error)
            res.status(500).send(new ResultViewModel(true, 'Internal Server Error.'))
        }
    })

    return router
}
