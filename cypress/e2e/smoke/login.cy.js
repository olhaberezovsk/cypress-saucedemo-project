describe('Smoke - Login', () => {
  beforeEach(() => {
    cy.fixture('user').as('user')
  })

  it('Should login successfully with standard user', function () {
    cy.login(this.user.standardUser.username, this.user.standardUser.password)

    cy.url().should('include', '/inventory')
    cy.get('.inventory_list').should('be.visible')
  })
})