function listItems() {
    $('#items').empty();

    listItemsModel(items).then(function (items) {
        let table = $(`
                        <table>
                            <tr>
                                <th>Product:</th>
                                <th>Description:</th>
                                <th>Price:</th>
                                <th>Telephone Number:</th>
                            </tr>
                        </table>`);
        let tr = $('<tr>');
        for (let item of items) {
            let tr = $('<tr>');
            displayItemRow(tr, item);
            tr.appendTo(table);
        }
        tr.appendTo(table);
        $('#items').append(table);
    });
    function displayItemRow(tr, item) {
        tr.append(
            $("<td>").text(item.title),
            $("<td>").text(item.description),
            $("<td>").text(item.price),
            $("<td>").text(item.number)
        );
    }
}