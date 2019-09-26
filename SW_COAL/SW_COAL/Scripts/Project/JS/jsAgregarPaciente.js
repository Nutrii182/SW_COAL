$(document).ready(function () {

    var v;

    $(document).on('change', '#selOdonto', function () {
        v = $(this).val();
    });

    $(document).on('click', '#regPaci', function () {
        validador(v);
    });
});



function validador(v) {
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
        dtIniciaTratamiento: $('#inFechaIni').val(),
        dtTerminaTratamiento: $('#inFechaFin').val(),
        dtFechaNacimiento: $('#inFechaNac').val(),
        sSexo: s,
        iOdontologo: parseInt(++v),
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