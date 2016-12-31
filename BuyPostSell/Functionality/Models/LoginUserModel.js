function loginUserModel(userData) {
    return $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + '/login',
        headers: kinveyAppAuthHeaders,
        data: userData,
        error: handleAjaxError
    });
}