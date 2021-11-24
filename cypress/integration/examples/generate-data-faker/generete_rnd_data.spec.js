/// <reference types="cypress" />
var faker = require('faker');
import 'cypress-each'

faker.seed(404)
const users = Cypress._.range(1, 11).map(user => {
  return {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    id: user
  }
})

console.table(users)

describe('generate and verify random data', () => {
  it.each(users)(user => `user ${user.id}: ${user.email}`, user => {
    expect(user.id).to.be.within(1, 10)
  })
  //will take each 3rd user
  it.each(users, 3)(user => `user ${user.id}: ${user.email}`, user => {
    expect(user.id).to.be.within(1, 10)
  })
  // will divide array to chunks eql 2 users, and will take only prefered chunk
  it.each(users, 
    5, // create 5 chunks
    0 // pick first chunk
    )(user => `user ${user.id}: ${user.email}`, user => {
    expect(user.id).to.be.within(1, 10)
  }) 
  // will create randomly generated range from users array and apply verification on it
  it.each(Cypress._.sampleSize(users, 5))(user => `user ${user.id}: ${user.email}`, user => {
    expect(user.id).to.be.within(1, 10)
  }) 
})