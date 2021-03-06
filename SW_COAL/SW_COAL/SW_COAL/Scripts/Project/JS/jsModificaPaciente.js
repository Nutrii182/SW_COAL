﻿
$(document).ready(function () {

    var id = getParameterByName('id');
    var url = $('#urlPaciente').val();

    var datPaci = JSON.stringify({
        iIdPaciente: id
    });

    $.ajax({
        type: "POST",
        url: url,
        data: datPaci,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ObtienePacientes,
        error: function (data) {
            Swal.fire({
                icon: 'error',
                title: 'Error Obteniendo Paciente',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });

    $(document).on('click', '#EditaPaci', function () {
        validador(id);
    });
});

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function ObtienePacientes(result) {

    $('#inNombre').val(result.data.sNombre);
    $('#inPaterno').val(result.data.sApePaterno);
    $('#inMaterno').val(result.data.sApeMaterno);
    $('#inDomicilio').val(result.data.sDomicilio);
    $('#inTelefono').val(result.data.lTelefono);
    $('#inCelular').val(result.data.lCelular);

    var date = moment(result.data.dtFechaNacimiento).format("YYYY-MM-DD");
    $('#inFechaNac').val(date);

    if (result.data.sSexo == 'Masculino')
        $('#inMasculino').attr('checked', true);
    else {
        if (result.data.sSexo == 'Femenino')
            $('#inFemenino').attr('checked', true);
    }

    if (result.data.sApa_Res == 'Si')
        $('#inApRes').attr('checked', true);

    if (result.data.sApa_Cardi == 'Si')
        $('#inApCard').attr('checked', true);

    if (result.data.sApa_Diges == 'Si')
        $('#inApDig').attr('checked', true);

    if (result.data.sSis_Nerv == 'Si')
        $('#inSisNerv').attr('checked', true);

    if (result.data.sProp_Guagu == 'Si')
        $('#inProCoa').attr('checked', true);

    if (result.data.sDesmayos == 'Si')
        $('#inDesmayos').attr('checked', true);

    if (result.data.sVerti_Mareo == 'Si')
        $('#inVerMar').attr('checked', true);

    if (result.data.sDiabetes == 'Si')
        $('#inDiabetes').attr('checked', true);

    if (result.data.sTiroides == 'Si')
        $('#inTiroides').attr('checked', true);

    if (result.data.sFie_Reu == 'Si')
        $('#inFiRe').attr('checked', true);

    if (result.data.sHipertension == 'Si')
        $('#inHiper').attr('checked', true);

    $('#inAPotros').val(result.data.sOtroAntecedente);

    //tratamiento

    if (result.data.sBajoTratamiento == 'Si')
        $('#inTsi').attr('checked', true);
    else
        $('#inTno').attr('checked', true);

    if (result.data.sTipoTratamiento == 'Medico')
        $('#inMedico').attr('checked', true);
    else
        if (result.data.sTipoTratamiento == 'Dental')
            $('#inDental').attr('checked', true);

    $('#inNombreD').val(result.data.sNombreDoctor);
    $('#inPaternoD').val(result.data.sApePaterDoc);
    $('#inMaternoD').val(result.data.sApeMaterDoc);
    $('#inTelD').val(result.data.lTelDoct);
    $('#inCelD').val(result.data.lCelDoct);

    if (result.data.dtIniciaTratamiento != null) {
        var init = moment(result.data.dtIniciaTratamiento).format("YYYY-MM-DD");
        $('#inFechaIni').val(init);
    }

    if (result.data.dtTerminaTratamiento != null) {
        var fint = moment(result.data.dtTerminaTratamiento).format("YYYY-MM-DD");
        $('#inFechaFin').val(fint);
    }

    if (result.data.sTomaMedi == 'Si')
        $('#inMsi').attr('checked', true);
    else
        $('#inMno').attr('checked', true);

    $('#inMesp').val(result.data.sMedicamento);

    if (result.data.sHospi == 'Si')
        $('#inHsi').attr('checked', true);
    else
        $('#inHno').attr('checked', true);

    $('#inMotivo').val(result.data.sMotivo);

    //Tejidos

    if (result.data.sDuros == 'Esmalte')
        $('#inEsmalte').attr('checked', true);
    else
        $('#inDentina').attr('checked', true);

    if (result.data.sRx == 'Raiz')
        $('#inRaiz').attr('checked', true);
    else
        $('#inHuesos').attr('checked', true);

    if (result.data.sEncia == 'Si')
        $('#inEncia').attr('checked', true);

    if (result.data.sInsert_Epi == 'Si')
        $('#inInEpi').attr('checked', true);

    if (result.data.sLengua == 'Si')
        $('#inLengua').attr('checked', true);

    if (result.data.sPulpa == 'Si')
        $('#inPulpa').attr('checked', true);

    if (result.data.sVelo == 'Si')
        $('#inVelo').attr('checked', true);

    if (result.data.sCarrillos == 'Si')
        $('#inCarrillos').attr('checked', true);

    if (result.data.sSob_Mord == 'Horizontal')
        $('#inMorHor').attr('checked', true);
    else
        $('#inMorVer').attr('checked', true);

    if (result.data.sMordi_Abier == 'Si')
        $('#MordAbi').attr('checked', true);

    if (result.data.sDesg_bru == 'Si')
        $('#inDesBru').attr('checked', true);

    if (result.data.sAnoclusion == 'Si')
        $('#inAnoc').attr('checked', true);

    //Antecedentes

    if (result.data.sEmbarazo == 'Si')
        $('#inSiEmba').attr('checked', true)
    else
        $('#inNoEmba').attr('checked', true);

    if (result.data.iMesesEmbarazo != null)
        $('#inMeses').val(result.data.iMesesEmbarazo);
    else
        $('#inMeses').val(0);

    if (result.data.sAnticonceptivos == 'Si')
        $('#inSiAnti').attr('checked', true);
    else
        $('#inNoAnti').attr('checked', true);

    $('#inAntiTipo').val(result.data.sTipoAnticoncep);

    if (result.data.sFuma == 'Si')
        $('#inSiFuma').attr('checked', true);
    else
        $('#inNoFuma').attr('checked', true);

    if (result.data.sBebe == 'Si')
        $('#inSiBebe').attr('checked', true);
    else
        $('#inNoBebe').attr('checked', true);

    if (result.data.sDrogas == 'Si')
        $('#inSiDroga').attr('checked', true);
    else
        $('#inNoDroga').attr('checked', true);

    if (result.data.sAlergia == 'Si')
        $('#inSiAlerg').attr('checked', true);
    else
        $('#inNoAlerg').attr('checked', true);

    $('#inEspAlerg').val(result.data.sTipoAlergia);

    if (result.data.sHigieneBucal == 'Buena')
        $('#inBuena').attr('checked', true);
    else
        $('#inMala').attr('checked', true);

    //Habitos

    if (result.data.sBricomania == 'Si')
        $('#inBrico').attr('checked', true);

    if (result.data.sContrac_Musc == 'Si')
        $('#inConMus').attr('checked', true);

    if (result.data.sHabi_Mordi == 'Si')
        $('#inMordida').attr('checked', true);

    if (result.data.sResp_Bucal == 'Si')
        $('#inRespBucal').attr('checked', true);

    if (result.data.sAlimentacion == 'Si')
        $('#inAliBuena').attr('checked', true);
    else
        $('#inAliMala').attr('checked', true);

    if (result.data.sChupa_Labios == 'Si')
        $('#inCHLabio').attr('checked', true);

    if (result.data.sChupa_Lengua == 'Si')
        $('#inCHLengua').attr('checked', true);

    if (result.data.sChupa_Dedos == 'Si')
        $('#inCHDedos').attr('checked', true);

    if (result.data.iFrecuencia != null)
        $('#inFrecuencia').val(result.data.iFrecuencia);
    else
        $('#inFrecuencia').val(0);

    //Adicional

    if (result.data.sRechiApri == 'Si')
        $('#inSiRechApri').attr('checked', true);
    else
        $('#inNoRechApri').attr('checked', true);

    if (result.data.sTratEncias == 'Si')
        $('#inSiTratEncias').attr('checked', true);
    else
        $('#inNoTratEncias').attr('checked', true);

    if (result.data.sTrataEncias == 'Si')
        $('#inSiCiruEncias').attr('checked', true);
    else
        $('#inNoCiruEncias').attr('checked', true);

    if (result.data.sOriHigBucal == 'Si')
        $('#inSiHigiene').attr('checked', true);
    else
        $('#inNoHigiene').attr('checked', true);

    if (result.data.sHemorragiaBucal == 'Si')
        $('#inSiHemorragia').attr('checked', true);
    else
        $('#inNoHemorragia').attr('checked', true);

    $('#inVecCepi').val(result.data.iCepillado);

    if (result.data.sTipoCepillo == 'Duro')
        $('#inDuro').attr('checked', true);
    else
        if (result.data.sTipoCepillo == 'Medio')
            $('#inMedio').attr('checked', true);
        else
            if (result.data.sTipoCepillo == 'Suave')
                $('#inSuave').attr('checked', true);
            else
                if (result.data.sTipoCepillo == 'UltraSuave')
                    $('#inUltraSuave').attr('checked', true);

    //D11
    if (result.data.sD11 == 'Caries')
        $('#inCaries11').attr('checked', true);
    else
        if (result.data.sD11 == 'Amalgama')
            $('#inAmalgama11').attr('checked', true);
        else
            if (result.data.sD11 == 'Ausente')
                $('#inAusente11').attr('checked', true);
            else
                if (result.data.sD11 == 'Fija')
                    $('#inFija11').attr('checked', true);
                else
                    if (result.data.sD11 == 'Extraccion')
                        $('#inExtraccion11').attr('checked', true);

    //D12
    if (result.data.sD12 == 'Caries')
        $('#inCaries12').attr('checked', true);
    else
        if (result.data.sD12 == 'Amalgama')
            $('#inAmalgama12').attr('checked', true);
        else
            if (result.data.sD12 == 'Ausente')
                $('#inAusente12').attr('checked', true);
            else
                if (result.data.sD12 == 'Fija')
                    $('#inFija12').attr('checked', true);
                else
                    if (result.data.sD12 == 'Extraccion')
                        $('#inExtraccion12').attr('checked', true);

    //D13
    if (result.data.sD13 == 'Caries')
        $('#inCaries13').attr('checked', true);
    else
        if (result.data.sD13 == 'Amalgama')
            $('#inAmalgama13').attr('checked', true);
        else
            if (result.data.sD13 == 'Ausente')
                $('#inAusente13').attr('checked', true);
            else
                if (result.data.sD13 == 'Fija')
                    $('#inFija13').attr('checked', true);
                else
                    if (result.data.sD13 == 'Extraccion')
                        $('#inExtraccion13').attr('checked', true);

    //D14
    if (result.data.sD14 == 'Caries')
        $('#inCaries14').attr('checked', true);
    else
        if (result.data.sD14 == 'Amalgama')
            $('#inAmalgama14').attr('checked', true);
        else
            if (result.data.sD14 == 'Ausente')
                $('#inAusente14').attr('checked', true);
            else
                if (result.data.sD14 == 'Fija')
                    $('#inFija14').attr('checked', true);
                else
                    if (result.data.sD14 == 'Extraccion')
                        $('#inExtraccion14').attr('checked', true);

    //D15
    if (result.data.sD15 == 'Caries')
        $('#inCaries15').attr('checked', true);
    else
        if (result.data.sD15 == 'Amalgama')
            $('#inAmalgama15').attr('checked', true);
        else
            if (result.data.sD15 == 'Ausente')
                $('#inAusente15').attr('checked', true);
            else
                if (result.data.sD15 == 'Fija')
                    $('#inFija15').attr('checked', true);
                else
                    if (result.data.sD15 == 'Extraccion')
                        $('#inExtraccion15').attr('checked', true);

    //D16
    if (result.data.sD16 == 'Caries')
        $('#inCaries16').attr('checked', true);
    else
        if (result.data.sD16 == 'Amalgama')
            $('#inAmalgama16').attr('checked', true);
        else
            if (result.data.sD16 == 'Ausente')
                $('#inAusente16').attr('checked', true);
            else
                if (result.data.sD16 == 'Fija')
                    $('#inFija16').attr('checked', true);
                else
                    if (result.data.sD16 == 'Extraccion')
                        $('#inExtraccion16').attr('checked', true);

    //D17
    if (result.data.sD17 == 'Caries')
        $('#inCaries17').attr('checked', true);
    else
        if (result.data.sD17 == 'Amalgama')
            $('#inAmalgama17').attr('checked', true);
        else
            if (result.data.sD17 == 'Ausente')
                $('#inAusente17').attr('checked', true);
            else
                if (result.data.sD17 == 'Fija')
                    $('#inFija17').attr('checked', true);
                else
                    if (result.data.sD17 == 'Extraccion')
                        $('#inExtraccion17').attr('checked', true);

    //D18
    if (result.data.sD18 == 'Caries')
        $('#inCaries18').attr('checked', true);
    else
        if (result.data.sD18 == 'Amalgama')
            $('#inAmalgama18').attr('checked', true);
        else
            if (result.data.sD18 == 'Ausente')
                $('#inAusente18').attr('checked', true);
            else
                if (result.data.sD18 == 'Fija')
                    $('#inFija18').attr('checked', true);
                else
                    if (result.data.sD18 == 'Extraccion')
                        $('#inExtraccion18').attr('checked', true);

    //D21
    if (result.data.sD21 == 'Caries')
        $('#inCaries21').attr('checked', true);
    else
        if (result.data.sD21 == 'Amalgama')
            $('#inAmalgama21').attr('checked', true);
        else
            if (result.data.sD21 == 'Ausente')
                $('#inAusente21').attr('checked', true);
            else
                if (result.data.sD21 == 'Fija')
                    $('#inFija21').attr('checked', true);
                else
                    if (result.data.sD21 == 'Extraccion')
                        $('#inExtraccion21').attr('checked', true);

    //D22
    if (result.data.sD22 == 'Caries')
        $('#inCaries22').attr('checked', true);
    else
        if (result.data.sD22 == 'Amalgama')
            $('#inAmalgama22').attr('checked', true);
        else
            if (result.data.sD22 == 'Ausente')
                $('#inAusente22').attr('checked', true);
            else
                if (result.data.sD22 == 'Fija')
                    $('#inFija22').attr('checked', true);
                else
                    if (result.data.sD22 == 'Extraccion')
                        $('#inExtraccion22').attr('checked', true);

    //D23
    if (result.data.sD23 == 'Caries')
        $('#inCaries23').attr('checked', true);
    else
        if (result.data.sD23 == 'Amalgama')
            $('#inAmalgama23').attr('checked', true);
        else
            if (result.data.sD23 == 'Ausente')
                $('#inAusente23').attr('checked', true);
            else
                if (result.data.sD23 == 'Fija')
                    $('#inFija23').attr('checked', true);
                else
                    if (result.data.sD23 == 'Extraccion')
                        $('#inExtraccion23').attr('checked', true);

    //D24
    if (result.data.sD24 == 'Caries')
        $('#inCaries24').attr('checked', true);
    else
        if (result.data.sD24 == 'Amalgama')
            $('#inAmalgama24').attr('checked', true);
        else
            if (result.data.sD24 == 'Ausente')
                $('#inAusente24').attr('checked', true);
            else
                if (result.data.sD24 == 'Fija')
                    $('#inFija24').attr('checked', true);
                else
                    if (result.data.sD24 == 'Extraccion')
                        $('#inExtraccion24').attr('checked', true);

    //D25
    if (result.data.sD25 == 'Caries')
        $('#inCaries25').attr('checked', true);
    else
        if (result.data.sD25 == 'Amalgama')
            $('#inAmalgama25').attr('checked', true);
        else
            if (result.data.sD25 == 'Ausente')
                $('#inAusente25').attr('checked', true);
            else
                if (result.data.sD25 == 'Fija')
                    $('#inFija25').attr('checked', true);
                else
                    if (result.data.sD25 == 'Extraccion')
                        $('#inExtraccion25').attr('checked', true);

    //D26
    if (result.data.sD26 == 'Caries')
        $('#inCaries26').attr('checked', true);
    else
        if (result.data.sD26 == 'Amalgama')
            $('#inAmalgama26').attr('checked', true);
        else
            if (result.data.sD26 == 'Ausente')
                $('#inAusente26').attr('checked', true);
            else
                if (result.data.sD26 == 'Fija')
                    $('#inFija26').attr('checked', true);
                else
                    if (result.data.sD26 == 'Extraccion')
                        $('#inExtraccion26').attr('checked', true);

    //D27
    if (result.data.sD27 == 'Caries')
        $('#inCaries27').attr('checked', true);
    else
        if (result.data.sD27 == 'Amalgama')
            $('#inAmalgama27').attr('checked', true);
        else
            if (result.data.sD27 == 'Ausente')
                $('#inAusente27').attr('checked', true);
            else
                if (result.data.sD27 == 'Fija')
                    $('#inFija27').attr('checked', true);
                else
                    if (result.data.sD27 == 'Extraccion')
                        $('#inExtraccion27').attr('checked', true);

    //D28
    if (result.data.sD28 == 'Caries')
        $('#inCaries28').attr('checked', true);
    else
        if (result.data.sD28 == 'Amalgama')
            $('#inAmalgama28').attr('checked', true);
        else
            if (result.data.sD28 == 'Ausente')
                $('#inAusente28').attr('checked', true);
            else
                if (result.data.sD28 == 'Fija')
                    $('#inFija28').attr('checked', true);
                else
                    if (result.data.sD28 == 'Extraccion')
                        $('#inExtraccion28').attr('checked', true);

    //D31
    if (result.data.sD31 == 'Caries')
        $('#inCaries31').attr('checked', true);
    else
        if (result.data.sD31 == 'Amalgama')
            $('#inAmalgama31').attr('checked', true);
        else
            if (result.data.sD31 == 'Ausente')
                $('#inAusente31').attr('checked', true);
            else
                if (result.data.sD31 == 'Fija')
                    $('#inFija31').attr('checked', true);
                else
                    if (result.data.sD31 == 'Extraccion')
                        $('#inExtraccion31').attr('checked', true);

    //D32
    if (result.data.sD32 == 'Caries')
        $('#inCaries32').attr('checked', true);
    else
        if (result.data.sD32 == 'Amalgama')
            $('#inAmalgama32').attr('checked', true);
        else
            if (result.data.sD32 == 'Ausente')
                $('#inAusente32').attr('checked', true);
            else
                if (result.data.sD32 == 'Fija')
                    $('#inFija32').attr('checked', true);
                else
                    if (result.data.sD32 == 'Extraccion')
                        $('#inExtraccion32').attr('checked', true);

    //D33
    if (result.data.sD33 == 'Caries')
        $('#inCaries33').attr('checked', true);
    else
        if (result.data.sD33 == 'Amalgama')
            $('#inAmalgama33').attr('checked', true);
        else
            if (result.data.sD33 == 'Ausente')
                $('#inAusente33').attr('checked', true);
            else
                if (result.data.sD33 == 'Fija')
                    $('#inFija33').attr('checked', true);
                else
                    if (result.data.sD33 == 'Extraccion')
                        $('#inExtraccion33').attr('checked', true);

    //D34
    if (result.data.sD34 == 'Caries')
        $('#inCaries34').attr('checked', true);
    else
        if (result.data.sD34 == 'Amalgama')
            $('#inAmalgama34').attr('checked', true);
        else
            if (result.data.sD34 == 'Ausente')
                $('#inAusente34').attr('checked', true);
            else
                if (result.data.sD34 == 'Fija')
                    $('#inFija34').attr('checked', true);
                else
                    if (result.data.sD34 == 'Extraccion')
                        $('#inExtraccion34').attr('checked', true);

    //D35
    if (result.data.sD35 == 'Caries')
        $('#inCaries35').attr('checked', true);
    else
        if (result.data.sD35 == 'Amalgama')
            $('#inAmalgama35').attr('checked', true);
        else
            if (result.data.sD35 == 'Ausente')
                $('#inAusente35').attr('checked', true);
            else
                if (result.data.sD35 == 'Fija')
                    $('#inFija35').attr('checked', true);
                else
                    if (result.data.sD35 == 'Extraccion')
                        $('#inExtraccion35').attr('checked', true);

    //D36
    if (result.data.sD36 == 'Caries')
        $('#inCaries36').attr('checked', true);
    else
        if (result.data.sD36 == 'Amalgama')
            $('#inAmalgama36').attr('checked', true);
        else
            if (result.data.sD36 == 'Ausente')
                $('#inAusente36').attr('checked', true);
            else
                if (result.data.sD36 == 'Fija')
                    $('#inFija36').attr('checked', true);
                else
                    if (result.data.sD36 == 'Extraccion')
                        $('#inExtraccion36').attr('checked', true);

    //D37
    if (result.data.sD37 == 'Caries')
        $('#inCaries37').attr('checked', true);
    else
        if (result.data.sD37 == 'Amalgama')
            $('#inAmalgama37').attr('checked', true);
        else
            if (result.data.sD37 == 'Ausente')
                $('#inAusente37').attr('checked', true);
            else
                if (result.data.sD37 == 'Fija')
                    $('#inFija37').attr('checked', true);
                else
                    if (result.data.sD37 == 'Extraccion')
                        $('#inExtraccion37').attr('checked', true);

    //D38
    if (result.data.sD38 == 'Caries')
        $('#inCaries38').attr('checked', true);
    else
        if (result.data.sD38 == 'Amalgama')
            $('#inAmalgama38').attr('checked', true);
        else
            if (result.data.sD38 == 'Ausente')
                $('#inAusente38').attr('checked', true);
            else
                if (result.data.sD38 == 'Fija')
                    $('#inFija38').attr('checked', true);
                else
                    if (result.data.sD38 == 'Extraccion')
                        $('#inExtraccion38').attr('checked', true);

    //D41
    if (result.data.sD41 == 'Caries')
        $('#inCaries41').attr('checked', true);
    else
        if (result.data.sD41 == 'Amalgama')
            $('#inAmalgama41').attr('checked', true);
        else
            if (result.data.sD41 == 'Ausente')
                $('#inAusente41').attr('checked', true);
            else
                if (result.data.sD41 == 'Fija')
                    $('#inFija41').attr('checked', true);
                else
                    if (result.data.sD41 == 'Extraccion')
                        $('#inExtraccion41').attr('checked', true);

    //D42
    if (result.data.sD42 == 'Caries')
        $('#inCaries42').attr('checked', true);
    else
        if (result.data.sD42 == 'Amalgama')
            $('#inAmalgama42').attr('checked', true);
        else
            if (result.data.sD42 == 'Ausente')
                $('#inAusente42').attr('checked', true);
            else
                if (result.data.sD42 == 'Fija')
                    $('#inFija42').attr('checked', true);
                else
                    if (result.data.sD42 == 'Extraccion')
                        $('#inExtraccion42').attr('checked', true);

    //D43
    if (result.data.sD43 == 'Caries')
        $('#inCaries43').attr('checked', true);
    else
        if (result.data.sD43 == 'Amalgama')
            $('#inAmalgama43').attr('checked', true);
        else
            if (result.data.sD43 == 'Ausente')
                $('#inAusente43').attr('checked', true);
            else
                if (result.data.sD43 == 'Fija')
                    $('#inFija43').attr('checked', true);
                else
                    if (result.data.sD43 == 'Extraccion')
                        $('#inExtraccion43').attr('checked', true);

    //D44
    if (result.data.sD44 == 'Caries')
        $('#inCaries44').attr('checked', true);
    else
        if (result.data.sD44 == 'Amalgama')
            $('#inAmalgama44').attr('checked', true);
        else
            if (result.data.sD44 == 'Ausente')
                $('#inAusente44').attr('checked', true);
            else
                if (result.data.sD44 == 'Fija')
                    $('#inFija44').attr('checked', true);
                else
                    if (result.data.sD44 == 'Extraccion')
                        $('#inExtraccion44').attr('checked', true);

    //D45
    if (result.data.sD45 == 'Caries')
        $('#inCaries45').attr('checked', true);
    else
        if (result.data.sD45 == 'Amalgama')
            $('#inAmalgama45').attr('checked', true);
        else
            if (result.data.sD45 == 'Ausente')
                $('#inAusente45').attr('checked', true);
            else
                if (result.data.sD45 == 'Fija')
                    $('#inFija45').attr('checked', true);
                else
                    if (result.data.sD45 == 'Extraccion')
                        $('#inExtraccion45').attr('checked', true);

    //D46
    if (result.data.sD46 == 'Caries')
        $('#inCaries46').attr('checked', true);
    else
        if (result.data.sD46 == 'Amalgama')
            $('#inAmalgama46').attr('checked', true);
        else
            if (result.data.sD46 == 'Ausente')
                $('#inAusente46').attr('checked', true);
            else
                if (result.data.sD46 == 'Fija')
                    $('#inFija46').attr('checked', true);
                else
                    if (result.data.sD46 == 'Extraccion')
                        $('#inExtraccion46').attr('checked', true);

    //D47
    if (result.data.sD47 == 'Caries')
        $('#inCaries47').attr('checked', true);
    else
        if (result.data.sD47 == 'Amalgama')
            $('#inAmalgama47').attr('checked', true);
        else
            if (result.data.sD47 == 'Ausente')
                $('#inAusente47').attr('checked', true);
            else
                if (result.data.sD47 == 'Fija')
                    $('#inFija47').attr('checked', true);
                else
                    if (result.data.sD47 == 'Extraccion')
                        $('#inExtraccion47').attr('checked', true);

    //D48
    if (result.data.sD48 == 'Caries')
        $('#inCaries48').attr('checked', true);
    else
        if (result.data.sD48 == 'Amalgama')
            $('#inAmalgama48').attr('checked', true);
        else
            if (result.data.sD48 == 'Ausente')
                $('#inAusente48').attr('checked', true);
            else
                if (result.data.sD48 == 'Fija')
                    $('#inFija48').attr('checked', true);
                else
                    if (result.data.sD48 == 'Extraccion')
                        $('#inExtraccion48').attr('checked', true);
}

var d11 = null, d12 = null, d13 = null, d14 = null, d15 = null, d16 = null, d17 = null, d18 = null;
var d21 = null, d22 = null, d23 = null, d24 = null, d25 = null, d26 = null, d27 = null, d28 = null;
var d31 = null, d32 = null, d33 = null, d34 = null, d35 = null, d36 = null, d37 = null, d38 = null;
var d41 = null, d42 = null, d43 = null, d44 = null, d45 = null, d46 = null, d47 = null, d48 = null;

function D11() {

    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle11').innerText = 'D11';

    $('#ParaSuper11').show('slow');

    $("input[id=inCaries11]").click(function () {
        d11 = 'Caries';
    });

    $("input[id=inAmalgama11]").click(function () {
        d11 = 'Amalgama';
    });

    $("input[id=inAusente11]").click(function () {
        d11 = 'Ausente';
    });

    $("input[id=inFija11]").click(function () {
        d11 = 'Fija';
    });

    $("input[id=inExtraccion11]").click(function () {
        d11 = 'Extraccion';
    });

    $('#AcepParadon11').click(function () {
        $('#ParaSuper11').hide('slow');
    });
}

function D12() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle12').innerText = 'D12';

    $('#ParaSuper12').show('slow');

    $("input[id=inCaries12]").click(function () {
        d12 = 'Caries';
    });

    $("input[id=inAmalgama12]").click(function () {
        d12 = 'Amalgama';
    });

    $("input[id=inAusente12]").click(function () {
        d12 = 'Ausente';
    });

    $("input[id=inFija12]").click(function () {
        d12 = 'Fija';
    });

    $("input[id=inExtraccion12]").click(function () {
        d12 = 'Extraccion';
    });

    $('#AcepParadon12').click(function () {
        $('#ParaSuper12').hide('slow');
    });
}

function D13() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle13').innerText = 'D13';

    $('#ParaSuper13').show('slow');

    $("input[id=inCaries13]").click(function () {
        d13 = 'Caries';
    });

    $("input[id=inAmalgama13]").click(function () {
        d13 = 'Amalgama';
    });

    $("input[id=inAusente13]").click(function () {
        d13 = 'Ausente';
    });

    $("input[id=inFija13]").click(function () {
        d13 = 'Fija';
    });

    $("input[id=inExtraccion13]").click(function () {
        d13 = 'Extraccion';
    });

    $('#AcepParadon13').click(function () {
        $('#ParaSuper13').hide('slow');
    });
}

function D14() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle14').innerText = 'D14';

    $('#ParaSuper14').show('slow');

    $("input[id=inCaries14]").click(function () {
        d14 = 'Caries';
    });

    $("input[id=inAmalgama14]").click(function () {
        d14 = 'Amalgama';
    });

    $("input[id=inAusente14]").click(function () {
        d14 = 'Ausente';
    });

    $("input[id=inFija14]").click(function () {
        d14 = 'Fija';
    });

    $("input[id=inExtraccion14]").click(function () {
        d14 = 'Extraccion';
    });

    $('#AcepParadon14').click(function () {
        $('#ParaSuper14').hide('slow');
    });
}

