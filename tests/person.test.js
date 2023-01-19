import { describe, it, beforeEach, expect, jest } from '@jest/globals'
import Person from '../models/person.js'
import Bank from '../models/bank.js'
describe('Testes modelo pessoa', () => {
  let person = null
  let banks = null
  beforeEach(() => {
    person = new Person('Eduardo', 'edu@gmail.com', [new Bank('Itau', 200)])
    banks = person.banks.map((x) => new Bank(x.name, x.balance))
  })

  it('Deve está instanciado', () => {
    expect(person).toBeInstanceOf(Person)
    expect(person).toBeDefined()
  })

  it('Deve ser desse tipo', () => {
    expect(person).toStrictEqual(expect.objectContaining({
      name: expect.any(String),
      email: expect.any(String),
      banks: expect.any(Array)
    }
    ))
  })

  it('Deve aumentar saldo', () => {
    for (const bank of banks) {
      // arrange
      const spyonDepositMethod = jest.spyOn(bank, 'depositMoney')
      const expected = 500

      // act
      bank.depositMoney(300)

      // assert

      expect(spyonDepositMethod).toHaveBeenCalledTimes(1)
      expect(bank.balance).toBe(expected)
    }
  })

  it('Deve ser realizado o saque do dinheiro', () => {
    // arrange
    for (const bank of banks) {
      const spyonWithdrawlMethod = jest.spyOn(bank, 'withdrawMoney')
      const expected = 100
      // act
      bank.withdrawMoney(100)

      // assert
      expect(spyonWithdrawlMethod).toHaveBeenCalledTimes(1)
      expect(bank.balance).toBe(expected)
    }
  })

  it('Nove dever ser alterado', () => {
    for (const bank of banks) {
    // arrange

      const nomeAtual = bank.name
      const newName = 'Bradesco'

      // act
      bank.changeName(newName)

      // assert
      expect(bank.name).not.toBe(nomeAtual)
    }
  })
})
