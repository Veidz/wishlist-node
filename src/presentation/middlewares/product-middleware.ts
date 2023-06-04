import { type Request, type Response, type NextFunction } from 'express'
import ResultViewModel from '../view-models/result-view-model'

export default async function ProductsMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<any> {
    const requiredFields = ['name', 'itemUrl']
    for (const field of requiredFields) {
        if (!req.body[field]) {
            return res.status(400).json(new ResultViewModel(true, `Missing param: ${field}`))
        }
    }
    next()
}
