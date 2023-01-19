import { v4 as uuid } from 'uuid'
class Bank {
  constructor (name, balance) {
    this.id = uuid()
    this.name = name
    this.balance = balance
  }

  depositMoney (value) {
    this.balance += value
  }

  withdrawMoney (value) {
    this.balance -= value
  }

  changeName (value) {
    this.name = value
  }

  checkIdIsFilled () {
    return this.id != null && this.id !== undefined
  }
}

export default Bank
