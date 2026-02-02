// describe('API - Authentication', () => {

//   it('Successful login via API ', () => {

//     cy.request({
//       method: 'POST',
//       url: 'https://www.saucedemo.com',
//       form: true,
//       body: {
//         username: 'standard_user',
//         password: 'secret_sauce'
//       }
//     }).then((response) => {
//       expect(response.status).to.eq(200)
//     })
//   })
// })

describe('Inventory access', () => {
  it('Should navigate to inventory page after login', () => {
    cy.visit('/')

    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')
    cy.get('.inventory_list').should('be.visible')
    cy.get('.inventory_item').should('have.length.greaterThan', 0)
  })
})