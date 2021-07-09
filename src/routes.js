import { Router } from 'express'
import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import ProductsController from './app/controllers/ProductsController'
import OrdersController from './app/controllers/OrdersController'

import authMiddlewares from './app/middlewares/auth'
import multer from 'multer'
import multerConfig from './config/multer'

const upload = multer(multerConfig)

const routes = new Router()

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

routes.use(authMiddlewares)

routes.post('/products', upload.single('file'), ProductsController.store)
routes.get('/products', ProductsController.show)

routes.post('/orders', OrdersController.store)
routes.get('/orders', OrdersController.show)

export default routes
