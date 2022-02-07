/// <reference types="cypress" />
import { SenMoneyElements } from "../pagelements/SendMoneyElement";
export class SendMoney{
    clickNew(){
        SenMoneyElements.elements.newMoney().click();
    }
    selectUser(){
        SenMoneyElements.elements.userOne().click();
    }
    enterAmmout(amount: string){
        SenMoneyElements.elements.ammount().clear().type(amount);
    }
    addNote(note: string){
        SenMoneyElements.elements.note().clear().type(note);
    }
    verifyPayMoneyVisibility(){
        SenMoneyElements.elements.pay().should('be.visible');
    }
    verifyRequestVisibility(){
        SenMoneyElements.elements.request().should('be.visible');
    }
    payMoney(){
        SenMoneyElements.elements.pay().click();
    }
    requestMoney(){
        SenMoneyElements.elements.request().click();
    }
}