import React from "react";
import { mount } from "cypress/react";
import Home from "../../Frontend/src/pages/Home";
import { MemoryRouter } from "react-router-dom";

describe("Home Page", () => {
  it("рендерить заголовок", () => {
    mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    cy.contains(
      "Старовинні замки, величні Карпати, термальні джерела та автентична"
    ).should("exist");
  });

  it("рендерить Header і Footer", () => {
    mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    cy.get("header").should("exist");
    cy.get("footer").should("exist");
  });

  it("рендерить три TourCard з правильними заголовками", () => {
    mount(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    cy.contains("Замок Паланок").should("exist");
    cy.contains("Озеро Синевир").should("exist");
    cy.contains("Ужгородський замок").should("exist");

    cy.contains("Історична пам’ятка, що вражає архітектурою та панорамою.").should("exist");
    cy.contains("Найвідоміше гірське озеро України, оточене лісами Карпат.").should("exist");
    cy.contains("Символ стародавнього міста на річці Уж.").should("exist");
  });
});
