/// <reference types="cypress" />
export class MyAccountElements {
    static elements = {
        myAccount: () => cy.get('[data-test="sidenav-user-settings"] > .MuiListItemText-root > .MuiTypography-root'),
        userSettings: () => cy.get('.MuiPaper-root > .MuiTypography-root'),
        firstName: () => cy.get('[data-test="user-settings-firstName-input"]'),
        lastName: () => cy.get('[data-test="user-settings-lastName-input"]'),
        email: () => cy.get('[data-test="user-settings-email-input"]'),
        phoneNumber: () => cy.get('[data-test="user-settings-phoneNumber-input"]'),
        save: () => cy.get('[data-test="user-settings-submit"] > .MuiButton-label'),
        userName:()=>cy.get('[data-test="sidenav-user-full-name"]')
    }
}