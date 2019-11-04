
$(document).ready(function () {

    var url = $('#urlPacientes').val();

    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ObtienePacientes,
        error: function (data) {
            alert('error obteniendo');
        }
    });
});

function ObtienePacientes(result) {

    console.log(result.data);
}