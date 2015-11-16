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