/**
 * Created by edrisse on 9/6/17.
 */

const LoginPage = require('../pages/LoginPage');

describe('test login', () => {
    it('should login successfully with a valid user', () => {
        const loginPage = new LoginPage();
        loginPage.visit();
        var homeDashboard = loginPage.login('admin', 'eSaude123');

        expect(loginPage.isErrorMessagePresent()).toBe(false);
        expect(homeDashboard.homeLinkIsPresent()).toBe(true);
    });

    it('should not login with invalid user', () => {
        const loginPage = new LoginPage();
        loginPage.visit();
        loginPage.login('admin2', 'eSaude123');

        expect(loginPage.isErrorMessagePresent()).toBe(true);
        expect(loginPage.getErrorMessage()).toBe('Authentication failed. Please try again');
    });

    it('should not login with invalid password', () => {
        const loginPage = new LoginPage();
        loginPage.visit();
        loginPage.login('admin', 'senhaErrada');

        expect(loginPage.isErrorMessagePresent()).toBe(true);
        expect(loginPage.getErrorMessage()).toBe('Authentication failed. Please try again');
    });
});
