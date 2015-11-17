'use strict';

// describes a series of test for the sign up form
describe('SignUp Web', function(){ 
    beforeEach(function() {
      //reload the page before each test
      browser.get('http://localhost:8000');
    });   

    // test if the page displays invalid email message if the email is invalid
    it("should show that email is invalid message if the e-mail is not in corret form", function() {
        // set the email user put in to email and error message to invalidEmail 
        var email = element(by.model("email.text"));
        var invalidEmail = element(by.model('invalidEmail'));
        // type "@gmail.com" and "sophie" into email and test if it meets expectations
        email.sendKeys('@gmail.com');
        expect(invalidEmail.isDisplayed() ).toEqual(true);        
        email.sendKeys('sophie');
        expect(invalidEmail.isDisplayed() ).toEqual(true);
    });

    // test if the page displays email nedded massage if the email is touchd but left empty
    it("should show that email is required message if the email field is touched but left blank", function() {
        // set the email user put in to email and error message to noEmail
        var email = element(by.model("email.text"));
        var noEmail = element(by.model('noEmail'));
        // type "email" to eamil field and clear it, then test if it meets the expectation
        email.sendKeys('email');
        email.clear();
        expect(noEmail.isDisplayed() ).toEqual(true);
        email.sendKeys('');
        expect(noEmail.isDisplayed() ).toEqual(true);
    });

    // test if the error messages are hidden if the email is valid
    it("should hide error messages if the email is valid", function() {
        // set the email user put in to email and error message to invalidEmail and noEmail
        var email = element(by.model("email.text"));
        var invalidEmail = element(by.model('invalidEmail'));
        var noEmail = element(by.model('noEmail'));
        // type in a valid email to test if it meets the expectation
        email.sendKeys('ys46@uw.edu');
        expect(invalidEmail.isDisplayed() ).toEqual(false);
        expect(noEmail.isDisplayed() ).toEqual(false);
    });

    // test if the page displays last name required message if the last name is touched but left blank
    it("should show last name is required message if the field is touched but left blank", function() {
        // set lastName to the last name user put in and set the error message to noLastName
        var lastName = element(by.model("lastName"));
        var noLastName = element(by.model("noLastName"))
        // type in a name and clear it, and then test if it meets the expectation
        lastName.sendKeys('song');
        lastName.clear();
        expect(noLastName.isDisplayed() ).toEqual(true);
        lastName.sendKeys('');
        expect(noLastName.isDisplayed() ).toEqual(true);
    });

    // test if the error message is hidden if the last name is filled
    it("should hide error message if there is content in the field", function() {
        // set lastName to the last name user put in and set the error message to noLastName
        var lastName = element(by.model("lastName"));
        var noLastName = element(by.model("noLastName"))
        // type in a name and then test if it meets with the expectations
        lastName.sendKeys('song');
        expect(noLastName.isDisplayed() ).toEqual(false);
    });   

    it('should be invalid when password and confirm password are empty', function(){
        var password = element(by.model('password'));
        var confirmPassword = element(by.model('confirmPassword'));
        password.clear();
        confirmPassword.clear();
        expect(password != null && confirmPassword != null ).toEqual(true);
    });
    
    it('should be valid when passwords are matching', function(){
        var password = element(by.model('password')).sendKeys('123');
        var confirmPassword = element(by.model('confirmPassword')).sendKeys('123');
        expect(password.getAttribute('value')).toEqual(confirmPassword.getAttribute('value'));         
    });

    it('should be invalid when passwords are not matching', function(){
        var password = element(by.model('password')).sendKeys('123');
        var confirmPassword = element(by.model('confirmPassword')).sendKeys('1234');
        expect(password.getAttribute('value')).not.toEqual(confirmPassword.getAttribute('value'));         
    });

})
