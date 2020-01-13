
$(document).on('click', '#regPaci', function () {

    var url = $('#urlUsuario').val();
    var u = localStorage.getItem('user');

    var datUsu = JSON.stringify({
        sUsuario: u,
        iId: 0
    })

    $.ajax({
        type: "Post",
        url: url,
        data: datUsu,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ObtieneUsuarios,
        error: function (data) {
            alert('error obteniendo');
        }
    });
});

function ObtieneUsuarios(res) {

    validador(res.data.iId);
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