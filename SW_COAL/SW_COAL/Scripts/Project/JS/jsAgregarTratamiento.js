
$(document).on('click', '#regPaci', function () {

    validado();
});

function validado() {

    var trat, Ttrat, Tmedi, Tmoti, Thospi, medi, moti;

    //Tratamiento
    if ($('#inTsi').prop('checked')) {
        trat = 'Si';
    } else {
        if ($('#inTno').prop('checked')) {
            trat = 'No';
        }
    }

    //Medico o Dental
    if ($('#inMedico').prop('checked')) {
        Ttrat = 'Medico';
    } else {
        if ($('#inDental').prop('checked')) {
            Ttrat = 'Dental';
        }
    }

    //Medicamentos
    if ($('#inMsi').prop('checked')) {
        Tmedi = 'Si';
        $('#inMesp').prop('disabled', false);
    } else {
        if ($('#inMno').prop('checked')) {
            Tmedi = 'No';
            $('#inMesp').prop('disabled', true);
            $('#inMesp').val() == null;
        }
    }

    //Hospital
    if ($('#inHsi').prop('checked')) {
        Thospi = 'Si';
        $('#inMotivo').prop('disabled', false);
    } else {
        if ($('#inHno').prop('checked')) {
            Thospi = 'No';
            $('#inMotivo').prop('disabled', true);
            $('#inMotivo').val() == null;
        }
    }

    var datosTratamiento = JSON.stringify({

        sBajoTratamiento: trat,
        sTipoTratamiento: Ttrat,
        sNombreDoctor: $('#inNombreD').val(),
        sApePaterDoc: $('#inPaternoD').val(),
        sApeMaterDoc: $('#inMaternoD').val(),
        lTelDoct: $('#inTelD').val(),
        lCelDoct: $('#inCelD').val(),
        sTomaMedi: Tmedi,
        sMedicamento: $('#inMesp').val(),
        sHospi: Thospi,
        sMotivo: $('#inMotivo').val(),
        iPaciente: 1
    });
    console.log(datosTratamiento);
    LlamadoTratamiento(datosTratamiento);
}

function LlamadoTratamiento(datosTratamiento) {

    var url = $('#urlTratamiento').val();
    $.ajax({
        url: url,
        data: datosTratamiento,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: SuccessTratamiento,
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            alert("Error Agregando");
            $('#regPaci').attr("disabled", false);
        }
    });
}

function SuccessTratamiento(data) {

    if (data.Exito) {
        var url = $('#urlAgregaPaciente').val();
        alert("Datos agregados Correctamente");
        window.location.href = url;
    }
    else if (data.Advertencia) {
        alert("Advertencia tratamiento");
        $('#regPaci').attr("disabled", false);
    }
    else {
        alert("Error");
        $('#regPaci').attr("disabled", false);
    }
    $('#regPaci').attr("disabled", false);

}