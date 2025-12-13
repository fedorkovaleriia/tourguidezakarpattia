describe("Error Page (404) E2E", () => {
  it("показує 404 сторінку при невідомому маршруті", () => {
    cy.visit("http://localhost:5173/this-page-does-not-exist", {
      failOnStatusCode: false,
    });

    cy.contains("404").should("exist");
    cy.contains("Сторінку не знайдено").should("exist");
    cy.contains("Повернутись на головну").should("exist");
  });

  it("переходить на головну при кліку на посилання", () => {
    cy.visit("http://localhost:5173/unknown", {
      failOnStatusCode: false,
    });

    cy.contains("Повернутись на головну").click();
    cy.url().should("eq", "http://localhost:5173/");
  });
});
