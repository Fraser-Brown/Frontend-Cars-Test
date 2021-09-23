/// <reference types="cypress" />

function createCar(make, model, year, colour){
    cy.get('#entryMake').clear().type(make);
    cy.get('#entryModel').clear().type(model);
    cy.get('#entryYear').clear().type(year);
    cy.get('#entryColour').clear().type(colour);

    cy.get('#submitButton').click();
}

describe('example to-do app', () => {
    it('Can add a car to the table', () => {
      cy.visit('http://localhost:8080/')
      createCar('testMake', 'testModel', '2000', 'red')

      cy.get('tbody').within( () => {
          cy.get('tr').contains('testMake')
          cy.get('tr').contains('testModel')
          cy.get('tr').contains('2000')
          cy.get('tr').contains('red')
      })
    })

    it('Can edit a car', () => {
        cy.get('tbody').within( () => {
            cy.get('button').eq(0).click()
        })

        cy.get('#makeField').clear().type('editMake');
        cy.get('#modelField').clear().type('editModel');
        cy.get('#yearField').clear().type('2001');
        cy.get('#colourField').clear().type('blue');
  
        cy.get('#editSubmit').click();
        cy.get('tbody').within( () => {
            cy.get('tr').contains('editMake')
            cy.get('tr').contains('editModel')
            cy.get('tr').contains('2001')
            cy.get('tr').contains('blue')
        })
      })
    
      it('Can delete a car', () => {
        cy.get('tbody').within( () => {
            cy.get('button').eq(1).click()
        })
        cy.get('tbody').within( () => {
            cy.get('tr').contains('No data available')
        })
      })

      it('Can filter with search terms', () => {
        createCar('alpha', 'a', '2000', 'red')
        createCar('bravo', 'b', '2001', 'red')
        createCar('charlie', 'c', '2002', 'red')
        createCar('delta', 'd', '2003', 'red')
        createCar('echo', 'e', '2004', 'red')
  
        cy.get('tbody').within( () => {
            cy.get('tr').eq(0).contains('alpha')
        })

        cy.get('#searchBar').type('bravo')
        cy.get('tbody').within( () => {
            cy.get('tr').contains('bravo')
        })
      })
})
  