
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

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

    var id = getParameterByName('id');

    var doc = db.collection("Citas").doc(id);

    return doc.update({
        Estado: 'Rechazada'
    })
        .then(function () {
            doc.get().then(function (doc) {
                $('#info').append('La cita solicitada por ' + doc.data().Nombre + ' el día ' + doc.data().Fecha + ' a las ' + doc.data().Hora + 'fue rechazada correctamente');
            });
        })
        .catch(function (error) {
            console.log('Error writing data ' + error);
            $('#info').append('Error, no se pudo realizar la solicitud, favor de intentarlo más tarde.');
        });
});