import { PrismaClient } from '@prisma/client'

class PersonRepository {
  prismaClient

  constructor () {
    this.prismaClient = new PrismaClient()
  }

  async getAllPersons () {
    const persons = await this.prismaClient.person.findMany({
      include: {
        banks: true
      }
    })
    return persons
  }

  async getPersonById (id) {
    const person = await this.prismaClient.person.findUnique({
      where: {
        id
      },
      include: {
        banks: true
      }
    })
    return person
  }

  async savePerson (person) {
    const result = await this.prismaClient
      .person.create({
        data: {
          id: person.id,
          name: person.name,
          email: person.email,
          banks: {
            createMany: {
              data: person.banks
            }
          }
        }
      })
    return result
  }

  async updatePerson (person) {
    const result = await this.prismaClient
      .person.update({
        where: {
          id: person.id
        },
        data: {
          name: person.name,
          email: person.email
        }
      })
    return result
  }

  async deletePerson (id) {
    const result = await this.prismaClient.person.delete({
      where: {
        id: id
      }
    })
    return result
  }
}

export default PersonRepository
