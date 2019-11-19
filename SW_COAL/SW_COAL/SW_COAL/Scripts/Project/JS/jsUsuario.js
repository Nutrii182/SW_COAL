
$(document).ready(function () {

    var tipo = localStorage.getItem('tipo')

    if (tipo == 'SuperUsuario') {
        $('.EliUsu').css('display', 'block');
        $('#AgUs').css('display', 'block');
    }
    GetUsuario('#tabUsu tbody');
});

var GetUsuario = function (tbody) {

    $(tbody).on('click', '.ActUsu', function () {

        var url = $('#urlModiUsu').val();
        window.location.href = url + '?id=' + $(this).attr('data-target');

    })

    $(tbody).on('click', '.DetUsu', function () {

        var url = $('#urlDetUsu').val();
        window.location.href = url + '?id=' + $(this).attr('data-target');

    });

    $(tbody).on('click', '.EliUsu', function () {

        $('#btnEliUsu').attr('disabled', true);

        var eliUsu = JSON.stringify({
            iId: $(this).attr('data-target')
        });
        eliminaUsu(eliUsu);
    });
}

function eliminaUsu(eliUsu) {

    var url = $('#urlEliUsu').val();

    $.ajax({
        url: url,
        data: eliUsu,
        type: "Post",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: SuccessEliminaUsu,
        error: function (data) {
            alert('Error ajax usuario');
        }
    });
}

function SuccessEliminaUsu(data) {

    if (data.Exito) {
        var url = $('#urlUsuarios').val();
        window.location.href = url;
        alert("Usuario Eliminado Exitosamente");
    }
    else if (data.Advertencia) {
        alert('Advertencia Eliminando Usuario')
    }
    else {
        alert("Error eliminando");
    }
    $('#btnEliUsu').attr('disabled', false);
}