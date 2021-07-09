import Product from '../models/Product'

class ProductsController {
  async store (request, response) {
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
