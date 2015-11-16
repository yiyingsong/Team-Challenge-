'use strict';


describe('SignUp Web', function(){
    beforeEach(function() {
      //reload the page before each test
      browser.get('http://localhost:8000');
    });   

    it("should show that email is invalid message if the e-mail is not in corret form", function() {
        var email = element(by.model("email"));
        email.sendKeys('@gmail.com');
        expect(email, 'ng-invalid').toEqual(true);
        email.sendKeys('sophie');
        expect(email, 'ng-invalid').toEqual(true);
    });

    it("should show that email is required message if the email field is touched but left blank", function() {
        var email = element(by.model('email'));
        email.sendKeys('');
        expect(email, 'ng-invalid').toEqual(true);
    });

    it("should hide error messages if the email is valid", function() {
        var email = element(by.model('email'));
        email.sendKeys('ys46@uw.edu');
        expect(email, 'ng-invalid').toEqual(false);
    });

    it("should show last name is required message if the field is touched but left blank", function() {
        var lastName = element(by.model('lastName'));
        lastName.sendKeys('');
        expect(lastName, 'ng-invalid').toEqual(true);
    });

    it("should hide error message if there is content in the field", function() {
        var lastName = element(by.model("lastName"));
        lastName.sendKeys('song');
        expect(lastName, 'ng-invalid').toEqual(false);
    });    

    it ('should hide required-birthdate message when birthdate is not touched', function() {
        var birthDate = element(by.model('birthdate'));
        expect(birthDate, 'ng-show').toEqual(false);
    });

    it('should show required-birthdate message when birthdate is touch but left empty', function() {
        var birthDate = element(by.model('birthRequired'));
        birthDate.sendKeys('');
        expect(birthDate, 'ng-show').toEqual(true);
    });

    it ('should show not-qualified message when user is less than 13 years old', function() {
        var birthDate = element(by.model('birthSmall'));
        birthDate.sendKeys('1/1/2003');
        expect(birthDate, 'ng-show').toEqual(true);
    });

    it ('should hide not-qualified message when user is above 13 years old', function() {
        var birthDate = element(by.model('birthdate'));
        birthDate.sendKeys('1/1/2000');
        expect(birthDate, 'ng-show').toEqual(false);
    });

    it('should be invalid when password is empty', function(){
        var password = element(by.id('password'));
        password.sendKeys('');
        expect(password).getAttribute('class').toMatch('ng-invalid');
    });

    it('should be invalid when passwords are not matching', function(){
        var password = element(by.id('password'));
        var confirmPassword = element(by.id('confirmPassword'));
        password.sendKeys('123');
        confirmPassword.sendKeys('1234');
        expect(password).getAttribute('class').toMatch('ng-invalid');
    });

    it('should be valid when passwords are matching', function(){
        var password = element(by.id('password'));
        var confirmPassword = element(by.id('confirmPassword'));
        password.sendKeys('123');
        confirmPassword.sendKeys('123');
        expect(password).getAttribute('class').toMatch('ng-valid');
    });

    it ('should empty each input box when clicked reset', function() {
        var reset = element(by.id('submitBtn'));
        reset.click();

        var email = element(by.id('email'));
        var firstname = element(by.id('firstName'));
        var lastname = element(by.id('lastName'));
        var birthdate = element(by.id('birthDate'));
        var password = element(by.id('password'));
        var confirmpassword = element(by.id('confirmPassword'));

        expect(email.getText()).toEqual('');
        expect(firstname.getText()).toEqual('');
        expect(lastname.getText()).toEqual('');
        expect(birthDate.getText()).toEqual('');
        expect(password.getText()).toEqual('');
        expect(confirmpassword.getText()).toEqual('');
    });

    it ('should show a message when user clicked submit', function() {
        var button = element(by.id('submitBtn'));

        var message = element(by.id('success'));
        expect(message).not.isPresent();
    });

    it ('should show a message when user clicked submit', function() {
        var button = element(by.id('submitBtn'));
        button.click();

        var message = element(by.id('success'));
        expect(message).isPresent();
    });

})


