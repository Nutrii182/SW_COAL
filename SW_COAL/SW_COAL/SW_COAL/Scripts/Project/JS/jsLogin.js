
function TipoUsu(datosUsuario) {

    var url = $('#urlUsuario').val();

    $.ajax({
        type: "Post",
        url: url,
        data: datosUsuario,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: UsuarioTipo,
        error: function (data) {
            Swal.fire({
                icon: 'error',
                title: 'Error Obteniendo Datos',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
}

function UsuarioTipo(result) {

    localStorage.setItem('tipo', result.data.sTipo);
}

$(document).on('click', '.btnLogear', function () {
    validador();
});


$(document).ready(function () {
    $('#inUsuario').keypress(function (tecla) {
        if (tecla.charCode < 48 && tecla.charCode != 13 || tecla.charCode > 57) {
            if (tecla.charCode < 63 || tecla.charCode > 91) {
                if (tecla.charCode < 97 || tecla.charCode > 122) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'No usar Caractéres Raros',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    return false;
                }
            }
        }
    });
});

$(document).ready(function () {
    $('#inContra').keypress(function (tecla) {
        if (tecla.charCode < 48 && tecla.charCode != 13 || tecla.charCode > 57) {
            if (tecla.charCode < 63 || tecla.charCode > 91) {
                if (tecla.charCode < 97 || tecla.charCode > 122) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'No usar Caractéres Raros',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    return false;
                }
            }
        }
    });
});

function validador() {
    if ($('#inUsuario').val() === "" || $('#inContra').val() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'Favor de Llenar Los Campos',
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        var datosUsuario = JSON.stringify({
            sUsuario: $('#inUsuario').val(),
            sContraseña: $('#inContra').val()
        });

        $('#gif').css("display", "block");
        localStorage.setItem('user', $('#inUsuario').val());
        $('.btnLogear').attr("disabled", true);
        TipoUsu(datosUsuario);
        LlamadaIniciarSesion(datosUsuario);
    }
}

function LlamadaIniciarSesion(datosUsuario) {
    var url = $('#urlLogeo').val();
    $.ajax({
        url: url,
        data: datosUsuario,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: SuccessLlamadaIniciarSesion,
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            Swal.fire({
                icon: 'error',
                title: 'Error en Envío de Formulario',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
}

function SuccessLlamadaIniciarSesion(data) {

    if (data.Exito) {
        $('.btnLogear').attr("disabled", false);
        var url = $('#urlHome').val();
        window.location.href = url;
    }
    else if (data.Advertencia) {
        Swal.fire({
            icon: 'warning',
            title: 'Usuario y/o Contraseña Incorrectos',
            showConfirmButton: false,
            timer: 1500
        });
        $('.btnLogear').attr("disabled", false);
        $('#gif').css("display", "none");
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Error en Envío de Formulario',
            showConfirmButton: false,
            timer: 1500
        });
        $('#gif').css("display", "none");
        $('.btnLogear').attr("disabled", false);
    }
}