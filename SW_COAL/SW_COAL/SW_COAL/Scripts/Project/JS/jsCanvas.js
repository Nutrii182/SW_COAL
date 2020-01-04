
$(document).ready(function () {

    $('#d11').mousedown(function (e) {

        if (e.which == 3) {

            $(document).bind("contextmenu", function (e) {
                $("#menu").css({ 'display': 'block', 'left': e.pageX - 100, 'top': e.pageY - 50});
                return false;
            });
        }

    });

    $(document).click(function (e) {
        if (e.button == 0) {
            $("#menu").css("display", "none");
        }
    });

    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            $("#menu").css("display", "none");
        }
    });

    $("#menu").click(function (e) {

        switch (e.target.id) {
            case "op1":
                alert("opcion 1");
                break;
            case "op2":
                alert("opcion 2");
                break;
            case "op3":
                alert("opcion 3");
                break;
        }
    });

});