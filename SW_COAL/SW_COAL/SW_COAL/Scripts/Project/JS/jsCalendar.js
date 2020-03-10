﻿
$(document).ready(function () {

    var dt = new Date();
    function renderDate() {
        dt.setDate(1);
        var day = dt.getDay();
        var today = new Date();
        var endDate = new Date(
            dt.getFullYear(),
            dt.getMonth() + 1,
            0
        ).getDate();

        var prevDate = new Date(
            dt.getFullYear(),
            dt.getMonth(),
            0
        ).getDate();
        var months = [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"
        ]
        document.getElementById("month").innerHTML = months[dt.getMonth()];

        var fecha = moment(dt).format('L');

        document.getElementById("date_str").innerHTML = fecha;
        var cells = "";
        for (x = day; x > 0; x--) {
            cells += "<div class='prev_date'>" + (prevDate - x + 1) + "</div>";
        }

        for (i = 1; i <= endDate; i++) {
            if (i == today.getDate() && dt.getMonth() == today.getMonth()) cells += "<div class='today'>" + i + "</div>";
            else
                cells += "<div>" + i + "</div>";
        }
        document.getElementsByClassName("days")[0].innerHTML = cells;

    }

    function moveDate(para) {
        if (para == "prev") {
            dt.setMonth(dt.getMonth() - 1);
        } else if (para == 'next') {
            dt.setMonth(dt.getMonth() + 1);
        }
        renderDate();
    }
});