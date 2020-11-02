// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/añskdlas')
    cy.contains('h1', '404')
  })
})
