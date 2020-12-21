import { hash } from 'bcrypt'
import { Collection } from 'mongodb'
import request from 'supertest'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import app from '../config/app'

let accountCollection: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  describe('POST /signup', () => {
    test('Should return 200 on signup', async () => {
      await request(app)
        .post('/api/signup')
        .send({
          name: 'Camilla',
          email: 'camillapzr@gmail.com',
          password: '123456',
          passwordConfirmation: '123456'
        })
        .expect(200)
    })
  })

  describe('POST /login', () => {
    test('Should return 200 on login', async () => {
      const password = await hash('123456', 12)

      await accountCollection.insertOne({
        name: 'Camilla',
        email: 'camillapzr@gmail.com',
        password
      })

      await request(app)
        .post('/api/login')
        .send({
          email: 'camillapzr@gmail.com',
          password: '123456'
        })
        .expect(200)
    })

    test('Should return 401 on login fail', async () => {
      await request(app)
        .post('/api/login')
        .send({
          email: 'camillapzr@gmail.com',
          password: '123456'
        })
        .expect(401)
    })
  })
})
