import { afterEach, beforeEach, describe, it } from '@jest/globals'
import request from 'supertest'
import { app } from '../index.js'

let server
beforeEach(() => {
  const port = 80
  server = app.listen(port, () => {
    console.log('Ouvindo na porta 3000')
  })
})

afterEach(() => {
  server.close()
})

describe('Api usuários', () => {
  it('GET/ Deve listar usuários', async () => {
    const response = await request(app)
      .get('/api/person')
      .expect(200)
      .expect(response.body).toEqual()
  })
})
