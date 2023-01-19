import { v4 as uuid } from 'uuid'
class Person {
  constructor (name, email, banks) {
    this.id = uuid()
    this.name = name
    this.email = email
    this.banks = banks
  }
}

export default Person
