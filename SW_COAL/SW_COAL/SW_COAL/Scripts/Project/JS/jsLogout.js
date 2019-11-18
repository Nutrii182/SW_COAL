$(document).on('click', '#btnLogout', function () {

    localStorage.removeItem('user');
    localStorage.removeItem('tipo');

    var url = $('#urlLogout').val();
    window.location.href = url;
});