
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
}