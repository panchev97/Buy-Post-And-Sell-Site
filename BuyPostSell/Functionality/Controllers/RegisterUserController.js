function registerUser(e) {
    e.preventDefault();
    let userData = {
        username: $("#username").val(),
        password: $("#password").val(),
    };

    let userConfirmPassword = {
        confirmPassword: $("#password_confirmation").val()
    };

    let userNames = {
        firstName: $("#first_name").val(),
        lastName: $("#last_name").val()
    };

    if (userData.username.length >= 3 && userData.username.length <= 10
        && userData.password == userConfirmPassword.confirmPassword
        && userNames.firstName.length > 0 && userNames.lastName.length > 0) {
        registerUserModel(userData).then(function (userInfo) {
            saveAuthInSession(userInfo);
            showInfo('User registration successful.');
            $(location).attr('href', 'Items.html');
        });
    } else {
        showError('Oops.. Please Check If You Obey All The Rules');
    }
}