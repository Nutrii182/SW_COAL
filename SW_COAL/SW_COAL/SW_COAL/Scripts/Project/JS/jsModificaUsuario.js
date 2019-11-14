$(document).ready(function () {

    var url = $('#urlUsuarios').val();

    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ObtieneUsuarios,
        error: function (data) {
            alert('error obteniendo');
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

            $('#inNombre').val(result.data[c].sNombre);
            $('#inPaterno').val(result.data[c].sAp_Paterno);
            $('#inMaterno').val(result.data[c].sAp_Materno);
            $('#inTelefono').val(result.data[c].lTelefono);
            $('#inCelular').val(result.data[c].lCelular);
            $('#inCorreo').val(result.data[c].sCorreo);
            $('#inUsuario').val(result.data[c].sUsuario);
            $('#inContraseña').val(result.data[c].sContraseña);
            $('#inVeriContraseña').val(result.data[c].sContraseña);
            break;
        }
    }
    $(document).on('click','#ModiUsu', function () {
        validador(id);
    });
}

function validador(id) {

    if ($('#inNombre').val() === "" || $('#inPaterno').val() === "" || $('#inMaterno').val() === "" ||
        $('#inTelefono').val() === "" || $('#inCelular').val() === "" || $('#inUsuario').val() === "" ||
        $('#inContraseña').val() === "" || $('#inVeriContraseña').val() === "") {
        alert("Favor de llenar los campos");
    } else {

        if ($('#inContraseña').val() !== $('#inVeriContraseña').val())
            alert('Las contraseñas no coinciden');
        else {
            var datosUsuario = JSON.stringify({

                iId: id,
                sNombre: $('#inNombre').val(),
                sAp_Paterno: $('#inPaterno').val(),
                sAp_Materno: $('#inMaterno').val(),
                lTelefono: $('#inTelefono').val(),
                lCelular: $('#inCelular').val(),
                sCorreo: $('#inCorreo').val(),
                sUsuario: $('#inUsuario').val(),
                sContraseña: $('#inContraseña').val()
            });
            $('#ModiUsu').attr('disabled', true);
            LlamadaModi(datosUsuario);
        }
    }
}

function LlamadaModi(datosUsuario) {
    var url = $('#urlEdiUsu').val();

    $.ajax({
        url: url,
        data: datosUsuario,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: SuccessLlamada,
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            alert("Error");
            $('#ModiUsu').attr("disabled", false);
        }
    });
}

function SuccessLlamada(data) {

    if (data.Exito) {
        var url = $('#urlModiUsu').val();
        alert("Datos modificados Correctamente");
        window.location.href = url;
    }
    else if (data.Advertencia) {
        alert("Advertencia, modificando");
    }
    else {
        alert("Error algo falló");
    }
    $('#ModiUsu').attr("disabled", false);
}

