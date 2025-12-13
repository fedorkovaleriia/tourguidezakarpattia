import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "cypress/react";
import Register from "../../Frontend/src/pages/Register";
import { AuthContext } from "../../Frontend/src/hooks/useAuth.jsx";

describe("Register Page", () => {
  let registerStub;

  beforeEach(() => {
    
    registerStub = cy.stub().as("registerStub");

    mount(
      <MemoryRouter>
        <AuthContext.Provider value={{ user: null, register: registerStub }}>
          <Register />
        </AuthContext.Provider>
      </MemoryRouter>
    );
  });

  it("рендерить заголовок та базові елементи", () => {
    cy.contains("Реєстрація").should("exist");
    cy.get("input#username").should("exist");
    cy.get("input#email").should("exist");
    cy.get("input#password").should("exist");
    cy.get("button[type=submit]").should("exist");
    cy.contains("Увійти").should("exist");
    cy.get("footer").should("exist");
  });

 it("показує alert якщо email неправильний", () => {
  cy.window().then((win) => {
    cy.stub(win, "alert").as("alertStub");
  });

  cy.get("input#username").type("TestUser");
  cy.get("input#email").type("wrongemail.com");
  cy.get("input#password").type("Password1");

  cy.get("form").invoke("attr", "novalidate", true);

  cy.get("button[type=submit]").click();
  cy.get("@alertStub").should(
    "have.been.calledWith",
    "Email має містити символ @"
  );
});


  it("показує alert якщо пароль неправильний", () => {
    cy.window().then((win) => cy.stub(win, "alert").as("alertStub"));

    cy.get("input#username").type("TestUser");
    cy.get("input#email").type("test@email.com");
    cy.get("input#password").type("short");
    cy.get("button[type=submit]").click();

    cy.get("@alertStub").should(
      "have.been.calledWith",
      "Пароль має містити щонайменше 8 символів і хоча б одну велику літеру"
    );
  });

  it("викликає register при правильних даних", () => {
    cy.get("input#username").type("TestUser");
    cy.get("input#email").type("test@email.com");
    cy.get("input#password").type("Password123");

    cy.get("button[type=submit]").click();

    cy.get("@registerStub").should(
      "have.been.calledWith",
      "TestUser",
      "test@email.com",
      "Password123"
    );
  });
});