function D15() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle15').innerText = 'D15';

    $('#ParaSuper15').show('slow');

    $("input[id=inCaries15]").click(function () {
        d15 = 'Caries';
    });

    $("input[id=inAmalgama15]").click(function () {
        d15 = 'Amalgama';
    });

    $("input[id=inAusente15]").click(function () {
        d15 = 'Ausente';
    });

    $("input[id=inFija15]").click(function () {
        d15 = 'Fija';
    });

    $("input[id=inExtraccion15]").click(function () {
        d15 = 'Extraccion';
    });

    $('#AcepParadon15').click(function () {
        $('#ParaSuper15').hide('slow');
    });
}

function D16() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle16').innerText = 'D16';

    $('#ParaSuper16').show('slow');

    $("input[id=inCaries16]").click(function () {
        d16 = 'Caries';
    });

    $("input[id=inAmalgama16]").click(function () {
        d16 = 'Amalgama';
    });

    $("input[id=inAusente16]").click(function () {
        d16 = 'Ausente';
    });

    $("input[id=inFija16]").click(function () {
        d16 = 'Fija';
    });

    $("input[id=inExtraccion16]").click(function () {
        d16 = 'Extraccion';
    });

    $('#AcepParadon16').click(function () {
        $('#ParaSuper16').hide('slow');
    });
}

