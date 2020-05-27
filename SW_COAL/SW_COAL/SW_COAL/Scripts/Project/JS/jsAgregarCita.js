
$(document).ready(function () {

    document.getElementById('fecha').min = new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString().split("T")[0];

    var firebaseConfig = {
        apiKey: "AIzaSyB-5JV71ISSOgJRLtBR8cw1sI2bD5eDRrw",
        authDomain: "coal-c6cd1.firebaseapp.com",
        databaseURL: "https://coal-c6cd1.firebaseio.com",
        projectId: "coal-c6cd1",
        storageBucket: "coal-c6cd1.appspot.com",
        messagingSenderId: "809516151624",
        appId: "1:809516151624:web:fc7fee9f49db5a3f60b97d",
        measurementId: "G-CNBDFWQ3SZ"
    };

    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();
    var token = '';

    $('#AcepCita').on('click', function () {

        if ($('#nombre').val() === '' || $('#motivo').val() === '' || $('#fecha').val() === '' || $('#hora').val() === '' || $('#usuario').val() === '') {

            Swal.fire({
                icon: 'warning',
                title: 'Favor de llenar Todos los Campos',
                showConfirmButton: false,
                timer: 1500
            });

        } else {

            db.collection("Usuarios").get().then((querySnapshot) => {

                for (var i in querySnapshot.docs) {
                    const doc = querySnapshot.docs[i];

                    if (doc.data().Correo == $('#usuario').val())
                        token = doc.data().Token;
                }
                addToken(token);
            });
        }

    });

    function addToken(token) {

        var fecha = moment($('#fecha').val()).format("DD/MM/YYYY");
        var url = $('#urlAgregaCita').val();

        var date = fecha.split('/');
        var id = date[0] + ':' + date[1] + ':' + date[2] + ':' + $('#hora').val();

        var data = {
            Nombre: $('#nombre').val(),
            Motivo: $('#motivo').val(),
            Fecha: fecha,
            Hora: $('#hora').val(),
            Usuario: $('#usuario').val(),
            Token: token,
            Estado: 'Aceptada',
            Proxima: false
        };

        db.collection("Citas").doc(id).set(data).then(function () {
            Swal.fire({
                icon: 'success',
                title: 'Cita Agregada Correctamente',
                showConfirmButton: false,
                timer: 1500
            });
            window.location.href = url;
        }).catch(function (error) {
            console.error("Error writing document: ", error);
            Swal.fire({
                icon: 'warning',
                title: 'Error Agregando Cita',
                showConfirmButton: false,
                timer: 1500
            });
        });
    }
});