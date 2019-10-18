
$(document).ready(function () {

    var v;

    $(document).on('change', '#selPaciente', function () {
        v = $(this).val();
    });

    $(document).on('click', '#regCon', function () {
        valida_antecedente(v);
    });
});
function valida_antecedente(v) {

    var emba,anti,fuma,bebe,droga,aler,higi;

    //Embarazo
    if ($('#inSiEmba').prop('checked')) {
        emba = 'Si';
    } else {
        if ($('#inNoEmba').prop('checked')) {
            emba = 'No';
        }
    }

    //Anticonceptivos
    if ($('#inSiAnti').prop('checked')) {
        anti = 'Si';
    } else {
        if ($('#inNoAnti').prop('checked')) {
            anti = 'No';
        }
    }

    //Fuma
    if ($('#inSiFuma').prop('checked')) {
        fuma = 'Si';
    } else {
        if ($('#inNoFuma').prop('checked')) {
            fuma = 'No';
        }
    }

    //Bebe
    if ($('#inSiBebe').prop('checked')) {
        bebe = 'Si';
    } else {
        if ($('#inNoBebe').prop('checked')) {
            bebe = 'No';
        }
    }

    //Drogas
    if ($('#inSiDroga').prop('checked')) {
        droga = 'Si';
    } else {
        if ($('#inNoDroga').prop('checked')) {
            droga = 'No';
        }
    }

    //Alergia
    if ($('#inSiAlerg').prop('checked')) {
        aler = 'Si';
    } else {
        if ($('#inNoAlerg').prop('checked')) {
            aler = 'No';
        }
    }

    //Higiene
    if ($('#inBuena').prop('checked')) {
        higi = 'Buena';
    } else {
        if ($('#inMala').prop('checked')) {
            higi = 'Mala';
        }
    }

    var datosAntecedentes = JSON.stringify({

        sEmbarazo: emba,
        iMesesEmbarazo: $('#inMeses').val(),
        sAnticonceptivos: anti,
        sTipoAnticoncep: $('#inAntiTipo').val(),
        sFuma: fuma,
        sBebe: bebe,
        sDrogas: droga,
        sAlergia: aler,
        sTipoAlergia: $('#inEspAlerg').val(),
        sHigieneBucal: higi,
        iPaciente: ++v
    });
    console.log(datosAntecedentes);
    LlamadoAntecedente(datosAntecedentes);
}

function LlamadoAntecedente(datosAntecedentes) {

    var url = $('#urlAntecedente').val();
    $.ajax({
        url: url,
        data: datosAntecedentes,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: SuccessAntecedente,
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            alert("Error Agregando antecedente");
            $('#regCon').attr("disabled", false);
        }
    });
}

function SuccessAntecedente(data) {

    if (data.Exito) {
        var url = $('#urlConsulta').val();
        alert('Antecedente Agregado Correctamente');
        window.location.href = url;
    }
    else if (data.Advertencia) {
        alert("El antecedente ya existe");
        $('#regCon').attr("disabled", false);
    }
    else {
        alert("Error");
        $('#regCon').attr("disabled", false);
    }
    $('#regCon').attr("disabled", false);
}