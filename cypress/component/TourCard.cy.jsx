import React from "react";
import { mount } from "cypress/react";
import TourCard from "../../Frontend/src/components/TourCard.jsx";

describe("TourCard component", () => {
  const baseProps = {
    image: "tour.jpg",
    title: "Тур тест",
    description: "Опис туру",
    onClick: () => {},
  };

  it("рендерить основну інформацію", () => {
    mount(<TourCard {...baseProps} />);

    cy.contains("Тур тест").should("exist");
    cy.contains("Опис туру").should("exist");

    cy.get("img")
      .should("have.attr", "src", "tour.jpg")
      .and("have.attr", "alt", "Тур тест");
  });

  it("викликає onClick при кліку на карту", () => {
    const clickStub = cy.stub().as("onClick");

    mount(<TourCard {...baseProps} onClick={clickStub} />);

    cy.get("button").click();

    cy.get("@onClick").should("have.been.calledOnce");
  });
});
