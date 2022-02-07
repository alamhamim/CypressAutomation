/// <reference types="cypress" />
import _ from "cypress/types/lodash";
import { LoginPage } from "../pageobject/pages/LoginPage";
import{HomePage} from "../pageobject/pages/HomePage";
import{MyAccount} from "../pageobject/pages/MyAccount";
const login = new LoginPage();

before(() => {
    cy.visit('/');
    login.enterUserName();
    login.enterPassWord();
    login.clickOnLoginButton();
});
describe('Account Balance Check', () => {
    const home = new HomePage();
    it('Check Balance', () => {
        home.checkTheBalance(1000);
    });
});
describe('My account User Settings', () => {
    const account = new MyAccount();
    it('Click on My account', () => {
        account.clickOnMyAccount();
    });
    it('Verify My account', () => {
        account.verifyTheUserSetting();
    });
    it('create users settings', () => {
        account.typeUserFirstName('Hamim');
        account.typeUserLastName('Alam');
        account.typeUserEmailAddress('dummy@email.com');
        account.typeUserPhoneNumber('1234567890');
        account.saveTheUserSettings();
    });
    it('Verify the changed user', () => {
        account.verifyTheUserNameAfterChange();
    });
});