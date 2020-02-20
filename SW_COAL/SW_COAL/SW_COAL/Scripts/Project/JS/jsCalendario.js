
$(document).ready(function () {

    // Your web app's Firebase configuration
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
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();

    //db.collection("Citas").get().then((querySnapshot) => {
    //    querySnapshot.forEach((doc) => {
    //        console.log(doc.data());
    //    });
    //});
    
});

$(document).ready(function () {

    $('#calendar').fullCalendar({
        contentHeight: 400,
        defaultDate: new Date(),
        timeFormat: 'h(:mm)a',
        header: {
            left: 'prev,next,today',
            center: 'title',
        }
    });


    //$.ajax({

    //})

    function GenerateCalendar(events) {
        //$('#calendar').fullcCalendar('destroy');
        $('#calendar').fullcCalendar({
            contentHeight: 400,
            defaultDate: new Date(),
            timeFormat: 'h(:mm)a',
            header: {
                left: 'prev,next,today',
                center: 'title',
                right: 'month,basicWeek,basicDay,agenda',
            },
            eventLimit: true,
            eventColor: '#378006',
            events: events,
            eventClick: function (calEvent, jsEvent, view) {

            }
        });
    }
});