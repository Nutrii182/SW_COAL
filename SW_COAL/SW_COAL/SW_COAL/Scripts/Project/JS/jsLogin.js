$(document).ready(function () {

    var url = $('#urlUsuarios').val();

    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: prueba,
        error: function (data) {
            alert('error obteniendo');
        }
    });
});

function prueba(result) {

    $(document).on('click', '.btnLogear', function () {
        validador(result);
    });
}



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

function validador(result) {
    if ($('#inUsuario').val() === "" || $('#inContra').val() === "") {
        alert("favor de llenar los campos");
    } else {
        var datosUsuario = JSON.stringify({
            sUsuario: $('#inUsuario').val(),
            sContraseña: $('#inContra').val()
        });

        for (c = 0; c < result.data.length; c++) {

            if (result.data[c].sUsuario == $('#inUsuario').val())
                localStorage.setItem('tipo', result.data[c].sTipo);
            break;
        }

        $('#gif').css("display", "block");
        localStorage.setItem('user', $('#inUsuario').val());
        $('.btnLogear').attr("disabled", true);
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
            alert("Error");
        }
    });
}

function SuccessLlamadaIniciarSesion(data) {

    if (data.Exito) {
        var url = $('#urlHome').val()
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