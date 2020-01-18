
$(document).ready(function () {

    var v;

    $(document).on('change', '#tipoU', function () {
        v = $('select[name="TipoUsua"] option:selected').text();
    });

    $(document).on('click', '#idRegistro', function () {
        validador(v);
    });
});



function validador(v) {

    var usu;

    usu = v;

    if ($('#inNombre').val() === "" || $('#inPaterno').val() === "" || $('#inMaterno').val() === "" ||
        $('#inTelefono').val() === "" || $('#inCelular').val() === "" || $('#inUsuario').val() === "" ||
        $('#inContraseña').val() === "" || $('#inVeriContraseña').val() === "") {
        alert("Favor de llenar los campos");
    }
    else {

        if ($('#inContraseña').val() !== $('#inVeriContraseña').val())
            Swal.fire({
                icon: 'warning',
                title: 'Las Contraseñas No Coinciden',
                showConfirmButton: false,
                timer: 1500
            });
        else {
            var nuevoUsuario = {
                sNombre: $('#inNombre').val(),
                sAp_Paterno: $('#inPaterno').val(),
                sAp_Materno: $('#inMaterno').val(),
                lTelefono: $('#inTelefono').val(),
                lCelular: $('#inCelular').val(),
                sCorreo: $('#inCorreo').val(),
                sUsuario: $('#inUsuario').val(),
                sContraseña: $('#inContraseña').val(),
                sTipo: usu
            };
            $('#idRegistro').attr("disabled", true);
            LlamadaRegistro(nuevoUsuario);
        }
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
            Swal.fire({
                icon: 'error',
                title: 'Error Enviando Datos',
                showConfirmButton: false,
                timer: 1500
            });
            $('#idRegistro').attr("disabled", false);
        }
    });
}

function SuccessLlamadaRegistro(data) {

    if (data.Exito) {
        Swal.fire({
            icon: 'success',
            title: 'Usuario Agregado Correctamente',
            showConfirmButton: false,
            timer: 1200
        });
        var url = $('#urlAgregarUsuario').val();
        window.location.href = url;
    }
    else if (data.Advertencia) {
        Swal.fire({
            icon: 'warning',
            title: 'El Usuario Ya Existe!',
            showConfirmButton: false,
            timer: 1000
        });
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Error Agregando Usuario',
            showConfirmButton: false,
            timer: 1500
        });
    }
    $('#idRegistro').attr("disabled", false);
}