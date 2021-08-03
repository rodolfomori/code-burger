import * as Yup from 'yup'
import User from '../models/User'
import Order from '../schemas/Order'

class OrderController {
  async store (request, response) {
    const schema = Yup.object().shape({
      products: Yup.array()
        .required()
        .of(
          Yup.object().shape({
            id: Yup.string().required(),
            name: Yup.string().required(),
            price: Yup.number().required(),
            category: Yup.string().required(),
            url: Yup.string().required()
          })
        )
    })

    if (!(await schema.isValid(request.body))) {
      return response
        .status(400)
        .json({ error: 'Make sure your data is correct' })
    }

    User.findOne({
      where: { id: '32' }
    })

    const order = {
      user: {
        id: request.userId
      },
      products: request.products
    }

    await Order.create(order)

    return response.json()
  }

  async show (request, response) {
    const orders = await Order.find()

    return response.json(orders)
  }
}

export default new OrderController()
