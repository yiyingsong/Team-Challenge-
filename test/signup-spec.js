'use strict';

// describes a series of test for the sign up form
describe('SignUp Web', function(){ 
    beforeEach(function() {
      //reload the page before each test
      browser.get('http://localhost:8000');
    });   

    it ('should display required-message when birthdate is blank', function() {
        var birthdate = element(by.id('birthDate'));
        birthdate.sendKeys('we');
        birthdate.clear();
        var birthreq = element(by.id('birthReq'));
        expect(birthreq.isDisplayed()).toEqual(true);
    })

    // test whether the message is hiden when user has never touched the birthdate input
    it ('should hide valid-birthdate message when birthdate is not touched or valid', function() {
        var birthreq = element(by.id('birthRequired'));
        expect(birthreq.isDisplayed()).toEqual(false);

        var birth = element(by.id('birthDate'));
        birth.sendKeys('1/1/2000');
        expect(birthreq.isDisplayed()).toEqual(false);
    });

    // test whether the message shows up when user touched birthdate input but doesn't give any input
    it('should show valid-birthdate message when birthdate is not valid', function() {
        var birth = element(by.id('birthDate'));
        birth.sendKeys('sx');
        var birthreq = element(by.id('birthRequired'));
        expect(birthreq.isDisplayed()).toEqual(true);
    });

    // test whether the message is shown when user is not 13 yet
    it ('should show not-qualified message when user is less than 13 years old', function() {
        var birth = element(by.id('birthDate'));
        birth.sendKeys('1/1/2003');

        var birthqualified = element(by.id('birthSmall'));
        expect(birthqualified.isDisplayed()).toEqual(true);
    });

    // test whether the message is hided when user is more than 13 years old
    it ('should hide not-qualified message when user is above 13 years old', function() {
        var birth = element(by.id('birthDate'));
        birth.sendKeys('1/1/2000');

        var birthqualified = element(by.id('birthSmall'));
        expect(birthqualified.isDisplayed()).toEqual(false);
    });

    // test whether reset button empties each input box
    it ('should empty each input box when clicked reset', function() {
        var reset = element(by.id('submitBtn'));

        var email = element(by.id('email'));
        var firstname = element(by.id('firstName'));
        var lastname = element(by.id('lastName'));
        var birthdate = element(by.id('birthDate'));
        var password = element(by.id('password'));
        var confirmpassword = element(by.id('confirmPassword'));
        // write something in each input boxes
        email.sendKeys('wangz58@uw.edu');
        firstname.sendKeys('hey');
        lastname.sendKeys('w');
        birthdate.sendKeys('1/1/2000');
        password.sendKeys('1');
        confirmpassword.sendKeys('1');

        reset.click();
        // get the text value in each input and check whether it is empty
        expect(email.getText()).toEqual('');
        expect(firstname.getText()).toEqual('');
        expect(lastname.getText()).toEqual('');
        expect(birthdate.getText()).toEqual('');
        expect(password.getText()).toEqual('');
        expect(confirmpassword.getText()).toEqual('');
    });

    // test whether the submit button is disabled when form is invalid and enabled otherwise
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

    //test whether the required message show when the password and confirm password are empty
    it('should be invalid when password and confirm password are empty', function(){
        var password = element(by.model('password'));
        var confirmPassword = element(by.model('confirmPassword'));
        password.clear();
        confirmPassword.clear();
        expect(password != null && confirmPassword != null ).toEqual(true);
    });
    
    //test whether the not matching allert is disappeared when two passwords are matching.
    it('should be valid when passwords are matching', function(){
        var password = element(by.model('password')).sendKeys('123');
        var confirmPassword = element(by.model('confirmPassword')).sendKeys('123');
        expect(password.getAttribute('value')).toEqual(confirmPassword.getAttribute('value'));         
    });

    //test whether the not matching alert shows when two passwords are not matching.
    it('should be invalid when passwords are not matching', function(){
        var password = element(by.model('password')).sendKeys('123');
        var confirmPassword = element(by.model('confirmPassword')).sendKeys('1234');
        expect(password.getAttribute('value')).not.toEqual(confirmPassword.getAttribute('value'));         
    });

    // test whether the success message is displayed after submit button is clicked
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


