/// <reference types="cypress" />
import { LoginPageElement } from "../pagelements/LoginPageElement";
export class LoginPage{
    logoutFromApp(){
        LoginPageElement.elements.logout().click();
    }
    loginToApp(){
        cy.visit('/');
        LoginPageElement.elements.username().type('Katharina_Bernier');
        LoginPageElement.elements.password().type('s3cret');
        LoginPageElement.elements.loginButton().click();
    }
}