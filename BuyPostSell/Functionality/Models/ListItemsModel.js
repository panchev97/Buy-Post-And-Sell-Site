function listItemsModel(items) {
    return $.ajax({
        method: "GET",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/items",
        headers: getKinveyUserAuthHeaders(),
        error: handleAjaxError
    });
}