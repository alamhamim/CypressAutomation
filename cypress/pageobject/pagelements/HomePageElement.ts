/// <reference types="cypress" />
export class HomePageElement{
    static elements = {
        balance: () => cy.get('[data-test="sidenav-user-balance"]')
    }
}