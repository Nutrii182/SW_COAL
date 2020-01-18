
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

$(document).ready(function () {

    var url = $('#urlObUsuario').val();
    var id = getParameterByName('id');

    var idusu = JSON.stringify({
        iID: id,
        sUsuario: ""
    });

    $.ajax({
        type: "Post",
        url: url,
        data: idusu,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ObtieneUsuarios,
        error: function (data) {
            Swal.fire({
                icon: 'error',
                title: 'Error Obteniendo Usuario',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
});

function ObtieneUsuarios(result) {

    $('#NomUsu').html(result.data.sNombre);
    $('#ApePat').html(result.data.sAp_Paterno);
    $('#ApeMat').html(result.data.sAp_Materno);
    $('#Tel').html(result.data.lTelefono);
    $('#Cel').html(result.data.lCelular);
    $('#Correo').html(result.data.sCorreo);
    $('#Usuario').html(result.data.sUsuario);
    $('#Tipo').html(result.data.sTipo);
}