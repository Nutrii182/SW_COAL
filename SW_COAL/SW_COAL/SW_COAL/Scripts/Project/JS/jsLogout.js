$(document).on('click', '#btnLogout', function () {

    localStorage.removeItem('user');

    var url = $('#urlLogout').val();
    window.location.href = url;
});