function D17() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle17').innerText = 'D17';

    $('#ParaSuper17').show('slow');

    $("input[id=inCaries17]").click(function () {
        d17 = 'Caries';
    });

    $("input[id=inAmalgama17]").click(function () {
        d17 = 'Amalgama';
    });

    $("input[id=inAusente17]").click(function () {
        d17 = 'Ausente';
    });

    $("input[id=inFija17]").click(function () {
        d17 = 'Fija';
    });

    $("input[id=inExtraccion17]").click(function () {
        d17 = 'Extraccion';
    });

    $('#AcepParadon17').click(function () {
        $('#ParaSuper17').hide('slow');
    });
}

function D18() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle18').innerText = 'D18';

    $('#ParaSuper18').show('slow');

    $("input[id=inCaries18]").click(function () {
        d18 = 'Caries';
    });

    $("input[id=inAmalgama18]").click(function () {
        d18 = 'Amalgama';
    });

    $("input[id=inAusente18]").click(function () {
        d18 = 'Ausente';
    });

    $("input[id=inFija18]").click(function () {
        d18 = 'Fija';
    });

    $("input[id=inExtraccion18]").click(function () {
        d18 = 'Extraccion';
    });

    $('#AcepParadon18').click(function () {
        $('#ParaSuper18').hide('slow');
    });
}

