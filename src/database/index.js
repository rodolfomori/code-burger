import Sequelize from 'sequelize'
import Product from '../app/models/Product'
import mongoose from 'mongoose'

import User from '../app/models/User'
import databaseConfig from '../config/database'

const models = [User, Product]

class Database {
  constructor () {
    this.init()
    this.mongo()
  }

  init () {
    this.connection = new Sequelize(databaseConfig)
    models
      .map(model => model.init(this.connection))
  }

  mongo () {
    this.mongoConnection = mongoose.connect('mongodb://localhost:27017/codeburger', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }
}

export default new Database()
