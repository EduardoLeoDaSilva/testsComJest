import { afterEach, beforeEach, describe, expect, it } from '@jest/globals'
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
  it('GET/ Deve listar usuários', async function () {
    const response = await request(app)
      .get('/api/person')
      .expect(200)
      .expect('Content-type', 'application/json; charset=utf-8')

    expect(response.body).toEqual(expect.any(Array))
  })

  it.each([
    ['Teste1', { name: 'Teste 1', email: 'teste1@gmail.com', banks: [{ name: 'Itau', balance: 2000 }] }],
    ['Teste2', { name: 'Teste 2', email: 'teste2@gmail.com', banks: [{ name: 'Santander', balance: 2500 }] }],
    ['Teste3', { name: 'Teste 3', email: 'teste3@gmail.com', banks: [{ name: 'Bradesco', balance: 3000 }] }]])('POST/ Deve realizar cadastro de usuários %s', async (t, obj) => {
    const response = await request(app)
      .post('/api/person')
      .send(obj)
      .expect(200)
      .expect('Content-type', 'application/json; charset=utf-8')

    expect(response.body).toStrictEqual(expect.objectContaining({
      id: expect.any(String),
      name: expect.any(String),
      email: expect.any(String)
    }))
  })

  it.skip.each([
    ['Atualizar nome 1', 'Teste update 1'],
    ['Atualizar nome 2', 'Teste update 2'],
    ['Atualizar nome 3', 'Teste update 2']
  ])('PUT/ Atualização de usuário', async (testName, nameToUpdate) => {
    const response = await request(app)
      .put('/api/person')
      .send({ name: nameToUpdate })
      .expect(200)
      .expect('Content-type', 'application/json; charset=utf-8')
  })
})
