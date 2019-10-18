
$(document).ready(function () {

    var v;

    $(document).on('change', '#selPaciente', function () {
        v = $(this).val();
    });

    $(document).on('click', '#regCon', function () {
        valida_adicional(v);
    });
});

function valida_adicional(v) {

    var rechi, Tencia, Cencia, OHbucal, hemo, cepi;

    //Rechina
    if ($('#inSiRechApri').prop('checked')) {
        rechi = 'Si';
    } else {
        if ($('#inNoRechApri').prop('checked')) {
            rechi = 'No';
        }
    }

    // Tratamiento Encias
    if ($('#inSiTratEncias').prop('checked')) {
        Tencia = 'Si';
    } else {
        if ($('#inNoTratEncias').prop('checked')) {
            Tencia = 'No';
        }
    }

    // Cirugia Encias
    if ($('#inSiCiruEncias').prop('checked')) {
        Cencia = 'Si';
    } else {
        if ($('#inNoCiruEncias').prop('checked')) {
            Cencia = 'No';
        }
    }

    // Orientacion de higiene
    if ($('#inSiHigiene').prop('checked')) {
        OHbucal = 'Si';
    } else {
        if ($('#inNoHigiene').prop('checked')) {
            OHbucal = 'No';
        }
    }

    // Hemorragia
    if ($('#inSiHemorragia').prop('checked')) {
        hemo = 'Si';
    } else {
        if ($('#inNoHemorragia').prop('checked')) {
            hemo = 'No';
        }
    }

    // Cepillo Dental

    if ($('#inDuro').prop('checked')) {
        cepi = 'Duro';
    } else {
        if ($('#inMedio').prop('checked')) {
            cepi = 'Medio';
        } else {
            if ($('#inSuave').prop('checked')){
                cepi = 'Suave';
            } else {
                if ($('#inUltraSuave').prop('checked')) {
                    cepi = 'UltraSuave';
                }
            }
        }
    }

    var datosAdicional = JSON.stringify({

        sRechiApri: rechi,
        sTrataEncias: Tencia,
        sOriHigBucal: OHbucal,
        sCirugiaEncias: Cencia,
        sHemorragiaBucal: hemo,
        iCepillado: $('#inVecCepi').val(),
        sTipoCepillo: cepi,
        iPaciente: ++v
    });
    console.log(datosAdicional);
    LlamadaInfoAdicional(datosAdicional)
}

function LlamadaInfoAdicional(datosAdicional) {

    var url = $('#urlAdicional').val();

    $.ajax({
        url: url,
        data: datosAdicional,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: SuccessAdicional,
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            alert("Error adicional");
        }
    });
}

function SuccessAdicional(data) {

    if (data.Exito) {
        var url = $('#urlConsulta').val();
        alert("Adicional agregado Correctamente");
        window.location.href = url;
    }
    else if (data.Advertencia) {
        alert("Adicional ya existe");
        $('#regPaci').attr("disabled", false);
    }
    else {
        alert("Error");
        $('#regPaci').attr("disabled", false);
    }
    $('#regPaci').attr("disabled", false);
}