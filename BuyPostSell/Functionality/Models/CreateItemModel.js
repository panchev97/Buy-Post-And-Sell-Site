function createItemModel(itemData) {
    return $.ajax({
        method: "POST",
        url: kinveyBaseUrl + "appdata/" + kinveyAppKey + "/items",
        headers: getKinveyUserAuthHeaders(),
        data: itemData,
        error: handleAjaxError
    });
}