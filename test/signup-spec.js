'use strict';


describe('SignUp Web', function(){ 
    beforeEach(function() {
      //reload the page before each test
      browser.get('http://localhost:8000');
    });       

    it('should be invalid when password is empty', function(){
        var password = element(by.id('password'));
        password.sendKeys('');
        expect(password).getAttribute('class')).toMatch('ng-invalid');
    });

    it('should be invalid when passwords are not matching', function(){
        var password = element(by.id('password'));
        var confirmPassword = element(by.id('confirmPassword'));
        password.sendKeys('123');
        confirmPassword.sendKeys('1234');
        expect(password).getAttribute('class')).toMatch('ng-invalid');
    });

    it('should be valid when passwords are matching', function(){
        var password = element(by.id('password'));
        var confirmPassword = element(by.id('confirmPassword'));
        password.sendKeys('123');
        confirmPassword.sendKeys('123');
        expect(password).getAttribute('class')).toMatch('ng-valid');
    });

})