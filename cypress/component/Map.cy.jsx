import React from "react";
import Map from "../../Frontend/src/components/Map";

describe("Map Component", () => {
  it("рендерить SVG з заданими width і height", () => {
    cy.mount(<Map width={600} height={400} />);
    cy.get("svg").should("have.attr", "width", "600");
    cy.get("svg").should("have.attr", "height", "400");
  });

  it("має фон та полігони", () => {
    cy.mount(<Map />);
    cy.get("rect").should("exist");
    cy.get("path").its("length").should("be.gt", 0); 
  });

  it("рендерить точки міст та їх текст", () => {
    const cities = [
      { id: 1, name: "Канків", lat: 48.14, lng: 23.05 },
      { id: 2, name: "Косино", lat: 48.33, lng: 22.69 },
    ];
    cy.mount(<Map cities={cities} />);
    cy.get("circle").should("have.length", cities.length);
    cities.forEach((c) => {
      cy.contains(c.name).should("exist");
    });
  });

  it("викликає onCityClick при кліку на місто", () => {
    const onCityClick = cy.stub().as("onCityClick");
    cy.mount(<Map onCityClick={onCityClick} />);
    cy.get("circle").first().click();
    cy.get("@onCityClick").should("have.been.calledOnce");
  });
});
