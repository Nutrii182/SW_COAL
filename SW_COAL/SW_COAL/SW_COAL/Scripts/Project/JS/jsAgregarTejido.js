
$(document).ready(function () {

    var v;

    $(document).on('change', '#selPaciente', function () {
        v = $(this).val();
    });

    $(document).on('click', '#regCon', function () {
        valida_tejido(v);
    });
});

function valida_tejido(v) {

    var duro, rx, encia, epite, lengua, pulpa, velo, carrillo, mordida, mordabi, desbru, anoclu;

    //Duro
    if ($('#inEsmalte').prop('checked')) {
        duro = 'Esmalte';
    } else {
        if ($('#inDentina').prop('checked')) {
            duro = 'Dentina';
        }
    }

    //Rx
    if ($('#inRaiz').prop('checked')) {
        rx = 'Raiz';
    } else {
        if ($('#inHuesos').prop('checked')) {
            rx = 'Huesos';
        }
    }

    //Encia
    if ($('#inEncia').prop('checked')) {
        encia = 'Si';
    } else {
        encia = 'No';
    }

    //Epitelial
    if ($('#inInEpi').prop('checked')) {
        epite = 'Si';
    } else {
        epite = 'No';
    }

    //Lengua
    if ($('#inLengua').prop('checked')) {
        lengua = 'Si';
    } else {
        lengua = 'No';
    }

    //Pulpa
    if ($('#inPulpa').prop('checked')) {
        pulpa = 'Si';
    } else {
        pulpa = 'No';
    }

    //Velo
    if ($('#inVelo').prop('checked')) {
        velo = 'Si';
    } else {
        velo = 'No';
    }

    //Carrillos
    if ($('#inCarrillo').prop('checked')) {
        carrillo = 'Si';
    } else {
        carrillo = 'No';
    }

    //Oclusion
    if ($('#inMorHor').prop('checked')) {
        mordida = 'Horizontal';
    } else {
        if ($('#inMorVer').prop('checked')) {
            mordida = 'Vertical';
        }
    }

    //Mordida Abierta
    if ($('#inMordAbi').prop('checked')) {
        mordabi = 'Si';
    } else {
        mordabi = 'No';
    }

    //Bruxismo
    if ($('#inDesBru').prop('checked')) {
        desbru = 'Si';
    } else {
        desbru = 'No';
    }

    //Anoclusion
    if ($('#inAnoc').prop('checked')) {
        anoclu = 'Si';
    } else {
        anoclu = 'No';
    }

    var datosTejido = JSON.stringify({

        sDuros: duro,
        sRx: rx,
        sEncia: encia,
        sInsert_Epi: epite,
        sLengua: lengua,
        sPulpa: pulpa,
        sVelo: velo,
        sCarrillos: carrillo,
        sSob_Mord: mordida,
        sMordi_Abier: mordabi,
        sDesg_Bru: desbru,
        sAnoclusion: anoclu,
        iPaciente: v
    });
    console.log(datosTejido);
    LlamadoTejido(datosTejido);
}

function LlamadoTejido(datosTejido) {

    var url = $('#urlTejido').val();
    $.ajax({
        url: url,
        data: datosTejido,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: SuccessTejido,
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            alert("Error Agregando tejido");
            $('#regCon').attr("disabled", false);
        }
    });
}

function SuccessTejido(data) {

    if (data.Exito) {
        var url = $('#urlConsulta').val();
        alert('Tejido Agregado Correctamente');
        window.location.href = url;
    }
    else if (data.Advertencia) {
        alert("El tejido ya existe");
        $('#regCon').attr("disabled", false);
    }
    else {
        alert("Error");
        $('#regCon').attr("disabled", false);
    }
    $('#regCon').attr("disabled", false);
}