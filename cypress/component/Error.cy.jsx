import React from "react";
import { mount } from "cypress/react";
import { MemoryRouter } from "react-router-dom";
import Error from "../../Frontend/src/pages/Error";

describe("Error Page (404)", () => {
  const mountWithRouter = (component) =>
    mount(<MemoryRouter>{component}</MemoryRouter>);

  it("рендерить 404 та підзаголовок", () => {
    mountWithRouter(<Error />);
    cy.contains("404").should("exist");
    cy.contains("Сторінку не знайдено 😕").should("exist");
  });

  it("має посилання на головну", () => {
    mountWithRouter(<Error />);
    cy.get("a[href='/']")
      .should("exist")
      .and("contain.text", "Повернутись на головну");
  });

  it("рендерить Footer", () => {
    mountWithRouter(<Error />);
    cy.get("footer").should("exist");
  });
});
