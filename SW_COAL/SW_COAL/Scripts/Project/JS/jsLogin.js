$(document).on('click', '.btnLogear', function () {
    validador();
});

$(document).ready(function () {
    $('#inUsuario').keypress(function (tecla) {
        if (tecla.charCode < 48 && tecla.charCode != 13 || tecla.charCode > 57) {
            if (tecla.charCode < 63 || tecla.charCode > 91) {
                if (tecla.charCode < 97 || tecla.charCode > 122) {
                    alert('No usar caracteres raros');
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
                    alert('No usar caracteres raros');
                    return false;
                }
            }
        }
    });
});

function validador() {
    if ($('#inUsuario').val() === "" || $('#inContra').val() === "") {
        alert("favor de llenar los campos");
    } else {
        var datosUsuario = {
            sUsuario: $('#inUsuario').val(),
            sContraseña: $('#inContra').val()
        };
        $('#gif').css("display", "block");
        localStorage.setItem('user', datosUsuario.sUsuario);
        $('.btnLogear').attr("disabled", true);
        LlamadaIniciarSesion(datosUsuario);
    }
}

function LlamadaIniciarSesion(datosUsuario) {
    var url = $('#urlLogeo').val();
    $.ajax({
        url: url,
        data: JSON.stringify({ datosUsuario }),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: SuccessLlamadaIniciarSesion,
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            alert("Error");
        }
    });
}

function SuccessLlamadaIniciarSesion(data) {

    if (data.Exito) {
        var url = $('#urlHome').val();
        window.location.href = url;
    }
    else if (data.Advertencia) {
        alert("Usuario y/o Contraseña Incorrectos");
        $('#gif').css("display", "none");
    }
    else {
        alert("Error");
        $('#gif').css("display", "none");
    }
    $('.btnLogear').attr("disabled", false);
}