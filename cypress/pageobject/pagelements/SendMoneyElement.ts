/// <reference types="cypress" />
export class SenMoneyElements {
   static elements = {
        newMoney: () => cy.get('[data-test="nav-top-new-transaction"] > .MuiButton-label'),
        userOne: () => cy.get('[data-test="user-list-item-qywYp6hS0U"] > .MuiListItemText-root > .MuiListItemText-primary'),
        ammount: () => cy.get('#amount'),
        note: () => cy.get('#transaction-create-description-input'),
        pay: () => cy.get('[data-test="transaction-create-submit-payment"]'),
        request: () => cy.get('[data-test="transaction-create-submit-request"] > .MuiButton-label')
    }
}