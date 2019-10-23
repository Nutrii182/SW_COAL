$(document).ready(function () {
    dtPacientes();
});

function dtPacientes() {

    var url = $('#urlListaPacientes').val();

    $('#tabPaci').DataTable();

    /*$('#tabPaci').DataTable({

        ajax: {
            url: url,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            type: "Get"
        },
        columns: [
            { "data": "sNombre" },
            { "data": "sApePaterno" },
            { "data": "sApeMaterno" },
            { "data": "sDomicilio" },
            { "data": "lTelefono" },
            { "data": "lCelular" },
            { "data": "dtFechaNacimiento" },
            { "data": "sSexo" }
        ]
    });*/
}