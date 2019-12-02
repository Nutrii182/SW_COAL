﻿function LoadContextCanvas(idCanvas) {

    var element = document.getElementById(idCanvas);

    if (element && element.getContext) {
        var context = element.getContext('2d');
        if (context)
            return context;
    }
    return false;
}

window.onload = function () {

    var ctx = LoadContextCanvas('miCanvas');

    if (ctx) {

        var img = new Image();

        img.src = "/Content/img/paradontograma.png";

        img.onload = function () {
            ctx.drawImage(img, 10, 10);
        }
    }
}