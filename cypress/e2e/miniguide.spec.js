describe("MiniGuide Page E2E", () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/miniguides*', {
      statusCode: 200,
      body: [
        { id: 1, title: 'Гід Закарпаття', image: 'guide1.jpg', route: 'route1', rating: '5/5', visits: 10 },
        { id: 2, title: 'Гід Карпат', image: 'guide2.jpg', route: 'route2', rating: '4/5', visits: 5 },
      ]
    }).as('getGuides');

    cy.visit('http://localhost:5173/miniguide');
    cy.wait('@getGuides');
  });

  it("рендерить заголовок сторінки", () => {
    cy.contains("Міні-гід").should("exist");
  });

  it("показує фільтр", () => {
    cy.contains("Всі типи").should("exist");
  });

  it("рендерить міні-гіди", () => {
    cy.get("img").should("have.length.at.least", 1);
    cy.contains("Гід Закарпаття").should("exist");
    cy.contains("Гід Карпат").should("exist");
  });

  it("дозволяє додати міні-гіда в обране", () => {
  cy.get('[data-testid="favorite-toggle"]', { timeout: 8000 })
      .first()
      .click();});

});
