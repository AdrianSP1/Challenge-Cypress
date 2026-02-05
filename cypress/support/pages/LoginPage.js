export class loginPage {
    constructor () {
        this.usernameInput = '#user-name';
        this.passwordInput = '#password';
        this.loginButton = '#login-button';
        this.errorMessage = '[data-test="error"]';
    }
    visitarpagina() {
        cy.visit('https://www.saucedemo.com/')
    }

    doLogin(){
        cy.get(this.usernameInput).type('standard_user');
        cy.get(this.passwordInput).type('secret_sauce');
        cy.get(this.loginButton).click();
    }

    ValidarLoginExitoso(){
        cy.url().should('include', '/inventory.html');
    }

    doErrorLogin(){
        cy.get(this.usernameInput).type('user3425');
        cy.get(this.passwordInput).type('pass34535');
        cy.get(this.loginButton).click();
    }

    verificarMensajeError(){
        cy.get(this.errorMessage).should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service');
    }

    doLoginComplete(){
        cy.visit('https://www.saucedemo.com/')
        cy.get(this.usernameInput).type('standard_user');
        cy.get(this.passwordInput).type('secret_sauce');
        cy.get(this.loginButton).click();
    }}