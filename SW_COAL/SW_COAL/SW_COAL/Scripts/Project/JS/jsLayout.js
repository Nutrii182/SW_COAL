
$(document).ready(function () {

    var user = JSON.parse(localStorage.getItem('user'));

    if (user.sTipo == 'Usuario') {
        $('#users').remove();
    }
});