import {Router} from 'express'
import { fetchProducts } from '../controllers/product.controller.js'

const productRouter : Router = Router()

productRouter.get('/',fetchProducts)

export default productRouter