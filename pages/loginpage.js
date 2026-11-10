import { Base } from './basepage.js'; // Ensure filename matches your base class file (e.g., base.js or basepage.js)

export class LoginPage extends Base {
    constructor(page) {
        super(page);
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async login(username, password) {
        await this.openurl();
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }
}