import React from 'react';
import FilterLocation from '../../Frontend/src/components/FilterLocation';

describe('FilterLocation Component', () => {

  it('рендерить кнопку з текстом "Всі типи"', () => {
    const mockChange = cy.stub().as('onFilterChange');

    cy.mount(<FilterLocation onFilterChange={mockChange} />);

    cy.contains('button', 'Всі типи').should('exist');
  });

  it('відкриває dropdown при кліку', () => {
    const mockChange = cy.stub().as('onFilterChange');

    cy.mount(<FilterLocation onFilterChange={mockChange} />);

    cy.get('button').click(); 
    cy.get('ul li').should('have.length', 7); 
  });

  it('вибирає "Гори" і передає type=mountains', () => {
    const mockChange = cy.stub().as('onFilterChange');

    cy.mount(<FilterLocation onFilterChange={mockChange} />);

    cy.get('button').click();
    cy.contains('li', 'Гори').click();

    cy.get('@onFilterChange').should('have.been.calledWith', {
      type: 'mountains',
    });

    cy.contains('button', 'Гори').should('exist'); 
  });

  it('вибирає "Всі" і передає type=all', () => {
    const mockChange = cy.stub().as('onFilterChange');

    cy.mount(<FilterLocation onFilterChange={mockChange} />);

    cy.get('button').click();
    cy.contains('li', 'Всі').click();

    cy.get('@onFilterChange').should('have.been.calledWith', {
      type: 'all',
    });

    cy.contains('button', 'Всі типи').should('exist');
  });

  it('закриває dropdown після вибору', () => {
    const mockChange = cy.stub().as('onFilterChange');

    cy.mount(<FilterLocation onFilterChange={mockChange} />);

    cy.get('button').click();
    cy.contains('li', 'Гори').click();

    cy.get('ul').should('not.exist');
  });

});
