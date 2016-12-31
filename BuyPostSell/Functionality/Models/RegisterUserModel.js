function registerUserModel(userData) {
    return $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
        headers: kinveyAppAuthHeaders,
        data: JSON.stringify(userData),
        error: handleAjaxError
    });
}