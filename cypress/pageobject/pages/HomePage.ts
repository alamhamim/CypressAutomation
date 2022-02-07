/// <reference types="cypress" />
import { HomePageElement } from "../pagelements/HomePageElement";
export class HomePage{
    checkTheBalance(givenNumber: number){
        HomePageElement.elements.balance().invoke('text').then((getBallance) =>{
            let removeDollarSign: string = getBallance.replace('$', '');
            let removeComa: string = removeDollarSign.replace(',', '');
            let actualValue: number = parseFloat(removeComa);
            if (actualValue < givenNumber) {
                cy.log('Verified');
            } else {
                cy.log('Not Verified');
            }
        })
    }
}