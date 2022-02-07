/// <reference types="cypress" />
export class CommnetElements{
    static elements = {
        userOne: () => cy.get('[data-test="transaction-item-183VHWyuQMS"] > .MuiPaper-root > :nth-child(1) > .MuiGrid-grid-xs-12 > .MuiGrid-spacing-xs-2 > .MuiGrid-grid-xs-true'),
        commentBox: () => cy.get('[data-test="transaction-comment-input-183VHWyuQMS"]')
    }
}