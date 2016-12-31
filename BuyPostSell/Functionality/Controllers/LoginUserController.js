function loginUser(event) {
    event.preventDefault();
    let userData = {
        username: $("#usernameLogin").val(),
        password: $("#passwordLogin").val(),
    };
    loginUserModel(userData).then(function (userInfo) {
        saveAuthInSession(userInfo);
        $(location).attr('href', 'Items.html');
        showInfo('Login successful.');
    })
}
function saveAuthInSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    sessionStorage.setItem('authToken', userAuth);
    let userId = userInfo._id;
    sessionStorage.setItem('userId', userId);
}
function getKinveyUserAuthHeaders() {
    return {
        'Authorization': "Kinvey " +
        sessionStorage.getItem('authToken'),
    };
}