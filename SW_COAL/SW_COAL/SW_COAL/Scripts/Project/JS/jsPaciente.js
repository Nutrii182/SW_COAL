
$(document).ready(function () {

    var user = JSON.parse(localStorage.getItem('user'));

    if (user.sTipo == 'SuperUsuario') {
        $('.EliPaci').css('display', 'block');
    }

    // Write on keyup event of keyword input element
    $(document).ready(function () {
        $("#search").keyup(function () {
            _this = this;
            // Show only matching TR, hide rest of them
            $.each($("#tabPaci tbody tr"), function () {
                if ($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1)
                    $(this).hide();
                else
                    $(this).show();
            });
        });
    });

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
        Swal.fire({
            title: '¿Estás Seguro?',
            text: "No Podrás Revertirlo",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Bórralo!'
        }).then((result) => {
            if (result.value) {
                eliminaPaciente(eliPaci);
            }
        })
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
            Swal.fire({
                icon: 'error',
                title: 'Error Obteniendo Paciente',
                showConfirmButton: false,
                timer: 1500
            });
        }
    });
}

function SuccessEliminaPaci(data) {

    if (data.Exito) {
        var url = $('#urlPacientes').val();
        Swal.fire({
            icon: 'success',
            title: 'Paciente Eliminado Exitosamente',
            showConfirmButton: false,
            timer: 1500
        });
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
    $('#btnEliPaci').attr('disabled', false);
}
