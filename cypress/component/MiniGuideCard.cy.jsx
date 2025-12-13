import React from "react";
import { mount } from "cypress/react";
import MiniGuideCard from "../../Frontend/src/components/MiniGuideCard.jsx";

describe("MiniGuideCard component", () => {
  const baseProps = {
    image: "test.jpg",
    title: "Міні гід тест",
    route: "Маршрут тест",
    rating: 4.7,
    visits: 98,
    isFavorite: false,
    onFavoriteToggle: () => {},
  };

  it("рендерить основну інформацію", () => {
    mount(<MiniGuideCard {...baseProps} />);

    cy.contains("Міні гід тест").should("exist");
    cy.contains("Маршрут тест").should("exist");

    cy.contains("⭐ 4.7").should("exist");
    cy.contains("👣 98").should("exist");

    cy.get("img")
      .should("have.attr", "src", "test.jpg")
      .and("have.attr", "alt", "Міні гід тест");
  });

  it("викликає onFavoriteToggle при кліку на зірку", () => {
    const toggleStub = cy.stub().as("toggle");

    mount(
      <MiniGuideCard
        {...baseProps}
        onFavoriteToggle={toggleStub}
      />
    );

    cy.get('[data-testid="favorite-toggle"]').click({ force: true });

    cy.get("@toggle").should("have.been.calledOnce");
  });

  it("відображає правильну зірку залежно від isFavorite", () => {
    mount(<MiniGuideCard {...baseProps} isFavorite={false} />);
    cy.get('[data-testid="favorite-icon"]').contains("☆").should("exist");

    mount(<MiniGuideCard {...baseProps} isFavorite={true} />);
    cy.get('[data-testid="favorite-icon"]').contains("⭐").should("exist");
  });
});
