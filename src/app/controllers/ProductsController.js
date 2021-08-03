import Product from '../models/Product'
import * as Yup from 'yup'

class ProductsController {
  async store (request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      price: Yup.number()
        .required(),
      category: Yup.string()
        .required()
    })

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Make sure your data is correct' })
    }
    console.log(request)

    const { filename: path } = request.file
    const { name, price, category } = request.body

    const product = {
      name,
      price: Number(price),
      category,
      path
    }

    console.log(product)
    await Product.create(product)

    return response.json()
  }

  async show (request, response) {
    const products = await Product.findAll()

    return response.json(products)
  }
}
export default new ProductsController()
