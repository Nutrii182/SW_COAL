
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

            var fechaActual = new Date();
            var fechaCita = doc.data().Fecha;

            var date = fechaCita.split("/");
            var id = date[0] + ':' + date[1] + ':' + date[2] + ':' + doc.data().Hora;

            if (fechaActual.getFullYear() > date[2])
                db.collection("Citas").doc(id).delete();
            else {
                if (fechaActual.getMonth() > date[1] || fechaActual.getMonth() == date[1] && fechaActual.getDay() > date[0])
                    db.collection("Citas").doc(id).delete();

                if (doc.data().Estado != 'Rechazada')
                    $('#tabCitas').append('<tr id="events"><td>' + doc.data().Usuario + '</td><td>' + doc.data().Nombre + '</td><td>' + doc.data().Motivo + '</td><td>' + doc.data().Fecha + '</td><td>' + doc.data().Hora + '</td><td>' + doc.data().Estado + '</td><td><button title="Aceptar" class="btn btn-primary form-control AcepCita" id="' + id + '"><span><i class="fas fa-check"></i></span></button><button title="Rechazar" class="btn btn-danger form-control RechCita" id="' + id + '"><span><i class="fas fa-times"></i></span></button></td></tr>');

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

    $(tbody).on('click', '.AcepCita', function () {
        var id = $(this).attr('id');

        Swal.fire({
            title: '¿Desea aceptar esta cita?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Aceptar!'
        }).then((result) => {
            if (result.value) {
                aceptaCita(id, db);
            }
        })
    })
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

function aceptaCita(id, db) {

    var doc = db.collection("Citas").doc(id);

    doc.get().then(function (doc) {
        if (doc.exists) {
            if (doc.data().Estado == 'Aceptada') {
                Swal.fire('La Cita fue Aceptada Anteriormente');
                return;
            } else {
                aceptar(id, db);
            }
        }
    });

}

function aceptar(id, db) {

    var url = $('#urlCitas').val();

    var doc = db.collection("Citas").doc(id);

    return doc.update({
        Estado: 'Aceptada'
    })
        .then(function () {
            Swal.fire({
                icon: 'success',
                title: 'Cita Aceptada Exitosamente',
                showConfirmButton: false,
                timer: 1500
            });
            window.location.href = url;
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
            Swal.fire({
                icon: 'warning',
                title: 'Error Aceptando Cita',
                showConfirmButton: false,
                timer: 1500
            });
        });
}