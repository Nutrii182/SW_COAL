
$(document).ready(function () {

    var url = $('#urlObUsuarios').val();

    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ObtieneUsuarios,
        error: function (data) {
            alert('error');
        }
    });
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function ObtieneUsuarios(result) {

    var id = getParameterByName('id');

    for (c = 0; c < result.data.length; c++) {

        if (id == result.data[c].iId) {

            $('#NomUsu').html(result.data[c].sNombre);
            $('#ApePat').html(result.data[c].sAp_Paterno);
            $('#ApeMat').html(result.data[c].sAp_Materno);
            $('#Tel').html(result.data[c].lTelefono);
            $('#Cel').html(result.data[c].lCelular);
            $('#Correo').html(result.data[c].sCorreo);
            $('#Usuario').html(result.data[c].sUsuario);
            $('#Tipo').html(result.data[c].sTipo);
        }
    }
}