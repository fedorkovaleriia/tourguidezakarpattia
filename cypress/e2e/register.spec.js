describe("Register Page E2E", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/register");
  });

  it("рендерить форму реєстрації", () => {
    cy.contains("Реєстрація").should("exist");
    cy.get("input[name='username']").should("exist");
    cy.get("input[name='email']").should("exist");
    cy.get("input[name='password']").should("exist");
    cy.get("button[type='submit']").should("exist");
  });

  it("показує помилку при неправильному email", () => {
    cy.get("input[name='username']").type("TestUser");
    cy.get("input[name='email']").type("wrongemail.com");
    cy.get("input[name='password']").type("Password123");
    cy.get("button[type='submit']").click();

    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("Email має містити символ @");
    });
  });

  it("показує помилку при слабкому паролі", () => {
    cy.get("input[name='username']").type("TestUser");
    cy.get("input[name='email']").type("test@email.com");
    cy.get("input[name='password']").type("short");
    cy.get("button[type='submit']").click();

    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("Пароль має містити");
    });
  });

  it("відправляє запит реєстрації з правильними даними", () => {
    cy.intercept("POST", "**/register", {
      statusCode: 200,
      body: { success: true },
    }).as("registerRequest");

    cy.get("input[name='username']").type("TestUser");
    cy.get("input[name='email']").type("test@email.com");
    cy.get("input[name='password']").type("Password123");
    cy.get("button[type='submit']").click();

    cy.wait("@registerRequest");

    cy.url().should("not.include", "/register");
  });

  it("має посилання на сторінку входу", () => {
    cy.contains("Увійти").click();
    cy.url().should("include", "/login");
  });
});
