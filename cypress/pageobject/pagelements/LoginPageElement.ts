/// <reference types="cypress" />
export class LoginPageElement{
   static elements = {
        username : () => cy.get('#username'),
        password : () => cy.get('#password'),
        loginButton: () => cy.get('.MuiButton-label'),
        logout: () => cy.get('div.makeStyles-root-1 div.MuiDrawer-root.MuiDrawer-docked div.MuiPaper-root.MuiDrawer-paper.makeStyles-drawerPaper-35.MuiDrawer-paperAnchorLeft.MuiDrawer-paperAnchorDockedLeft.MuiPaper-elevation0 div.MuiGrid-root.makeStyles-userProfile-37.MuiGrid-container.MuiGrid-align-items-xs-center.MuiGrid-justify-content-xs-space-between:nth-child(2) div.MuiGrid-root.MuiGrid-item:nth-child(5) ul.MuiList-root.MuiList-padding div:nth-child(1) div.MuiButtonBase-root.MuiListItem-root.MuiListItem-gutters.MuiListItem-button div.MuiListItemText-root > span.MuiTypography-root.MuiListItemText-primary.MuiTypography-body1.MuiTypography-displayBlock')
    }
}
