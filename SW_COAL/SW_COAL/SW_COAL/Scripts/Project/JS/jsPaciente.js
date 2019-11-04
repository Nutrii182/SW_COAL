
$(document).ready(function () {

    table = $('#tabPaci').DataTable();
    Getcliente("#tabPaci tbody", table);
});

var Getcliente = function (tbody, table) {

    $(tbody).on('click', '.ActPaci', function () {

        var url = $('#urlModiPaci').val();
        window.location.href = url;
    });


    $('#tabPaci tbody').on('click', '.EliPaci', function () {
        $('#btnEliPaci').attr('disabled', true);

        var eliPaci = JSON.stringify({
            iIdPaciente: $(this).attr('data-target')
        });
        eliminaPaciente(eliPaci);
    });
}

function eliminaPaciente(eliPaci) {

    var url = $('#urlEliPaci').val();

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
