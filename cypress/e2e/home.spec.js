describe("Home Page E2E", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("рендерить Header та Footer", () => {
    cy.get("header").should("exist");
    cy.get("footer").should("exist");
  });

  it("рендерить головний текст на сторінці", () => {
    cy.contains(
      "Старовинні замки, величні Карпати, термальні джерела та автентична кухня"
    ).should("exist");
  });

  it("відображає 3 картки турів", () => {
    cy.contains("Замок Паланок").should("exist");
    cy.contains("Озеро Синевир").should("exist");
    cy.contains("Ужгородський замок").should("exist");
  });

  it("кожна картка має опис", () => {
    cy.contains("Історична пам’ятка").should("exist");
    cy.contains("Найвідоміше гірське озеро").should("exist");
    cy.contains("Символ стародавнього міста").should("exist");
  });
});
