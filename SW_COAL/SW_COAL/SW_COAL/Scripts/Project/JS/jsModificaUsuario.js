$(document).ready(function () {

    var url = $('#urlUsuario').val();
    var id = getParameterByName('id');

    var datUsu = JSON.stringify({
        iId: id,
        sUsuario: ""
    });

    $.ajax({
        type: "POST",
        url: url,
        data: datUsu,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ObtieneUsuarios,
        error: function (data) {
            alert('error obteniendo');
        }
    });

    $(document).on('change', '#tipoU', function () {
        v = $('select[name="TipoUsua"] option:selected').text();
    });

    $(document).on('click', '#ModiUsu', function () {
        validador(id,$('#tipoU').val())
    });
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function ObtieneUsuarios(result) {

    $('#inNombre').val(result.data.sNombre);
    $('#inPaterno').val(result.data.sAp_Paterno);
    $('#inMaterno').val(result.data.sAp_Materno);
    $('#inTelefono').val(result.data.lTelefono);
    $('#inCelular').val(result.data.lCelular);
    $('#inCorreo').val(result.data.sCorreo);
    $('#inUsuario').val(result.data.sUsuario);
    $('#inContraseña').val(result.data.sContraseña);
    $('#inVeriContraseña').val(result.data.sContraseña);
    $('#tipoU').val(result.data.sTipo);
}

function validador(id, tipo) {

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
                sContraseña: $('#inContraseña').val(),
                sTipo: tipo
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

