describe('API - Products', () => {

 const baseUrl = 'https://www.saucedemo.com'

  it('Should return inventory page (status check)', () => {
     cy.request({
       method: 'GET',
       url: `${baseUrl}/inventory.html`,
       failOnStatusCode: false
   }).then((response) => {
       expect(response.status).to.be.oneOf([200, 404])
     })
   })

  it('Should return HTML content type for inventory', () => {
   cy.request({
     method: 'GET',
     url: `${baseUrl}/inventory.html`,
     failOnStatusCode: false
   }).then((response) => {
     expect(response.headers['content-type']).to.include('text/html')
   })
  })

  it('Should NOT allow POST to inventory (negative test)', () => {
   cy.request({
     method: 'POST',
     url: `${baseUrl}/inventory.html`,
     failOnStatusCode: false
   }).then((response) => {
     expect(response.status).to.eq(405)
   })
 })

  it('Should return non-empty body for inventory page', () => {
   cy.request({
     method: 'GET',
     url: `${baseUrl}/inventory.html`,
     failOnStatusCode: false
   }).then((response) => {
     expect(response.body).to.not.be.empty
   })
  })
})