function D21() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle21').innerText = 'D21';

    $('#ParaSuper21').show('slow');

    $("input[id=inCaries21]").click(function () {
        d21 = 'Caries';
    });

    $("input[id=inAmalgama21]").click(function () {
        d21 = 'Amalgama';
    });

    $("input[id=inAusente21]").click(function () {
        d21 = 'Ausente';
    });

    $("input[id=inFija21]").click(function () {
        d21 = 'Fija';
    });

    $("input[id=inExtraccion21]").click(function () {
        d21 = 'Extraccion';
    });

    $('#AcepParadon21').click(function () {
        $('#ParaSuper21').hide('slow');
    });
}

function D22() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle22').innerText = 'D22';

    $('#ParaSuper22').show('slow');

    $("input[id=inCaries22]").click(function () {
        d22 = 'Caries';
    });

    $("input[id=inAmalgama22]").click(function () {
        d22 = 'Amalgama';
    });

    $("input[id=inAusente22]").click(function () {
        d22 = 'Ausente';
    });

    $("input[id=inFija22]").click(function () {
        d22 = 'Fija';
    });

    $("input[id=inExtraccion22]").click(function () {
        d22 = 'Extraccion';
    });

    $('#AcepParadon22').click(function () {
        $('#ParaSuper22').hide('slow');
    });
}

