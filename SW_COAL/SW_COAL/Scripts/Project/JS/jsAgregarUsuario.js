$(document).on('click', '#idRegistro', function () {
    validador();

});

function validador() {

    if ($('#inNombre').val() === "" || $('#inPaterno').val() === "" || $('#inMaterno').val() === "" ||
        $('#inTelefono').val() === "" || $('#inCelular').val() === "" ||
        $('#inUsuario').val() === "" || $('#inContraseña').val() === "") {
        alert("Favor de llenar los campos");
    }
    else {

        var nuevoUsuario = {
            sNombre: $('#inNombre').val(),
            sAp_Paterno: $('#inPaterno').val(),
            sAp_Materno: $('#inMaterno').val(),
            lTelefono: $('#inTelefono').val(),
            lCelular: $('#inCelular').val(),
            sCorreo: $('#inCorreo').val(),
            sUsuario: $('#inUsuario').val(),
            sContraseña: $('#inContraseña').val()
        };
        $('#idRegistro').attr("disabled", true);
        LlamadaRegistro(nuevoUsuario);
    }
}

function LlamadaRegistro(nuevoUsuario) {
    var url = $('#urlRecibeUsuario').val();

    $.ajax({
        url: url,
        data: JSON.stringify({ nuevoUsuario }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: SuccessLlamadaRegistro,
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            alert("Error");
            $('#idRegistro').attr("disabled", false);
        }
    });
}

function SuccessLlamadaRegistro(data) {

    if (data.Exito) {
        var url = $('#urlAgregarUsuario').val();
        alert("Datos agregados Correctamente");
        window.location.href = url;
    }
    else if (data.Advertencia) {
        alert("Advertencia, el usuario ya existe");
    }
    else {
        alert("Error algo falló");
    }
    $('#idRegistro').attr("disabled", false);
}