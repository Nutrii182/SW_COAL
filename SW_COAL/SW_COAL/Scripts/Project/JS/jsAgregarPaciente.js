
$(document).on('click', '#regPaci', function () {

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

function ObtieneUsuarios(res) {

    var u = localStorage.getItem('user');

    for (c = 0; c < res.data.length; c++) {

        if (res.data[c].sUsuario == u) {

            validador(res.data[c].iId);
            break;
        }
    
    }
}

function validador(id) {
    var s;

    if ($('#inMasculino').prop('checked')) {
        s = 'Masculino';
    } else {
        if ($('#inFemenino').prop('checked')) {
            s = 'Femenino';
        }
    }
    var datosPaciente = JSON.stringify({

        sNombre: $('#inNombre').val(),
        sApePaterno: $('#inPaterno').val(),
        sApeMaterno: $('#inMaterno').val(),
        sDomicilio: $('#inDomicilio').val(),
        lTelefono: $('#inTelefono').val(),
        lCelular: $('#inCelular').val(),
        dtFechaNacimiento: $('#inFechaNac').val(),
        sSexo: s,
        iOdontologo: parseInt(id),
    });
    $('#regPaci').attr("disabled", true);
    LlamadoPaciente(datosPaciente);
}

function LlamadoPaciente(datosPaciente) {

    var url = $('#urlPacientes').val();
    console.log(datosPaciente);
    $.ajax({
        url: url,
        data: datosPaciente,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: SuccessPaciente,
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            alert("Error Agregando");
            $('#regPaci').attr("disabled", false);
        }
    });
}

function SuccessPaciente(data) {

    if (data.Exito) {
        var url = $('#urlAgregaPaciente').val();
        alert("Datos agregados Correctamente");
        window.location.href = url;
    }
    else if (data.Advertencia) {
        alert("El paciente ya existe");
        $('#regPaci').attr("disabled", false);
    }
    else {
        alert("Error");
        $('#regPaci').attr("disabled", false);
    }
    $('#regPaci').attr("disabled", false);
}