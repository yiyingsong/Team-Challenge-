'use strict';


describe('SignUp Web', function(){ 
    beforeEach(function() {
      //reload the page before each test
      browser.get('http://localhost:8000');
    });   

    it("should show that email is invalid message if the e-mail is not in corret form", function() {
        var email = element(by.model("email"));
        email.sendKeys('@gmail.com');
        expect((email, 'ng-invalid').toEqual(true));
        email.sendKeys('sophie');
        expect((email, 'ng-invalid').toEqual(true));
    });

    it("should show that email is required message if the email field is touched but left blank", function() {
        var email = element(by.model('email'));
        email.sendKeys('');
        expect((email, 'ng-invalid').toEqual(true));
    });

    it("should hide error messages if the email is valid", function() {
        var email = element(by.model('email'));
        email.sendKeys('ys46@uw.edu');
        expect((email, 'ng-invalid').toEqual(false));
    });

    it("should show last name is required message if the field is touched but left blank", function() {
        var lastName = element(by.model('lastName'));
        lastName.sendKeys('');
        expect((lastName, 'ng-invalid').toEqual(true));
    });

    it("should hide error message if there is content in the field", function() {
        var lastName = element(by.model("lastName"));
        lastName.sendKeys('song');
        expect((lastName, 'ng-invalid').toEqual(false));
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

