function startApplication() {

    showHideMenuLinks();

    //Bind The Form Submit Buttons
    $(document).ready(function () {
        $("#btnRegister").on('click', registerUser);
    });

    $(document).ready(function () {
        $("#btn-login").on('click', loginUser);
    });

    $("#logout").click(logoutUser);

    $(document).ready(function () {
        $("#btn-show-users").on('click', listUsers);
    });
    $(document).ready(function () {
        $("#btn-hide-users").on('click', hideUserList);
    });

    $(document).ready(function () {
        $("#buttonCreateItem").on('click', createItem);
    });

    function showHideMenuLinks() {

        if (sessionStorage.getItem('authToken')) {
            // We have logged in user
            $("#homepageLink").hide();
            $("#registrationLink").hide();
            $("#usersLink").show();
            $("#logout").show();
            $("#itemsLink").show();
            $("#loginLink").hide();
            $("#createAd").show();

        } else {

            $("#homepageLink").show();
            $("#registrationLink").show();
            $("#usersLink").hide();
            $("#logout").hide();
            $("#itemsLink").hide();
            $("#loginLink").show();
            $("#createAd").hide();
        }
    }

    //Bind the info / error boxes: hide on click
    $("#infoBox, #errorBox").click(function () {
        $(this).fadeOut();
    });
    loadingBox();
}
