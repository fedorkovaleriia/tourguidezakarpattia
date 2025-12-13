describe("Account Page E2E", () => {
  beforeEach(() => {
    cy.window().then((win) => {
      win.localStorage.setItem(
        "user",
        JSON.stringify({
          id: 1,
          username: "TestUser",
          email: "test@email.com",
        })
      );
    });

    cy.visit("http://localhost:5173/account");
  });

  it("рендерить вітальний текст", () => {
    cy.contains("Вітаємо,").should("exist");
    cy.contains("TestUser").should("exist");
  });

  it("перемикає вкладки всередині акаунту", () => {
    cy.get("button").contains("Міні-гід").click();

    cy.get("section").should("exist");

    cy.get("button").contains("Обрані локації").click();

    cy.get("section").should("exist");
  });

  it("виконує вихід з акаунту", () => {
    cy.get("button").contains("Вийти").click();

    cy.url().should("include", "/login");
  });
});
