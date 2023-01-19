import PersonRepository from '../repositories/person.repository.js'
import Person from '../models/person.js'
import Bank from '../models/bank.js'
class PersonController {
  static async getAllPersons (req, res) {
    const personRepository = new PersonRepository()
    const result = await personRepository.getAllPersons()
    res.status(200).json(result)
  }

  static async getPerson (req, res) {
    const personRepository = new PersonRepository()
    const result = await personRepository.getPersonById(req.params.id)
    res.status(200).json(result)
  }

  static async savePerson (req, res) {
    const banks = req.body.banks.map((x) => new Bank(x.name, x.balance))
    console.log(banks)
    const person = new Person(req.body.name, req.body.email, banks)
    const personRepository = new PersonRepository()
    const result = await personRepository.savePerson(person)
    res.status(200).json(result)
  }

  static async updatePerson (req, res) {
    // const person = new Person(...req.body)
    const personRepository = new PersonRepository()
    const result = await personRepository.updatePerson(req.body)
    res.status(200).json(result)
  }

  static async deletePerson (req, res) {
    const personRepository = new PersonRepository()
    const result = await personRepository.deletePerson(req.params.id)
    res.status(200).json(result)
  }
}

export default PersonController
