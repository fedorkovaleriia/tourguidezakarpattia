import React from "react";
import { mount } from "cypress/react";
import { MemoryRouter } from "react-router-dom";
import LocationCard from "../../Frontend/src/components/LocationCard";

function TestLocationDirectory() {
  const locations = [
    {
      id: 1,
      title: "Синевир",
      description: "Опис Синевиру",
      rating: 4.8,
      visits: 150,
      image: ""
    },
    {
      id: 2,
      title: "Шипіт",
      description: "Опис Шипіту",
      rating: 4.5,
      visits: 120,
      image: ""
    }
  ];

  const toggleFavorite = cy.stub().as("toggleFavorite");

  return (
    <div>
      <h1>Каталог локацій</h1>

      {locations.map(loc => (
        <LocationCard
          key={loc.id}
          image={loc.image}
          title={loc.title}
          description={loc.description}
          rating={loc.rating}
          visits={loc.visits}
          isFavorite={loc.id === 1} 
          onFavoriteToggle={() => toggleFavorite(loc.id)}
        />
      ))}
    </div>
  );
}

describe("LocationDirectory Page", () => {
  it("повністю рендериться та реагує на клік зірки", () => {
    mount(
      <MemoryRouter>
        <TestLocationDirectory />
      </MemoryRouter>
    );

    cy.contains("Каталог локацій").should("exist");

    cy.contains("Синевир").should("exist");
    cy.contains("Шипіт").should("exist");

    cy.get('[data-testid="location-card"]').should("have.length", 2);

    cy.contains("Синевир")
      .closest('[data-testid="location-card"]')
      .find('[data-testid="favorite-icon"]')
      .should("contain.text", "⭐");

    cy.contains("Шипіт")
      .closest('[data-testid="location-card"]')
      .find('[data-testid="favorite-icon"]')
      .should("contain.text", "☆");

    cy.contains("Синевир")
      .closest('[data-testid="location-card"]')
      .find('[data-testid="favorite-toggle"]')
      .click({ force: true });

    cy.get("@toggleFavorite").should("have.been.calledOnce");
    cy.get("@toggleFavorite").should("have.been.calledWith", 1);
  });
});
