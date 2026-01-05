describe('Regression - Login negative scenarios', () => {
  beforeEach(() => {
    cy.fixture('user').as('user')
    cy.visit('/')
  })

  it('Display an error message for invalid credentials', function () {
    cy.get('[data-test="username"]').type(this.user.invalidUser.username)
    cy.get('[data-test="password"]').type(this.user.invalidUser.password)
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should(
      'contain.text',
      'Username and password do not match'
    )
  })

  it('Display an error message for locked out user', function () {
    cy.get('[data-test="username"]').type(this.user.lockedOutUser.username)
    cy.get('[data-test="password"]').type(this.user.lockedOutUser.password)
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should(
      'contain.text',
      'Sorry, this user has been locked out'
    )
  })

  it('Display an error message when username is empty', function () {
    cy.get('[data-test="password"]').type(this.user.standardUser.password)
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should(
      'contain.text',
      'Username is required'
    )
  })
})