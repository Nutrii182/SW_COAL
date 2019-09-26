$(document).ready(function () {
    selectUsu();
});

function selectUsu() {

    var url = $('#urlUsuarios').val();

    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: muestraOdonto,
        error: function (data) {
            alert('error');
        }
    });
}

function muestraOdonto(res) {

    for (c = 0; c < res.data.length; c++) {
        $("#selOdonto").append('<option value=' + c + '>' + res.data[c].sNombre + ' ' + res.data[c].sAp_Paterno + ' '
            + res.data[c].sAp_Materno + '</option>');
    }
}