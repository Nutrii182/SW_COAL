
$(document).ready(function () {

    var url = $('#urlPacientes').val();

    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ObtienePacientes,
        error: function (data) {
            alert('error obteniendo');
        }
    });
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function ObtienePacientes(result) {

    var id = getParameterByName('id');
    var idPaci, idOdont;

    for (c = 0; c < result.data.length; c++) {

        if (id == result.data[c].iIdPaciente) {

            $('#inNombre').val(result.data[c].sNombre);
            $('#inPaterno').val(result.data[c].sApePaterno);
            $('#inMaterno').val(result.data[c].sApeMaterno);
            $('#inDomicilio').val(result.data[c].sDomicilio);
            $('#inTelefono').val(result.data[c].lTelefono);
            $('#inCelular').val(result.data[c].lCelular);

            if (result.data[c].sSexo == 'Masculino')
                $('#inMasculino').attr('checked', true);
            else {
                if (result.data[c].sSexo == 'Femenino')
                    $('#inFemenino').attr('checked', true);
            }

            if (result.data[c].sApa_Res == 'Si')
                $('#inApRes').attr('checked', true);

            if (result.data[c].sApa_Cardi == 'Si')
                $('#inApCard').attr('checked', true);

            if (result.data[c].sApa_Diges == 'Si')
                $('#inApDig').attr('checked', true);

            if (result.data[c].sSis_Nerv == 'Si')
                $('#inSisNerv').attr('checked', true);

            if (result.data[c].sProp_Guagu == 'Si')
                $('#inProCoa').attr('checked', true);

            if (result.data[c].sDesmayos == 'Si')
                $('#inDesmayos').attr('checked', true);

            if (result.data[c].sVerti_Mareo == 'Si')
                $('#inVerMar').attr('checked', true);

            if (result.data[c].sDiabetes == 'Si')
                $('#inDiabetes').attr('checked', true);

            if (result.data[c].sTiroides == 'Si')
                $('#inTiroides').attr('checked', true);

            if (result.data[c].sFie_Reu == 'Si')
                $('#inFiRe').attr('checked', true);

            if (result.data[c].sHipertension == 'Si')
                $('#inHiper').attr('checked', true);

            $('#inAPotros').val(result.data[c].sOtroAntecedente);

            idOdont = result.data[c].iOdontologo;
            break;
        }
    }

    $(document).on('click', '#EditaPaci', function () {
        validador(id, idOdont);
    });
}



function validador(id, idOdont) {
    var s, apre, apcard, apdig, nerv, coa, desm, vermar, diabe, tiro, fire, hiper;

    if ($('#inMasculino').prop('checked')) {
        s = 'Masculino';
    } else {
        if ($('#inFemenino').prop('checked')) {
            s = 'Femenino';
        }
    }

    if ($('#inApRes').prop('checked')) {
        apre = 'Si'
    } else {
        apre = 'No';
    }

    if ($('#inApCard').prop('checked')) {
        apcard = 'Si'
    } else {
        apcard = 'No';
    }

    if ($('#inApDig').prop('checked')) {
        apdig = 'Si'
    } else {
        apdig = 'No';
    }

    if ($('#inSisNerv').prop('checked')) {
        nerv = 'Si'
    } else {
        nerv = 'No';
    }

    if ($('#inProCoa').prop('checked')) {
        coa = 'Si'
    } else {
        coa = 'No';
    }

    if ($('#inDesmayos').prop('checked')) {
        desm = 'Si'
    } else {
        desm = 'No';
    }

    if ($('#inVerMar').prop('checked')) {
        vermar = 'Si'
    } else {
        vermar = 'No';
    }

    if ($('#inDiabetes').prop('checked')) {
        diabe = 'Si'
    } else {
        diabe = 'No';
    }

    if ($('#inTiroides').prop('checked')) {
        tiro = 'Si'
    } else {
        tiro = 'No';
    }

    if ($('#inFiRe').prop('checked')) {
        fire = 'Si'
    } else {
        fire = 'No';
    }

    if ($('#inHiper').prop('checked')) {
        hiper = 'Si'
    } else {
        hiper = 'No';
    }

    if ($('#inNombre').val() === "" || $('#inPaterno').val() === "" || $('#inMaterno').val() === "" || $('#inDomicilio').val() === "" ||
        $('#inTelefono').val() === "" || $('#inCelular').val() === "" ||
        $('#inFechaNac').val() === "") {
        alert("Favor de llenar los campos");
    }
    else {
        var datosPaciente = JSON.stringify({

            iIdPaciente: id,
            sNombre: $('#inNombre').val(),
            sApePaterno: $('#inPaterno').val(),
            sApeMaterno: $('#inMaterno').val(),
            sDomicilio: $('#inDomicilio').val(),
            lTelefono: $('#inTelefono').val(),
            lCelular: $('#inCelular').val(),
            dtFechaNacimiento: $('#inFechaNac').val(),
            sSexo: s,
            sApa_Res: apre,
            sApa_Cardi: apcard,
            sApa_Diges: apdig,
            sSis_Nerv: nerv,
            sProp_Guagu: coa,
            sDesmayos: desm,
            sVerti_Mareo: vermar,
            sDiabetes: diabe,
            sTiroides: tiro,
            sFie_Reu: fire,
            sHipertension: hiper,
            sOtroAntecedente: $('#inAPotros').val(),
            iOdontologo: idOdont
        });
        $('#EditaPaci').attr("disabled", true);
        LlamadoPaciente(datosPaciente);
    }
}

function LlamadoPaciente(datosPaciente) {

    var url = $('#urlEdiPaci').val();
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
            $('#EditaPaci').attr("disabled", false);
        }
    });
}

function SuccessPaciente(data) {

    if (data.Exito) {
        var url = $('#urlModiPaci').val();
        alert("Paciente Actualizado");
        window.location.href = url;
    }
    else if (data.Advertencia) {
        alert("El paciente ya existe");
        $('#EditaPaci').attr("disabled", false);
    }
    else {
        alert("Error");
        $('#EditaPaci').attr("disabled", false);
    }
    $('#EditaPaci').attr("disabled", false);
}
