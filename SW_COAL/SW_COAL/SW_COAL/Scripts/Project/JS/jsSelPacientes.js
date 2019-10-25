$(document).ready(function () {
    selectUsu();
});

function selectUsu() {

    var url = $('#urlObPacientes').val();

    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: muestraPaci,
        error: function (data) {
            alert('error');
        }
    });
}

function muestraPaci(res) {

    for (c = 0; c < res.data.length; c++) {
        $("#selPaciente").append('<option value=' + c + '>' + res.data[c].sNombre + ' ' + res.data[c].sApePaterno + ' '
            + res.data[c].sApeMaterno + '</option>');
    }
}