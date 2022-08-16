describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5001/pokemon/venusaur')
    cy.contains('venusaur')
    cy.contains('overgrow')
    cy.contains('speed')
  })
})