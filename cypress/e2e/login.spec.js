describe("Login Page E2E", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login");});

  it("рендерить заголовок та базові елементи", () => {
    cy.contains("Увійти").should("exist");
    cy.get("input[type='email']").should("exist");
    cy.get("input[type='password']").should("exist");
    cy.get("button[type=submit]").should("exist");
  });

  it("показує помилку при неправильному email", () => {
    cy.get("input[type='email']").type("wrongemail.com");
    cy.get("input[type='password']").type("Password123");
    cy.get("button[type=submit]").click();

    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("Email має містити символ @");
    });
  });

  it("показує помилку при неправильному паролі", () => {
    cy.get("input[type='email']").type("test@email.com");
    cy.get("input[type='password']").type("short");
    cy.get("button[type=submit]").click();

    cy.on("window:alert", (txt) => {
      expect(txt).to.contains(
        "Пароль має містити щонайменше 8 символів і хоча б одну велику літеру"
      );
    });
  });

  it("успішний логін з правильними даними", () => {
    cy.intercept('POST', '**/login', {
      statusCode: 200,
      body: { 
        accessToken: "fake-jwt-token-12345",
        user: { id: 1, email: "test@email.com", username: "TestUser" }
      }
    }).as('loginRequest');
    cy.get("input[type='email']").type("test@email.com");
    cy.get("input[type='password']").type("Password123");
    cy.get("button[type=submit]").click();
    cy.wait('@loginRequest');

    cy.url().should("not.include", "/login");
    cy.url().should("include", "/account");
    cy.contains("Вітаємо, TestUser").should("exist");
    
  });
});
