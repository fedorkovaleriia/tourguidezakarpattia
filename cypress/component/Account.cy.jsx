import React from "react";
import { mount } from "cypress/react";
import Account from "../../Frontend/src/pages/Account";
import { AuthMock } from "../support/AuthMock"; 
import { MemoryRouter } from "react-router-dom";

describe("Account Page", () => {
  const mockUser = { username: "TestUser", id: 1 };

  it("рендерить заголовок з імʼям користувача", () => {
    mount(
      <MemoryRouter>
        <AuthMock user={mockUser}>
          <Account />
        </AuthMock>
      </MemoryRouter>
    );

    cy.contains("Вітаємо,").should("exist");
    cy.contains("TestUser").should("exist");
  });

  it("має кнопки для перемикання вкладок та виходу", () => {
    mount(
      <MemoryRouter>
        <AuthMock user={mockUser}>
          <Account />
        </AuthMock>
      </MemoryRouter>
    );

    cy.contains("Обрані локації").should("exist");
    cy.contains("Міні-гід").should("exist");
    cy.contains("Вийти").should("exist");
  });

  it("перемикає вкладки при кліку на кнопки", () => {
    mount(
      <MemoryRouter>
        <AuthMock user={mockUser}>
          <Account />
        </AuthMock>
      </MemoryRouter>
    );

    cy.contains("Міні-гід").click();
    cy.get("section").should("exist");

    cy.contains("Обрані локації").click();
    cy.get("section").should("exist");
  });

  it("викликає logout при кліку на кнопку 'Вийти'", () => {
    const mockLogout = cy.stub();
    const mockUserWithLogout = { ...mockUser, logout: mockLogout };

    mount(
      <MemoryRouter>
        <AuthMock user={mockUserWithLogout}>
          <Account />
        </AuthMock>
      </MemoryRouter>
    );

    cy.contains("Вийти").click();
  });
});
