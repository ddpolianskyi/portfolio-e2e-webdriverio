class LoginPage {
    get usernameField(){ return $('#user-name') };
    get passwordField(){ return $('#password') };
    get loginButton(){ return $('#login-button') };
    get errorMessage(){ return $('[data-test="error"]') };

    async enterUsername(username){
        await this.usernameField.addValue(username);
        await expect(this.usernameField).toHaveValue(username);
    };
    async enterPassword(password){
        await this.passwordField.addValue(password);
        await expect(this.passwordField).toHaveValue(password);
    };
    async checkError(errorName){
        await expect(this.errorMessage).toBeDisplayed();
        await expect(this.errorMessage).toHaveText(errorName);
    };
};

module.exports = new LoginPage();