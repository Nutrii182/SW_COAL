
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
            alert('error obteniendo');
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
    $('#inApePaternoD').val(result.data.ApePaterDoc);
    $('#inApeMaternoD').val(result.data.ApeMaterDoc);
    $('#inTelD').val(result.data.lTelDoct);
    $('#inCelD').val(result.data.lCelDoct);

    //$('#inFechaIni').val();
    //$('#inFechaFin').val();

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

    if (result.data.iMeses == null)
        $('#inMeses').val(0);
    else
        $('#inMeses').val(result.data.iMeses);

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
        $('#insiAlerg').attr('checked', true);
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
        });
        $('#EditaPaci').attr("disabled", true);
        //console.log(datosPaciente);
        LlamadoPaciente(datosPaciente);
    }
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
            alert("Error modificando");
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