function D23() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle23').innerText = 'D23';

    $('#ParaSuper23').show('slow');

    $("input[id=inCaries23]").click(function () {
        d23 = 'Caries';
    });

    $("input[id=inAmalgama23]").click(function () {
        d23 = 'Amalgama';
    });

    $("input[id=inAusente23]").click(function () {
        d23 = 'Ausente';
    });

    $("input[id=inFija23]").click(function () {
        d23 = 'Fija';
    });

    $("input[id=inExtraccion23]").click(function () {
        d23 = 'Extraccion';
    });

    $('#AcepParadon23').click(function () {
        $('#ParaSuper23').hide('slow');
    });
}

function D24() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle24').innerText = 'D24';

    $('#ParaSuper24').show('slow');

    $("input[id=inCaries24]").click(function () {
        d24 = 'Caries';
    });

    $("input[id=inAmalgama24]").click(function () {
        d24 = 'Amalgama';
    });

    $("input[id=inAusente24]").click(function () {
        d24 = 'Ausente';
    });

    $("input[id=inFija24]").click(function () {
        d24 = 'Fija';
    });

    $("input[id=inExtraccion24]").click(function () {
        d24 = 'Extraccion';
    });

    $('#AcepParadon24').click(function () {
        $('#ParaSuper24').hide('slow');
    });
}

