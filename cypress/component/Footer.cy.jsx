import React from 'react';
import { mount } from 'cypress/react';
import Footer from '../../Frontend/src/components/Footer';

describe('Footer component', () => {
  it('рендерить основний текст та контакти', () => {
    mount(<Footer />);

    cy.get('footer')
    .invoke('text')
    .should('contain', 'Ужгород')  
    .and('contain', '+380')       
});


  it('додає клас beige, якщо page="beige"', () => {
    mount(<Footer page="beige" />);

    cy.get('footer')
      .invoke('attr', 'class')
      .should('include', 'beige')  
      .and('include', 'footer');  
  });

  it('додає клас green, якщо page="green"', () => {
    mount(<Footer page="green" />);

    cy.get('footer')
      .invoke('attr', 'class')
      .should('include', 'green')
      .and('include', 'footer');
  });
});
