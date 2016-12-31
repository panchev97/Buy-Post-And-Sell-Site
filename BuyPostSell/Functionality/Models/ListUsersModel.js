function listUsersModel(users) {
    return $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "user/" + kinveyAppKey + "/",
        headers: getKinveyUserAuthHeaders(),
        error: handleAjaxError
    });
}