describe('Pokedex', function() {
  it('individual pokemon page can be opened', { defaultCommandTimeout: 600000 }, function() {
    cy.visit('http://localhost:5001')
    cy.contains('venusaur').click()
    cy.contains('overgrow')
    cy.contains('speed')
  })
})