function D25() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle25').innerText = 'D25';

    $('#ParaSuper25').show('slow');

    $("input[id=inCaries25]").click(function () {
        d25 = 'Caries';
    });

    $("input[id=inAmalgama25]").click(function () {
        d25 = 'Amalgama';
    });

    $("input[id=inAusente25]").click(function () {
        d25 = 'Ausente';
    });

    $("input[id=inFija25]").click(function () {
        d25 = 'Fija';
    });

    $("input[id=inExtraccion25]").click(function () {
        d25 = 'Extraccion';
    });

    $('#AcepParadon25').click(function () {
        $('#ParaSuper25').hide('slow');
    });
}

function D26() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle26').innerText = 'D26';

    $('#ParaSuper26').show('slow');

    $("input[id=inCaries26]").click(function () {
        d26 = 'Caries';
    });

    $("input[id=inAmalgama26]").click(function () {
        d26 = 'Amalgama';
    });

    $("input[id=inAusente26]").click(function () {
        d26 = 'Ausente';
    });

    $("input[id=inFija26]").click(function () {
        d26 = 'Fija';
    });

    $("input[id=inExtraccion26]").click(function () {
        d26 = 'Extraccion';
    });

    $('#AcepParadon26').click(function () {
        $('#ParaSuper26').hide('slow');
    });
}

function D27() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle27').innerText = 'D27';

    $('#ParaSuper27').show('slow');

    $("input[id=inCaries27]").click(function () {
        d27 = 'Caries';
    });

    $("input[id=inAmalgama27]").click(function () {
        d27 = 'Amalgama';
    });

    $("input[id=inAusente27]").click(function () {
        d27 = 'Ausente';
    });

    $("input[id=inFija27]").click(function () {
        d27 = 'Fija';
    });

    $("input[id=inExtraccion27]").click(function () {
        d27 = 'Extraccion';
    });

    $('#AcepParadon27').click(function () {
        $('#ParaSuper27').hide('slow');
    });
}

function D28() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    document.querySelector('#ParaTitle28').innerText = 'D28';

    $('#ParaSuper28').show('slow');

    $("input[id=inCaries28]").click(function () {
        d28 = 'Caries';
    });

    $("input[id=inAmalgama28]").click(function () {
        d28 = 'Amalgama';
    });

    $("input[id=inAusente28]").click(function () {
        d28 = 'Ausente';
    });

    $("input[id=inFija28]").click(function () {
        d28 = 'Fija';
    });

    $("input[id=inExtraccion28]").click(function () {
        d28 = 'Extraccion';
    });

    $('#AcepParadon28').click(function () {
        $('#ParaSuper28').hide('slow');
    });
}

function D31() {

    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle31').innerText = 'D31';

    $('#ParaInfe31').show('slow');

    $("input[id=inCaries31]").click(function () {
        d31 = 'Caries';
    });

    $("input[id=inAmalgama31]").click(function () {
        d31 = 'Amalgama';
    });

    $("input[id=inAusente31]").click(function () {
        d31 = 'Ausente';
    });

    $("input[id=inFija31]").click(function () {
        d31 = 'Fija';
    });

    $("input[id=inExtraccion31]").click(function () {
        d31 = 'Extraccion';
    });

    $('#AcepParadon31').click(function () {
        $('#ParaInfe31').hide('slow');
    });
}

function D32() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle32').innerText = 'D32';

    $('#ParaInfe32').show('slow');

    $("input[id=inCaries32]").click(function () {
        d32 = 'Caries';
    });

    $("input[id=inAmalgama32]").click(function () {
        d32 = 'Amalgama';
    });

    $("input[id=inAusente32]").click(function () {
        d32 = 'Ausente';
    });

    $("input[id=inFija32]").click(function () {
        d32 = 'Fija';
    });

    $("input[id=inExtraccion32]").click(function () {
        d32 = 'Extraccion';
    });

    $('#AcepParadon32').click(function () {
        $('#ParaInfe32').hide('slow');
    });
}

function D33() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle33').innerText = 'D33';

    $('#ParaInfe33').show('slow');

    $("input[id=inCarie33]").click(function () {
        d33 = 'Caries';
    });

    $("input[id=inAmalgama33]").click(function () {
        d33 = 'Amalgama';
    });

    $("input[id=inAusente33]").click(function () {
        d33 = 'Ausente';
    });

    $("input[id=inFija33]").click(function () {
        d33 = 'Fija';
    });

    $("input[id=inExtraccion33]").click(function () {
        d33 = 'Extraccion';
    });

    $('#AcepParadon33').click(function () {
        $('#ParaInfe33').hide('slow');
    });
}

function D34() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle34').innerText = 'D34';

    $('#ParaInfe34').show('slow');

    $("input[id=inCaries34]").click(function () {
        d34 = 'Caries';
    });

    $("input[id=inAmalgama34]").click(function () {
        d34 = 'Amalgama';
    });

    $("input[id=inAusente34]").click(function () {
        d34 = 'Ausente';
    });

    $("input[id=inFija34]").click(function () {
        d34 = 'Fija';
    });

    $("input[id=inExtraccion34]").click(function () {
        d34 = 'Extraccion';
    });

    $('#AcepParadon34').click(function () {
        $('#ParaInfe34').hide('slow');
    });
}

function D35() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle35').innerText = 'D35';

    $('#ParaInfe35').show('slow');

    $("input[id=inCaries35]").click(function () {
        d35 = 'Caries';
    });

    $("input[id=inAmalgama35]").click(function () {
        d35 = 'Amalgama';
    });

    $("input[id=inAusente35]").click(function () {
        d35 = 'Ausente';
    });

    $("input[id=inFija35]").click(function () {
        d35 = 'Fija';
    });

    $("input[id=inExtraccion35]").click(function () {
        d35 = 'Extraccion';
    });

    $('#AcepParadon35').click(function () {
        $('#ParaInfe35').hide('slow');
    });
}

