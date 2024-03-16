$('#updateForm').submit(function() {
    var value = $('#update-id').val(); 
    this.action = '/articulos/' + value;
    return true;
});