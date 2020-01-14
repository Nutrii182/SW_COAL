//$(document).ready(function () {
//    $('body').on('click', '#workmap1 area', function () {
//        //alert($(this).attr('id'));
//        $('#ParaSuper').show('slow');
//    });
//});

function D11() {

    document.querySelector('#ParaTitle').innerText = 'D11';

    $('#ParaSuper').show('slow');

    $('#AcepParadon').click(function () {
        $('#ParaSuper').hide('slow');
    });
}