import React from "react";
import { mount } from "cypress/react";
import { MemoryRouter } from "react-router-dom";
import MiniGuideCard from "../../Frontend/src/components/MiniGuideCard";

function TestMiniGuide() {
  const guides = [
    {
      id: 1,
      title: "Гід Синевир",
      route: "Маршрут Синевиру",
      rating: 4.8,
      visits: 150,
      image: ""
    },
    {
      id: 2,
      title: "Гід Шипіт",
      route: "Маршрут Шипіту",
      rating: 4.5,
      visits: 120,
      image: ""
    }
  ];

  const toggleFavorite = cy.stub().as("toggleFavorite");

  return (
    <div>
      <h1>Міні-гід</h1>

      {guides.map(guide => (
        <MiniGuideCard
          key={guide.id}
          image={guide.image}
          title={guide.title}
          route={guide.route}
          rating={guide.rating}
          visits={guide.visits}
          isFavorite={guide.id === 1} 
          onFavoriteToggle={() => toggleFavorite(guide.id)}
        />
      ))}
    </div>
  );
}

describe("MiniGuide Page", () => {
  it("рендериться сторінка, показує гідів та реагує на клік зірки", () => {
    mount(
      <MemoryRouter>
        <TestMiniGuide />
      </MemoryRouter>
    );

    cy.contains("Міні-гід").should("exist");

    cy.contains("Гід Синевир").should("exist");
    cy.contains("Гід Шипіт").should("exist");

    cy.contains("Гід Синевир")
      .closest('[data-testid="mini-guide-card"]')
      .find('[data-testid="favorite-icon"]')
      .should("contain.text", "⭐");

    cy.contains("Гід Шипіт")
      .closest('[data-testid="mini-guide-card"]')
      .find('[data-testid="favorite-icon"]')
      .should("contain.text", "☆");

    cy.contains("Гід Синевир")
      .closest('[data-testid="mini-guide-card"]')
      .find('[data-testid="favorite-toggle"]')
      .click({ force: true });

    cy.get("@toggleFavorite").should("have.been.calledOnce");
    cy.get("@toggleFavorite").should("have.been.calledWith", 1);
  });
});
