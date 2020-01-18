
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
        Swal.fire({
            title: '¿Estás Seguro?',
            text: "No Podrás Revertirlo",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'S´, Bórralo!'
        }).then((result) => {
            if (result.value) {
                eliminaUsu(eliUsu);
            }
        })
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
            Swal.fire({
                icon: 'error',
                title: 'Error Obteniendo Usuario',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
}

function SuccessEliminaUsu(data) {

    if (data.Exito) {
        Swal.fire({
            icon: 'success',
            title: 'Usuario Eliminado Exitosamente',
            showConfirmButton: false,
            timer: 1000
        });
        var url = $('#urlUsuarios').val();

        window.location.href = url;
    }
    else if (data.Advertencia) {
        Swal.fire({
            icon: 'warning',
            title: 'Algo Falló',
            showConfirmButton: false,
            timer: 1500
        });
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Error Eliminando Usuario',
            showConfirmButton: false,
            timer: 1500
        });
    }
    $('#btnEliUsu').attr('disabled', false);
}