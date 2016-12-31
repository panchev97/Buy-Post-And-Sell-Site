function createItem() {
   let itemData = {
       title: $('#formCreateItem input[name=title]').val(),
       description: $('#formCreateItem textarea[name=descr]').val(),
       price: $('#formCreateItem input[name=price]').val(),
       number: $('#formCreateItem input[name=number]').val()
   };

   createItemModel(itemData).then(function () {
       $(location).attr('href', 'Items.html');
   })
}