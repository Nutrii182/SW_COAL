
$(document).ready(function () {
    Getcliente("#tabPaci tbody", table);
});

var Getcliente = function (tbody, table) {

    var valdata = [];

    $(tbody).on('click', '#btnEliPaci', function () {

        var data = table.row($(this).parents('tr')).data();

        valdata = Object.values(data);
        $('#btnEliPaci').attr('disabled', true);

        var eliPaci = JSON.stringify({
            iIdPaciente: valdata[0]
        })

        eliminaPaciente(eliPaci);
    });
}

function eliminaPaciente(eliPaci) {

    var url = $('#urlEliPaci').val();

    //console.log(pacieli);
    $.ajax({
        url: url,
        data: eliPaci,
        type: "Post",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: SuccessEliminaPaci,
        error: function (data) {
            console.log(data);
            alert('Error ajax paciente');
        }
    });
}

function SuccessEliminaPaci(data) {

    if (data.Exito) {
        var url = $('#urlPacientes').val();
        window.location.href = url;
        alert("Paciente Eliminado Exitosamente");
    }
    else if (data.Advertencia) {
        alert('Advertencia Eliminando Paciente')
    }
    else {
        alert("Error eliminando");
    }
    $('#btnEliPaci').attr('disabled', false);
}
