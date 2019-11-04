
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
            iOdontologo: parseInt(id)
        });
        $('#regPaci').attr("disabled", true);
        LlamadoPaciente(datosPaciente);
    }
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