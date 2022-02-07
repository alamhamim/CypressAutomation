/// <reference types="cypress" />
import _ from "cypress/types/lodash";
import { LoginPage } from "../pageobject/pages/LoginPage";
import { HomePage } from "../pageobject/pages/HomePage";
import { MyAccount } from "../pageobject/pages/MyAccount";
import { SendMoney } from "../pageobject/pages/SendMoney";
import { UserComment } from "../pageobject/pages/UserComment";
const login = new LoginPage();

describe('Account Balance Check', () => {
    before(() => {
        login.loginToApp();
    });
    const home = new HomePage();
    it('Check Balance', () => {
        home.checkTheBalance(1000);
    });
});
describe('My account User Settings', () => {
    before(() => {
        login.loginToApp();
    });
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
    });
});
describe('Send Money', () => {
    const pay = new SendMoney();
    before(() => {
        login.loginToApp();
    });
    it('click new', () => {
        pay.clickNew();
    });
    it('Select user', () => {
        pay.selectUser();
    });
    it('Enter the ammount and add note', () => {
        pay.enterAmmout('1000');
        pay.addNote('rent');
    });
    it('Check pay visibility', () => {
        pay.verifyPayMoneyVisibility();
    });
    it('Check is the request visible', () => {
        pay.verifyRequestVisibility();
    });
});
describe('Comment on user status', () => {
   const user = new UserComment();
    before(() => {
        login.loginToApp();
    });
    it('click on user', () => {
        user.clickOnUser();
    });
    it('type on comment box', () => {
        user.typeComment();
    });
});
