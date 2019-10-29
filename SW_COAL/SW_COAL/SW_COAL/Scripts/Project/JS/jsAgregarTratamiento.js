
$(document).ready(function () {

    var v;

    $(document).on('change', '#selPaciente', function () {
        v = $(this).val();
    });

    $(document).on('click', '#regCon', function () {
        valida_tratamiento(v);
    });
});

function valida_tratamiento(v) {

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
        dtIniciaTratamiento: $('#inFechaIni').val(),
        dtTerminaTratamiento: $('#inFechaFin').val(),
        sTomaMedi: Tmedi,
        sMedicamento: $('#inMesp').val(),
        sHospi: Thospi,
        sMotivo: $('#inMotivo').val(),
        iPaciente: v
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
            alert("Error Agregando tratamiento");
            $('#regCon').attr("disabled", false);
        }
    });
}

function SuccessTratamiento(data) {

    if (data.Exito) {
        var url = $('#urlConsulta').val();
        alert("Tratamiento agregado Correctamente");
        window.location.href = url;
    }
    else if (data.Advertencia) {
        alert("Advertencia tratamiento");
        $('#regCon').attr("disabled", false);
    }
    else {
        alert("Error");
        $('#regCon').attr("disabled", false);
    }
    $('#regCon').attr("disabled", false);

}