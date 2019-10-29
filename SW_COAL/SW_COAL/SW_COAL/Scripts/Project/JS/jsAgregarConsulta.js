

$(document).ready(function () {

    var v;

    $(document).on('change', '#selPaciente', function () {
        v = $(this).val();
    });

    $(document).on('click', '#regCon', function () {
        valida_consulta(v);
    });
});

function valida_consulta(v) {

    var datosConsulta = JSON.stringify({

        ipaciente: v,
        iantecedente: 1,
        ihabito: 1,
        itratamiento: 1,
        itejido: 1,
        iadicional: 1

    });
    LlamadaConsulta(datosConsulta);
}

function LlamadaConsulta(datosConsulta) {

    var url = $('#urlConsulta').val();

    $.ajax({
        url: url,
        data: datosConsulta,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: SuccessConsulta,
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            alert("Error consulta");
        }
    })
}

function SuccessConsulta(data) {

    if (data.Exito) {
        alert("Consulta agregada Correctamente");
    }
    else if (data.Advertencia) {
        alert("consulta ya existe");;
    }
    else {
        alert("Error");
    }
}