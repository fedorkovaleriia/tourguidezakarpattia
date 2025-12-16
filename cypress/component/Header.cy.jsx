import React from "react";
import { mount } from "cypress/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../../Frontend/src/components/Header";

describe("Header Component", () => {
  const mountWithRouter = (component) =>
    mount(<MemoryRouter>{component}</MemoryRouter>);

  it("рендериться без помилок та показує основний заголовок", () => {
    mountWithRouter(<Header />);
    cy.get("header").should("exist");
    cy.contains("Туристичний гід Закарпаття").should("exist");
  });

  it("має правильні навігаційні посилання", () => {
    mountWithRouter(<Header />);
    cy.get('a[href="/"]').should("exist");
    cy.get('a[href="/miniguide"]').should("exist");
    cy.get('a[href="/locationdirectory"]').should("exist");
    cy.get('a[href="/account"]').should("exist");
  });

  it('має розділювач "І" між посиланнями', () => {
    mountWithRouter(<Header />);
    cy.contains('span', 'І').should("exist");
  });

  it("має правильну кількість навігаційних посилань", () => {
    mountWithRouter(<Header />);
    cy.get("nav a").should("have.length", 3);
  });
});
