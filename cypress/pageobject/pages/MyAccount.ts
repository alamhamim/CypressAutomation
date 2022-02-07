/// <reference types="cypress" />
import { MyAccountElements } from "../pagelements/MyAccountElement";
export class MyAccount{
    clickOnMyAccount(){
        MyAccountElements.elements.myAccount().click();
    }
    verifyTheUserSetting(){
        MyAccountElements.elements.userSettings().should('be.visible');
    }
    typeUserFirstName(firstName: string){
        MyAccountElements.elements.firstName().clear().type(firstName);
    }
    typeUserLastName(lastName: string){
        MyAccountElements.elements.lastName().clear().type(lastName);
    }
    typeUserEmailAddress(email: string){
        MyAccountElements.elements.email().clear().type(email);
    }
    typeUserPhoneNumber(phoneNum: string){
        MyAccountElements.elements.phoneNumber().clear().type(phoneNum);
    }
    saveTheUserSettings(){
        MyAccountElements.elements.save().click();
    }
    verifyTheUserNameAfterChange(){
        MyAccountElements.elements.userName().invoke('text').then((actualText) =>{
            expect(actualText).to.eq('Hamim A');
        })
    }
}