import { type Request, type Response, type NextFunction } from 'express'

export default async function ProductsMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<any> {
    const requiredFields = ['name', 'imageUrl', 'productUrl']
    for (const field of requiredFields) {
        if (!req.body[field]) {
            return res.status(400).json({ message: `Missing param: ${field}` })
        }
    }
    next()
}
