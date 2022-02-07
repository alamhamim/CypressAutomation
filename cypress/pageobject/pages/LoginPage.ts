/// <reference types="cypress" />
import { LoginPageElement } from "../pagelements/LoginPageElement";
export class LoginPage{
    enterUserName(){
        LoginPageElement.elements.username().type('Katharina_Bernier');
    }
    enterPassWord(){
        LoginPageElement.elements.password().type('s3cret');
    }
    clickOnLoginButton(){
        LoginPageElement.elements.loginButton().click();
    }
    logoutFromApp(){
        LoginPageElement.elements.logout().click();
    }
}