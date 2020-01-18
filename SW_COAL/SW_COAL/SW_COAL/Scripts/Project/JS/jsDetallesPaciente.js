
$(document).ready(function () {

    var id = getParameterByName('id');

    var idPaci = JSON.stringify({
        iIdPaciente: id
    });

    var url = $('#urlObPaciente').val();

    $.ajax({
        url: url,
        data: idPaci,
        type: "Post",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: ObtieneConsulta,
        error: function (data) {
            alert('Error ajax paciente');
        }
    });
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

var datos;

function ObtieneConsulta(result) {

    datos = result;

    $('#NomPaci').html(result.data.sNombre);
    $('#ApePatPaci').html(result.data.sApePaterno);
    $('#ApeMatPaci').html(result.data.sApeMaterno)
    $('#DomPaci').html(result.data.sDomicilio);
    $('#TelPaci').html(result.data.lTelefono)
    $('#CelPaci').html(result.data.lCelular);

    var naci = moment(result.data.dtFechaNacimiento).format("DD/MM/YYYY");
    $('#NacPaci').html(naci);

    $('#SexPaci').html(result.data.sSexo);
    $('#TratPaci').html(result.data.sBajoTratamiento);

    if (result.data.sBajoTratamiento == 'No') {
        $('#TiDacDoc').css('display', 'none');
        $('#tipoTrat').css('visibility', 'hidden');
        $('#datoDoc').css('display', 'none');
        $('#ContacDoc').css('display', 'none');
        $('#TratDoc').css('display', 'none');
    }

    $('#TipoTrat').html(result.data.sTipoTratamiento);
    $('#NomDoc').html(result.data.sNombreDoctor);
    $('#ApePatDoc').html(result.data.sApePaterDoc);
    $('#ApeMatDoc').html(result.data.sApeMaterDoc);
    $('#TelDoc').html(result.data.lTelDoct);
    $('#CelDoc').html(result.data.lCelDoct);

    if (result.data.dtIniciaTratamiento != null) {
        var init = moment(result.data.dtIniciaTratamiento).format("DD/MM/YYYY");
        $('#IniTrat').html(init);
    }

    if (result.data.dtTerminaTratamiento != null) {
        var fint = moment(result.data.dtTerminaTratamiento).format("DD/MM/YYYY");
        $('#FinTrat').html(fint);
    }

    if (result.data.sApa_Res == 'Si')
        $('#divPade').append("<li>Aparato Respiratorio</li>");

    if (result.data.sApa_Car == 'Si')
        $('#divPade').append("<li>Aparato Cardiovascular</li>");

    if (result.data.sApa_Diges == 'Si')
        $('#divPade').append("<li>Aparato Digestivo</li>");

    if (result.data.sSis_Nerv == 'Si')
        $('#divPade').append("<li>Sistema Nervioso</li>");

    if (result.data.sProp_Guagu == 'Si')
        $('#divPade').append("<li>Problemas de Coagulación</li>");

    if (result.data.sDesmayos == 'Si')
        $('#divPade').append("<li>Desmayos</li>");

    if (result.data.sVerti_Mareo == 'Si')
        $('#divPade').append("<li>Vertigos y Mareos</li>");

    if (result.data.sDiabetes == 'Si')
        $('#divPade').append("<li>Diabetes</li>");

    if (result.data.sTiroides == 'Si')
        $('#divPade').append("<li>Tiroides</li>");

    if (result.data.sFie_Reu == 'Si')
        $('#divPade').append("<li>Fiebre Reumática</li>");

    if (result.data.sHipertension == 'Si')
        $('#divPade').append("<li>Hipertensión</li>");

    if (result.data.sOtroAntecedente != null)
        $('#divPade').append('<li>' + result.data.sOtroAntecedente + '</li>');

    $('#TomaMedi').html(result.data.sTomaMedi);

    $('#Medi').html(result.data.sMedicamento);

    $('#Hospi').html(result.data.sHospi);

    $('#Moti').html(result.data.sMotivo);

    $('#Dur').html(result.data.sDuros);

    $('#Car').html(result.data.sRx);

    if (result.data.sEncia == 'Si')
        $('#divBlan').append('<li>' + 'Encia' + '</li>');

    if (result.data.sInsert_Epi == 'Si')
        $('#divBlan').append('<li>' + 'Inserción Epitelial' + '</li>');

    if (result.data.sLengua == 'Si')
        $('#divBlan').append('<li>' + 'Lengua' + '</li>');

    if (result.data.sPulpa == 'Si')
        $('#divBlan').append('<li>' + 'Pulpa' + '</li>');

    if (result.data.sVelo == 'Si')
        $('#divBlan').append('<li>' + 'Velo' + '</li>');

    if (result.data.sCarrillos == 'Si')
        $('#divBlan').append('<li>' + 'Carrillos' + '</li>');

    $('#Mord').html(result.data.sSob_Mord);

    if (result.data.sMordi_Abier == 'Si')
        $('#divMordi').append('<li>' + 'Mordida Abierta' + '</li>');

    if (result.data.sDesg_Bru == 'Si')
        $('#divMordi').append('<li>' + 'Desgaste Bruxismo' + '</li>');

    if (result.data.sAnoclusion == 'Si')
        $('#divMordi').append('<li>' + 'Anoclusión' + '</li>');

    $('#Emb').html(result.data.sEmbarazo);

    if (result.data.sEmbarazo == 'Si')
        $('#Meses').html(result.data.iMesesEmbarazo + ' meses');

    $('#Anti').html(result.data.sAnticonceptivos);

    if (result.data.sAnticonceptivos == 'Si')
        $('#TipAnti').html(result.data.sTipoAnticoncep);

    $('#Fuma').html(result.data.sFuma);

    $('#Alco').html(result.data.sBebe);

    $('#Drug').html(result.data.sDrogas);

    $('#Aler').html(result.data.sAlergia);

    if (result.data.sAlergia == 'Si')
        $('#TipAler').html(result.data.sTipoAlergia);

    $('#Hig').html(result.data.sHigieneBucal);

    if (result.data.sBricomania == 'Si')
        $('#HabBuc').append('<li>' + 'Bricomania' + '</li>');

    if (result.data.sContrac_Musc == 'Si')
        $('#HabBuc').append('<li>' + 'Contracciones Musculares' + '</li>');

    if (result.data.sHabi_Mordi == 'Si')
        $('#HabBuc').append('<li>' + 'Hábitos de Mordida' + '</li>');

    if (result.data.sResp_Bucal == 'Si')
        $('#HabBuc').append('<li>' + 'Respiración Bucal' + '</li>');

    $('#Ali').html(result.data.sAlimentacion);


    if (result.data.sChupa_Labios == 'Si')
        $('#Chup').html('Labios');
    else
        if (result.data.sChupa_Lengua == 'Si')
            $('#Chup').html('Lengua');
        else
            if (result.data.sChupa_Dedos == 'Si')
                $('#Chup').html('Dedos');

    $('#Fre').html(result.data.iFrecuencia);

    $('#Rech').html(result.data.sRechiApri);

    $('#TratEn').html(result.data.sTrataEncias);

    $('#CirEn').html(result.data.sCirugiaEncias);

    $('#OriHig').html(result.data.sOriHigBucal);

    $('#Hemo').html(result.data.sHemorragiaBucal);

    $('#Cepi').html(result.data.iCepillado);

    $('#TipCepi').html(result.data.sTipoCepillo);

}

function D11() {

    Swal.fire(
        'D11',
        datos.data.sD11,
        'question',
    );
}

function D12() {

    Swal.fire(
        'D12',
        datos.data.sD12,
        'question',
    );
}

function D13() {

    Swal.fire(
        'D13',
        datos.data.sD13,
        'question',
    );
}

function D14() {

    Swal.fire(
        'D14',
        datos.data.sD14,
        'question',
    );
}

function D15() {

    Swal.fire(
        'D15',
        datos.data.sD15,
        'question',
    );
}

function D16() {

    Swal.fire(
        'D16',
        datos.data.sD16,
        'question',
    );
}

function D17() {

    Swal.fire(
        'D17',
        datos.data.sD17,
        'question',
    );
}

function D18() {

    Swal.fire(
        'D18',
        datos.data.sD18,
        'question',
    );
}

function D21() {

    Swal.fire(
        'D21',
        datos.data.sD21,
        'question',
    );
}

function D22() {

    Swal.fire(
        'D22',
        datos.data.sD22,
        'question',
    );
}

function D23() {

    Swal.fire(
        'D23',
        datos.data.sD23,
        'question',
    );
}

function D24() {

    Swal.fire(
        'D24',
        datos.data.sD24,
        'question',
    );
}

function D25() {

    Swal.fire(
        'D25',
        datos.data.sD25,
        'question',
    );
}

function D26() {

    Swal.fire(
        'D26',
        datos.data.sD26,
        'question',
    );
}

function D27() {

    Swal.fire(
        'D27',
        datos.data.sD27,
        'question',
    );
}

function D28() {

    Swal.fire(
        'D28',
        datos.data.sD28,
        'question',
    );
}

function D31() {

    Swal.fire(
        'D31',
        datos.data.sD31,
        'question',
    );
}

function D32() {

    Swal.fire(
        'D32',
        datos.data.sD32,
        'question',
    );
}

function D33() {

    Swal.fire(
        'D33',
        datos.data.sD33,
        'question',
    );
}

function D34() {

    Swal.fire(
        'D34',
        datos.data.sD34,
        'question',
    );
}

function D35() {

    Swal.fire(
        'D35',
        datos.data.sD35,
        'question',
    );
}

function D36() {

    Swal.fire(
        'D36',
        datos.data.sD36,
        'question',
    );
}

function D37() {

    Swal.fire(
        'D37',
        datos.data.sD37,
        'question',
    );
}

function D38() {

    Swal.fire(
        'D38',
        datos.data.sD38,
        'question',
    );
}

function D41() {

    Swal.fire(
        'D41',
        datos.data.sD41,
        'question',
    );
}

function D42() {

    Swal.fire(
        'D42',
        datos.data.sD42,
        'question',
    );
}

function D43() {

    Swal.fire(
        'D43',
        datos.data.sD43,
        'question',
    );
}

function D44() {

    Swal.fire(
        'D44',
        datos.data.sD45,
        'question',
    );
}

function D45() {

    Swal.fire(
        'D45',
        datos.data.sD45,
        'question',
    );
}

function D46() {

    Swal.fire(
        'D46',
        datos.data.sD46,
        'question',
    );
}

function D47() {

    Swal.fire(
        'D47',
        datos.data.sD47,
        'question',
    );
}

function D48() {

    Swal.fire(
        'D48',
        datos.data.sD48,
        'question',
    );
}