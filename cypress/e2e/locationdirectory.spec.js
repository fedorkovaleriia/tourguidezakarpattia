describe("Location Directory Page E2E", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/locationdirectory");
  });

  it("рендерить заголовок сторінки", () => {
    cy.contains("Завантаження локацій...").should("exist");

    cy.get('[data-testid="page-title"]', { timeout: 8000 })
      .should("exist")
      .and("contain", "Каталог локацій");
  });

  it("показує карту та фільтр", () => {
    cy.get('[data-testid="map-zak"]', { timeout: 8000 })
      .should("exist");

    cy.contains("Всі типи").should("exist");
  });

  it("рендерить картки локацій", () => {
    cy.get('[data-testid="location-card"]', { timeout: 8000 })
      .should("have.length.at.least", 1);
  });

  it("дозволяє додати локацію в обране", () => {
    cy.get('[data-testid="favorite-toggle"]', { timeout: 8000 })
      .first()
      .click();
  });
});
