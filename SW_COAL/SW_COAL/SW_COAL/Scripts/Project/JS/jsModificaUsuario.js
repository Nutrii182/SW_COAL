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
            Swal.fire({
                icon: 'error',
                title: 'Error Obteniendo Usuario',
                showConfirmButton: false,
                timer: 1500
            });
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
        Swal.fire({
            icon: 'warning',
            title: 'Favor de Llenar los Campos!',
            showConfirmButton: false,
            timer: 1500
        });
    } else {

        if ($('#inContraseña').val() !== $('#inVeriContraseña').val())
            Swal.fire({
                icon: 'warning',
                title: 'Las Contraseñas No Coinciden!',
                showConfirmButton: false,
                timer: 1500
            });
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
            Swal.fire({
            icon: 'error',
            title: 'Error Enviando Datos',
            showConfirmButton: false,
            timer: 1500
        });
            $('#ModiUsu').attr("disabled", false);
        }
    });
}

function SuccessLlamada(data) {

    if (data.Exito) {
        var url = $('#urlModiUsu').val();
        Swal.fire({
            icon: 'success',
            title: 'Usuario Modificado Correctamente',
            showConfirmButton: false,
            timer: 1500
        });
        window.location.href = url;
    }
    else if (data.Advertencia) {
        Swal.fire({
            icon: 'warning',
            title: 'Algo Falló',
            showConfirmButton: false,
            timer: 1500
        });
    }
    else {
        Swal.fire({
            icon: 'Error',
            title: 'Error Modificando Usuario',
            showConfirmButton: false,
            timer: 1500
        });
    }
    $('#ModiUsu').attr("disabled", false);
}

