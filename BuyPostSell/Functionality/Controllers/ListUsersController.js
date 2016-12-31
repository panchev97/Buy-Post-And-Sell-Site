function listUsers() {
    $("#users").empty();
    listUsersModel(users).then(function (users) {
            let table = $(`
                            <table>
                            </table>
                    `);
            let tr = $('<tr>');
            for (let user of users) {
                let tr = $('<tr>');
                displayUserRow(tr, user);
                tr.appendTo(table);
            }
            tr.appendTo(table);
            $("#users").append(table);
        }
    );
    function displayUserRow(tr, user) {
        tr.append(
            $("<td>").text(user.username)
        );
    }
}