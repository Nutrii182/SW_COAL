
$(document).ready(function () {

    var v;

    $(document).on('change', '#selPaciente', function () {
        v = $(this).val();
    });

    $(document).on('click', '#regCon', function () {
        validador(v);
    });
});

function validador(v) {

    var brico, contmu, habmord, rebuc, chulab, chulen, chuded, ali;

    //Bricomania
    if ($('#inBrico').prop('checked')) {
        brico = 'Si';
    } else {
        brico = 'No';
    }

    //Contracciones
    if ($('#inConMus').prop('checked')) {
        contmu = 'Si';
    } else {
        contmu = 'No';
    }

    //Mordida
    if ($('#inMordida').prop('checked')) {
        habmord = 'Si';
    } else {
        habmord = 'No';
    }

    //Respiracion Bucal
    if ($('#inRespBucal').prop('checked')) {
        rebuc = 'Si';
    } else {
        rebuc = 'No';
    }

    //Alimentacion
    if ($('#inAliBuena').prop('checked')) {
        ali = 'Buena';
    } else {
        if ($('#inAliMala').prop('checked')) {
            ali = 'Mala';
        }
    }

    //Chupador de Labios
    if ($('#inCHLabio').prop('checked')) {
        chulab = 'Si';
    } else {
        chulab = 'No';
    }

    //Chupador de Lengua
    if ($('#inCHLengua').prop('checked')) {
        chulen = 'Si';
    } else {
        chulen = 'No';
    }

    //Chupador de Dedos
    if ($('#inCHDedos').prop('checked')) {
        chuded = 'Si';
    } else {
        chuded = 'No';
    }

    var datosHabito = JSON.stringify({
        sBricomania: brico,
        sContrac_Musc: contmu,
        sHabi_Mordi: habmord,
        sResp_Bucal: rebuc,
        sChupa_Labios: chulab,
        sChupa_Lengua: chulen,
        sChupa_Dedos: chuded,
        iFrecuencia: $('#inFrecuencia').val(),
        sAlimentacion: ali,
        iPaciente: v
    });
    console.log(datosHabito);
    LlamadoHabito(datosHabito);
}

function LlamadoHabito(datosHabito) {

    var url = $('#urlHabito').val();
    $.ajax({
        url: url,
        data: datosHabito,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: SuccessHabito,
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            alert("Error Agregando habito");
            $('#regCon').attr("disabled", false);
        }
    });
}

function SuccessHabito(data) {

    if (data.Exito) {
        var url = $('#urlConsulta').val();
        alert('Habito Agregado Correctamente');
        window.location.href = url;
    }
    else if (data.Advertencia) {
        alert("El habito ya existe");
        $('#regCon').attr("disabled", false);
    }
    else {
        alert("Error");
        $('#regCon').attr("disabled", false);
    }
    $('#regCon').attr("disabled", false);
}