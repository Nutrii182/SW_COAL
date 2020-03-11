
$(document).ready(function () {

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

    db.collection("Citas").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            if (doc.data().Estado != 'Rechazada') {
                var date = doc.data().Fecha.split('/');
                var id = date[0] + ':' + date[1] + ':' + date[2] + ':' + doc.data().Hora;
                $('#tabCitas').append('<tr id="events"><td>' + doc.data().Usuario + '</td><td>' + doc.data().Nombre + '</td><td>' + doc.data().Motivo + '</td><td>' + doc.data().Fecha + '</td><td>' + doc.data().Hora + '</td><td>' + doc.data().Estado + '</td><td><button class="btn btn-danger form-control RechCita" id="' + id + '">Cancelar</button></td></tr>');
            }
        });
    });

    getBody('#tabCitas tbody', db);
});

var getBody = function (tbody, db) {

    $(tbody).on('click', '.RechCita', function () {

        var id = $(this).attr('id');

        Swal.fire({
            title: '¿Estás Seguro?',
            text: "No Podrás Revertirlo",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Cancelar!'
        }).then((result) => {
            if (result.value) {
                cancelaCita(id, db);
            }
        })
    });
}

function cancelaCita(id, db) {

    var url = $('#urlCitas').val();

    var doc = db.collection("Citas").doc(id);

    return doc.update({
        Estado: 'Rechazada'
    })
        .then(function () {
            Swal.fire({
                icon: 'success',
                title: 'Cita Cancelada Exitosamente',
                showConfirmButton: false,
                timer: 1500
            });
            window.location.href = url;
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
            Swal.fire({
                icon: 'warning',
                title: 'Error Cancelando Cita',
                showConfirmButton: false,
                timer: 1500
            });
        });
}