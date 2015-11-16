'use strict';


describe('SignUp Web', function(){
    beforeEach(function() {
      //reload the page before each test
      browser.get('http://localhost:8000');
    });   

    it ('should hide required-birthdate message when birthdate is not touched', function() {
        var birthreq = element(by.id('birthRequired'));
        expect(birthreq.isDisplayed()).toEqual(false);
    });


    it('should show required-birthdate message when birthdate is touched but left empty', function() {
        var birth = element(by.id('birthDate'));
        birth.sendKeys(' ');
        birth.clear();
        var birthreq = element(by.id('birthRequired'));
        expect(birthreq.isDisplayed()).toEqual(true);
    });

    it ('should show not-qualified message when user is less than 13 years old', function() {
        var birth = element(by.id('birthDate'));
        birth.sendKeys('1/1/2003');

        var birthqualified = element(by.id('birthSmall'));
        expect(birthqualified.isDisplayed()).toEqual(true);
    });

    it ('should hide not-qualified message when user is above 13 years old', function() {
        var birth = element(by.id('birthDate'));
        birth.sendKeys('1/1/2000');

        var birthqualified = element(by.id('birthSmall'));
        expect(birthqualified.isDisplayed()).toEqual(false);
    });

    it ('should empty each input box when clicked reset', function() {
        var reset = element(by.id('submitBtn'));

        var email = element(by.id('email'));
        var firstname = element(by.id('firstName'));
        var lastname = element(by.id('lastName'));
        var birthdate = element(by.id('birthDate'));
        var password = element(by.id('password'));
        var confirmpassword = element(by.id('confirmPassword'));

        email.sendKeys('wangz58@uw.edu');
        firstname.sendKeys('hey');
        lastname.sendKeys('w');
        birthdate.sendKeys('1/1/2000');
        password.sendKeys('1');
        confirmpassword.sendKeys('1');

        reset.click();

        expect(email.getText()).toEqual('');
        expect(firstname.getText()).toEqual('');
        expect(lastname.getText()).toEqual('');
        expect(birthdate.getText()).toEqual('');
        expect(password.getText()).toEqual('');
        expect(confirmpassword.getText()).toEqual('');
    });

    it ('should disable the submit button when form is invalid and enable it when form is valid', function() {
        var submit = element(by.id('submitBtn'));
        expect(submit.isEnabled()).toEqual(false);

        element(by.id('email')).sendKeys('wangz58@uw.edu');
        element(by.id('lastName')).sendKeys('w');
        element(by.id('birthDate')).sendKeys('1/1/2000');
        element(by.id('password')).sendKeys('1');
        element(by.id('confirmPassword')).sendKeys('1');
        expect(submit.isEnabled()).toEqual(true);
    });

    it ('should hide a message when user does not click submit', function() {
        var message = element(by.id('success'));
        expect(message.isDisplayed()).toEqual(false);
    });

    it ('should show a message when user clicked submit', function() {
        element(by.id('email')).sendKeys('wangz58@uw.edu');
        element(by.id('lastName')).sendKeys('w');
        element(by.id('birthDate')).sendKeys('1/1/2000');
        element(by.id('password')).sendKeys('1');
        element(by.id('confirmPassword')).sendKeys('1');
        var button = element(by.id('submitBtn'));
        button.click();

        var message = element(by.id('success'));
        expect(message.isDisplayed()).toEqual(true);
    });
})


