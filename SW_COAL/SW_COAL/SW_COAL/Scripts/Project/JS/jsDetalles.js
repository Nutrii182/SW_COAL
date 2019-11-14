﻿
$(document).ready(function () {

    var url = $('#urlObPaci').val();

    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ObtienePacientes,
        error: function (data) {
            alert('error');
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

    for (c = 0; c < result.data.length; c++) {

        if (result.data[c].iIdPaciente == id) {

            $('#NomPaci').html(result.data[c].sNombre + ' ' + result.data[c].sApePaterno + ' ' + result.data[c].sApeMaterno);
            $('#Domi').html(result.data[c].sDomicilio);
            $('#Tel').html(result.data[c].lTelefono);
            $('#Cel').html(result.data[c].lCelular);
            $('#Fech').html(result.data[c].dtFechaNacimiento);
            $('#Gen').html(result.data[c].sSexo);

            if (result.data[c].sApa_Res == 'Si')
                $('#divPade').append("<li>Aparato Respiratorio</li>");

            if (result.data[c].sApa_Car == 'Si')
                $('#divPade').append("<li>Aparato Cardiovascular</li>");

            if (result.data[c].sApa_Diges == 'Si')
                $('#divPade').append("<li>Aparato Digestivo</li>");

            if (result.data[c].sSis_Nerv == 'Si')
                $('#divPade').append("<li>Sistema Nervioso</li>");

            if (result.data[c].sProp_Guagu == 'Si') 
                $('#divPade').append("<li>Problemas de Coagulación</li>");

            if (result.data[c].sDesmayos == 'Si')
                $('#divPade').append("<li>Desmayos</li>");

            if (result.data[c].sVerti_Mareo == 'Si')
                $('#divPade').append("<li>Vertigos y Mareos</li>");

            if (result.data[c].sDiabetes == 'Si')
                $('#divPade').append("<li>Diabetes</li>");

            if (result.data[c].sTiroides == 'Si')
                $('#divPade').append("<li>Tiroides</li>");

            if (result.data[c].sFie_Reu == 'Si')
                $('#divPade').append("<li>Fiebre Reumática</li>");

            if (result.data[c].sHipertension == 'Si')
                $('#divPade').append("<li>Hipertensión</li>");

            if (result.data[c].sOtroAntecedente != null)
                $('#divPade').append('<li>'+result.data[c].sOtroAntecedente+'</li>');
        }
    }
}