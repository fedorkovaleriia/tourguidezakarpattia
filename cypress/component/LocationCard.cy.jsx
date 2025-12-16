import React from "react";
import { mount } from "cypress/react"; 
import LocationCard from "../../Frontend/src/components/LocationCard.jsx";

describe("LocationCard component", () => {
  const baseProps = {
    image: "test.jpg",
    title: "Локація тест",
    description: "Опис локації",
    rating: 4.8,
    visits: 123,
    isFavorite: false,
    onFavoriteToggle: () => {},
  };

  it("рендерить основну інформацію", () => {
    mount(<LocationCard {...baseProps} />);

    cy.contains("Локація тест").should("exist");
    cy.contains("Опис локації").should("exist");

    cy.contains("⭐ 4.8").should("exist");
    cy.contains("👣 123").should("exist");

    cy.get("img")
      .should("have.attr", "src", "test.jpg")
      .and("have.attr", "alt", "Локація тест");
  });

  it("викликає onFavoriteToggle при кліку на зірку", () => {
    const toggleStub = cy.stub().as("toggle");

    mount(<LocationCard {...baseProps} onFavoriteToggle={toggleStub} />);

    cy.get('[class*="star"]').click({ force: true });

    cy.get("@toggle").should("have.been.calledOnce");
  });

  it("відображає правильну зірку залежно від isFavorite", () => {
    mount(<LocationCard {...baseProps} isFavorite={false} />);
    cy.get('[class*="star"]').contains("☆").should("exist");

    mount(<LocationCard {...baseProps} isFavorite={true} />);
    cy.get('[class*="star"]').contains("⭐").should("exist");
  });
});