function D36() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle36').innerText = 'D36';

    $('#ParaInfe36').show('slow');

    $("input[id=inCaries36]").click(function () {
        d36 = 'Caries';
    });

    $("input[id=inAmalgama36]").click(function () {
        d36 = 'Amalgama';
    });

    $("input[id=inAusente36]").click(function () {
        d36 = 'Ausente';
    });

    $("input[id=inFija36]").click(function () {
        d36 = 'Fija';
    });

    $("input[id=inExtraccion36]").click(function () {
        d36 = 'Extraccion';
    });

    $('#AcepParadon36').click(function () {
        $('#ParaInfe36').hide('slow');
    });
}

function D37() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle37').innerText = 'D37';

    $('#ParaInfe37').show('slow');

    $("input[id=inCaries37]").click(function () {
        d37 = 'Caries';
    });

    $("input[id=inAmalgama37]").click(function () {
        d37 = 'Amalgama';
    });

    $("input[id=inAusente37]").click(function () {
        d37 = 'Ausente';
    });

    $("input[id=inFija37]").click(function () {
        d37 = 'Fija';
    });

    $("input[id=inExtraccion37]").click(function () {
        d37 = 'Extraccion';
    });

    $('#AcepParadon37').click(function () {
        $('#ParaInfe37').hide('slow');
    });
}

function D38() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle38').innerText = 'D38';

    $('#ParaInfe38').show('slow');

    $("input[id=inCaries38]").click(function () {
        d38 = 'Caries';
    });

    $("input[id=inAmalgama38]").click(function () {
        d38 = 'Amalgama';
    });

    $("input[id=inAusente38]").click(function () {
        d38 = 'Ausente';
    });

    $("input[id=inFija38]").click(function () {
        d38 = 'Fija';
    });

    $("input[id=inExtraccion38]").click(function () {
        d38 = 'Extraccion';
    });

    $('#AcepParadon38').click(function () {
        $('#ParaInfe38').hide('slow');
    });
}

function D41() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle41').innerText = 'D41';

    $('#ParaInfe41').show('slow');

    $("input[id=inCaries41]").click(function () {
        d41 = 'Caries';
    });

    $("input[id=inAmalgama41]").click(function () {
        d41 = 'Amalgama';
    });

    $("input[id=inAusente41]").click(function () {
        d41 = 'Ausente';
    });

    $("input[id=inFija41]").click(function () {
        d41 = 'Fija';
    });

    $("input[id=inExtraccion41]").click(function () {
        d41 = 'Extraccion';
    });

    $('#AcepParadon41').click(function () {
        $('#ParaInfe41').hide('slow');
    });
}

function D42() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle42').innerText = 'D42';

    $('#ParaInfe42').show('slow');

    $("input[id=inCaries42]").click(function () {
        d42 = 'Caries';
    });

    $("input[id=inAmalgama42]").click(function () {
        d42 = 'Amalgama';
    });

    $("input[id=inAusente42]").click(function () {
        d42 = 'Ausente';
    });

    $("input[id=inFija42]").click(function () {
        d42 = 'Fija';
    });

    $("input[id=inExtraccion42]").click(function () {
        d42 = 'Extraccion';
    });

    $('#AcepParadon42').click(function () {
        $('#ParaInfe42').hide('slow');
    });
}

function D43() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle43').innerText = 'D43';

    $('#ParaInfe43').show('slow');

    $("input[id=inCaries43]").click(function () {
        d43 = 'Caries';
    });

    $("input[id=inAmalgama43]").click(function () {
        d43 = 'Amalgama';
    });

    $("input[id=inAusente43]").click(function () {
        d43 = 'Ausente';
    });

    $("input[id=inFija43]").click(function () {
        d43 = 'Fija';
    });

    $("input[id=inExtraccion43]").click(function () {
        d43 = 'Extraccion';
    });

    $('#AcepParadon43').click(function () {
        $('#ParaInfe43').hide('slow');
    });
}

function D44() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle44').innerText = 'D44';

    $('#ParaInfe44').show('slow');

    $("input[id=inCaries44]").click(function () {
        d44 = 'Caries';
    });

    $("input[id=inAmalgama44]").click(function () {
        d44 = 'Amalgama';
    });

    $("input[id=inAusente44]").click(function () {
        d44 = 'Ausente';
    });

    $("input[id=inFija44]").click(function () {
        d44 = 'Fija';
    });

    $("input[id=inExtraccion44]").click(function () {
        d44 = 'Extraccion';
    });

    $('#AcepParadon44').click(function () {
        $('#ParaInfe44').hide('slow');
    });
}

function D45() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');


    document.querySelector('#ParaTitle45').innerText = 'D45';

    $('#ParaInfe45').show('slow');

    $("input[id=inCaries45]").click(function () {
        d45 = 'Caries';
    });

    $("input[id=inAmalgama45]").click(function () {
        d45 = 'Amalgama';
    });

    $("input[id=inAusente45]").click(function () {
        d45 = 'Ausente';
    });

    $("input[id=inFija45]").click(function () {
        d45 = 'Fija';
    });

    $("input[id=inExtraccion45]").click(function () {
        d45 = 'Extraccion';
    });

    $('#AcepParadon45').click(function () {
        $('#ParaInfe45').hide('slow');
    });
}

function D46() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');


    document.querySelector('#ParaTitle46').innerText = 'D46';

    $('#ParaInfe46').show('slow');

    $("input[id=inCaries46]").click(function () {
        d46 = 'Caries';
    });

    $("input[id=inAmalgama46]").click(function () {
        d46 = 'Amalgama';
    });

    $("input[id=inAusente46]").click(function () {
        d46 = 'Ausente';
    });

    $("input[id=inFija46]").click(function () {
        d46 = 'Fija';
    });

    $("input[id=inExtraccion46]").click(function () {
        d46 = 'Extraccion';
    });

    $('#AcepParadon46').click(function () {
        $('#ParaInfe46').hide('slow');
    });
}

function D47() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle47').innerText = 'D47';

    $('#ParaInfe47').show('slow');

    $("input[id=inCaries47]").click(function () {
        d47 = 'Caries';
    });

    $("input[id=inAmalgama47]").click(function () {
        d47 = 'Amalgama';
    });

    $("input[id=inAusente47]").click(function () {
        d47 = 'Ausente';
    });

    $("input[id=inFija47]").click(function () {
        d47 = 'Fija';
    });

    $("input[id=inExtraccion47]").click(function () {
        d47 = 'Extraccion';
    });

    $('#AcepParadon47').click(function () {
        $('#ParaInfe47').hide('slow');
    });
}

function D48() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    document.querySelector('#ParaTitle48').innerText = 'D48';

    $('#ParaInfe48').show('slow');

    $("input[id=inCaries48]").click(function () {
        d48 = 'Caries';
    });

    $("input[id=inAmalgama48]").click(function () {
        d48 = 'Amalgama';
    });

    $("input[id=inAusente48]").click(function () {
        d48 = 'Ausente';
    });

    $("input[id=inFija48]").click(function () {
        d48 = 'Fija';
    });

    $("input[id=inExtraccion48]").click(function () {
        d48 = 'Extraccion';
    });

    $('#AcepParadon48').click(function () {
        $('#ParaInfe48').hide('slow');
    });
}

