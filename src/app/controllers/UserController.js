import * as Yup from 'yup'
import User from '../models/User'
import { v4 } from 'uuid'

class UserController {
  async store (request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6)
    })

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Make sure your data is correct' })
    }
    const { email, password, name } = request.body

    const userExists = await User.findOne({
      where: { email }
    })

    if (userExists) {
      return response.status(400).json({ error: 'User already exists' })
    }

    const user = {
      id: v4(),
      email,
      password,
      name
    }

    await User.create(user)

    return response.json(user)
  }
}

export default new UserController()
