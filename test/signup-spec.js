'use strict';


describe('SignUp Web', function(){ 
    beforeEach(function() {
      //reload the page before each test
      browser.get('http://localhost:8000');
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

