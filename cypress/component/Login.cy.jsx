import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "cypress/react";
import Login from "../../Frontend/src/pages/Login";
import { AuthContext } from "../../Frontend/src/hooks/useAuth.jsx";

describe("Login Page", () => {
  let loginStub;

  beforeEach(() => {
    loginStub = cy.stub().as("loginStub");

    mount(
      <MemoryRouter>
        <AuthContext.Provider value={{ user: null, login: loginStub }}>
          <Login />
        </AuthContext.Provider>
      </MemoryRouter>
    );
  });

  it("рендерить заголовок та базові елементи", () => {
    cy.contains("Увійти").should("exist");
    cy.get("input[type=email]").should("exist");
    cy.get("input[type=password]").should("exist");
    cy.get("button[type=submit]").should("exist");
  });

  it("показує alert при неправильному email", () => {

    cy.window().then((win) => {
      cy.stub(win, "alert").as("alertStub");
    });

    cy.get("input[type=email]").type("wrongemail.com");
    cy.get("input[type=password]").type("Password123");

    cy.get("form").invoke("attr", "novalidate", true);

    cy.get("button[type=submit]").click();

    cy.get("@alertStub").should(
      "have.been.calledWith",
      "Email має містити символ @" 
    );
  });

  it("викликає login при правильних даних", () => {
    cy.get("input[type=email]").type("test@email.com");
    cy.get("input[type=password]").type("Password123");

    cy.get("button[type=submit]").click();

    cy.get("@loginStub").should(
      "have.been.calledWith",
      "test@email.com",
      "Password123"
    );
  });
});