function validador(id) {

    var s, apre, apcard, apdig, nerv, coa, desm, vermar, diabe, tiro, fire, hiper;
    var trat, Ttrat, Tmedi, Thospi;
    var duro, rx, encia, epite, lengua, pulpa, velo, carrillo, mordida, mordabi, desbru, anoclu;
    var emba, anti, fuma, bebe, droga, aler, higi;
    var brico, contmu, habmord, rebuc, chulab, chulen, chuded, ali;
    var rechi, Tencia, Cencia, OHbucal, hemo, cepi;

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

    //Tejido

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
            if ($('#inSuave').prop('checked')) {
                cepi = 'Suave';
            } else {
                if ($('#inUltraSuave').prop('checked')) {
                    cepi = 'UltraSuave';
                }
            }
        }
    }

    if (validaCampos(s, trat, Ttrat, Tmedi, Thospi, duro, rx, mordida, emba, anti, fuma, bebe, droga, aler, higi, ali, rechi, Tencia,
        Cencia, OHbucal, hemo, cepi) == true) {

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
            sBricomania: brico,
            sContrac_Musc: contmu,
            sHabi_Mordi: habmord,
            sResp_Bucal: rebuc,
            sChupa_Labios: chulab,
            sChupa_Lengua: chulen,
            sChupa_Dedos: chuded,
            iFrecuencia: $('#inFrecuencia').val(),
            sAlimentacion: ali,
            sRechiApri: rechi,
            sTrataEncias: Tencia,
            sOriHigBucal: OHbucal,
            sCirugiaEncias: Cencia,
            sHemorragiaBucal: hemo,
            iCepillado: $('#inVecCepi').val(),
            sTipoCepillo: cepi,
            sD11: d11,
            sD12: d12,
            sD13: d13,
            sD14: d14,
            sD15: d15,
            sD16: d16,
            sD17: d17,
            sD18: d18,
            sD21: d21,
            sD22: d22,
            sD23: d23,
            sD24: d24,
            sD25: d25,
            sD26: d26,
            sD27: d27,
            sD28: d28,
            sD31: d31,
            sD32: d32,
            sD33: d33,
            sD34: d34,
            sD35: d35,
            sD36: d36,
            sD37: d37,
            sD38: d38,
            sD41: d41,
            sD42: d42,
            sD43: d43,
            sD44: d44,
            sD45: d45,
            sD46: d46,
            sD47: d47,
            sD48: d48,
            iOdontologo: parseInt(id)
        });
        $('#EditaPaci').attr("disabled", true);
        LlamadoPaciente(datosPaciente);
    }
}

function validaCampos(s, trat, Ttrat, Tmedi, Thospi, duro, rx, mordida, emba, anti, fuma, bebe, droga, aler, higi, ali, rechi, Tencia,
    Cencia, OHbucal,hemo,cepi) {

    if ($('#inNombre').val() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Nombre Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if ($('#inPaterno').val() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Apellido Paterno Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if ($('#inMaterno').val() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Apellido Materno Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false
    }

    if ($('#inDomicilio').val() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Domicilio Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if ($('#inTelefono').val() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Teléfono Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if ($('#inCelular').val() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Celular Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if ($('#inFechaNac').val() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Fecha de Nacimiento Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (s == null) {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Sexo Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (trat == null) {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Tratamiento Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (trat == 'Si' && Ttrat == null) {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Tipo de Tratamiento Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (trat == 'Si' && $('#inNombreD').val() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Nombre del Doctor Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (trat == 'Si' && $('#inPaternoD').val() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Apellido Paterno del Doctor Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (trat == 'Si' && $('#inMaternoD').val() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Apellido Materno del Doctor Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (trat == 'Si' && $('#inTelD').val() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Teléfono del Doctor Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (trat == 'Si' && $('#inCelD').val() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Celular del Doctor Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (trat == 'Si' && $('#inFechaIni').val() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Inicia Tratamiento Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (trat == 'Si' && $('#inFechaFin').val() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Termina Tratamiento Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (Tmedi == null) {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Toma Medicamento Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (Tmedi == 'Si' && $('#inMesp').val() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Especifica Medicamento Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (Thospi == null) {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Hospitalizado Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (Thospi == 'Si' && $('#inMotivo').val() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Hospitalizado Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (duro == null) {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Duro Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (rx == null) {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Rx Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (mordida == null) {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Sobre Mordida Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (emba == null) {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Embarazo Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (emba == 'Si' && s == 'Masculino') {
        Swal.fire({
            icon: 'warning',
            title: 'Un Hombre No Puede Estar Embarazado',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (emba == 'Si' && $('#inMeses').val() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Meses de Embarazo Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (anti == null) {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Usa Anticonceptivos Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (anti == null && $('#inAntiTipo').val() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Tipo de Anticonceptivos Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (fuma == null) {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Fuma Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (bebe == null) {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Bebe Alcohol Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (droga == null) {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Consume Drogas Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (aler == null) {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Alergia Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (aler == 'Si' && $('#inEspAlerg').val() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Alergia Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (higi == null) {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Higiene Bucal Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (ali == null) {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Alimentación Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (rechi == null) {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Rechina o Aprieta los Dientes Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (Tencia == null) {
        Swal.fire({
            icon: 'warning',
            title: 'El Tratamiento de Encias Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (Cencia == null) {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Cirujía de Encias Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (OHbucal == null) {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Orientación de Higiene Bucal Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (hemo == null) {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Hemorragias en la Boca Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if ($('#inVecCepi').val() === "") {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Veces Cepillado Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    if (cepi == null) {
        Swal.fire({
            icon: 'warning',
            title: 'El Campo Tipo de Cepillo Está Vacío',
            showConfirmButton: false,
            timer: 1500
        });
        return false;
    }

    return true;
}

function LlamadoPaciente(datosPaciente) {

    var url = $('#urlEdiPaci').val();

    $.ajax({
        url: url,
        data: datosPaciente,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: SuccessPaciente,
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            Swal.fire({
                icon: 'error',
                title: 'Error Modificando Paciente',
                showConfirmButton: false,
                timer: 1500
            });
            $('#EditaPaci').attr("disabled", false);
        }
    });
}

function SuccessPaciente(data) {

    if (data.Exito) {
        var url = $('#urlModiPaci').val();
        Swal.fire({
            icon: 'success',
            title: 'Paciente Actualizado Correctamente',
            showConfirmButton: false,
            timer: 1500
        });
        window.location.href = url;
    }
    else if (data.Advertencia) {
        Swal.fire({
            icon: 'warning',
            title: 'Algo falló',
            showConfirmButton: false,
            timer: 1500
        });
        $('#EditaPaci').attr("disabled", false);
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Error Modificando Paciente',
            showConfirmButton: false,
            timer: 1500
        });
        $('#EditaPaci').attr("disabled", false);
    }
    $('#EditaPaci').attr("disabled", false);
}
