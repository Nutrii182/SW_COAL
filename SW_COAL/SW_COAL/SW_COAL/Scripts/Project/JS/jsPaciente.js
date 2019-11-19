
$(document).ready(function () {

    var tipo = localStorage.getItem('tipo')

    if (tipo == 'Usuario')
        $('.EliPaci').css('display', 'none');

    Getpaciente("#tabPaci tbody");
});

var Getpaciente = function (tbody) {

    $(tbody).on('click', '.ActPaci', function () {

        var url = $('#urlModiPaci').val();
        window.location.href = url + '?id=' + $(this).attr('data-target');

    });

    $(tbody).on('click', '.DetPaci', function () {

        var url = $('#urlDetPaci').val();
        window.location.href = url + '?id=' + $(this).attr('data-target');

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
