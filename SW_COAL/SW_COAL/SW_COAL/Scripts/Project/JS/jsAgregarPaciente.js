
$(document).on('click', '#regPaci', function () {

    var url = $('#urlUsuario').val();
    var u = localStorage.getItem('user');

    var datUsu = JSON.stringify({
        sUsuario: u,
        iId: 0
    })

    $.ajax({
        type: "Post",
        url: url,
        data: datUsu,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: ObtieneUsuarios,
        error: function (data) {
            alert('error obteniendo');
        }
    });
});

var d11 = null, d12 = null, d13 = null, d14 = null, d15 = null, d16 = null, d17 = null, d18 = null;
var d21 = null, d22 = null, d23 = null, d24 = null, d25 = null, d26 = null, d27 = null, d28 = null;
var d31 = null, d32 = null, d33 = null, d34 = null, d35 = null, d36 = null, d37 = null, d38 = null;
var d41 = null, d42 = null, d43 = null, d44 = null, d45 = null, d46 = null, d47 = null, d48 = null;

function D11() {

    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');
   
    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle11').innerText = 'D11';

    $('#ParaSuper11').show('slow');

    $("input[id=inCaries11]").click(function(){
		d11 = 'Caries';
	});

    $("input[id=inAmalgama11]").click(function(){
		d11 = 'Amalgama';
	});

    $("input[id=inAusente11]").click(function(){
		d11 = 'Ausente';
	});

    $("input[id=inFija11]").click(function(){
		d11 = 'Fija';
	});

    $("input[id=inExtraccion11]").click(function(){
		d11 = 'Extraccion';
	});

    $('#AcepParadon11').click(function () {
        $('#ParaSuper11').hide('slow');
    });
}

function D12() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle12').innerText = 'D12';

    $('#ParaSuper12').show('slow');

    $("input[id=inCaries12]").click(function(){
		d12 = 'Caries';
	});

    $("input[id=inAmalgama12]").click(function(){
		d12 = 'Amalgama';
	});

    $("input[id=inAusente12]").click(function(){
		d12 = 'Ausente';
	});

    $("input[id=inFija12]").click(function(){
		d12 = 'Fija';
	});

    $("input[id=inExtraccion12]").click(function(){
		d12 = 'Extraccion';
	});

    $('#AcepParadon12').click(function () {
        $('#ParaSuper12').hide('slow');
    });
}

function D13() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle13').innerText = 'D13';

    $('#ParaSuper13').show('slow');

    $("input[id=inCaries13]").click(function(){
		d13 = 'Caries';
	});

    $("input[id=inAmalgama13]").click(function(){
		d13 = 'Amalgama';
	});

    $("input[id=inAusente13]").click(function(){
		d13 = 'Ausente';
	});

    $("input[id=inFija13]").click(function(){
		d13 = 'Fija';
	});

    $("input[id=inExtraccion13]").click(function(){
		d13 = 'Extraccion';
	});

    $('#AcepParadon13').click(function () {
        $('#ParaSuper13').hide('slow');
    });
}

function D14() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle14').innerText = 'D14';

    $('#ParaSuper14').show('slow');

    $("input[id=inCaries14]").click(function(){
		d14 = 'Caries';
	});

    $("input[id=inAmalgama14]").click(function(){
		d14 = 'Amalgama';
	});

    $("input[id=inAusente14]").click(function(){
		d14 = 'Ausente';
	});

    $("input[id=inFija14]").click(function(){
		d14 = 'Fija';
	});

    $("input[id=inExtraccion14]").click(function(){
		d14 = 'Extraccion';
	});

    $('#AcepParadon14').click(function () {
        $('#ParaSuper14').hide('slow');
    });
}

function D15() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle15').innerText = 'D15';

    $('#ParaSuper15').show('slow');

    $("input[id=inCaries15]").click(function(){
		d15 = 'Caries';
	});

    $("input[id=inAmalgama15]").click(function(){
		d15 = 'Amalgama';
	});

    $("input[id=inAusente15]").click(function(){
		d15 = 'Ausente';
	});

    $("input[id=inFija15]").click(function(){
		d15 = 'Fija';
	});

    $("input[id=inExtraccion15]").click(function(){
		d15 = 'Extraccion';
	});

    $('#AcepParadon15').click(function () {
        $('#ParaSuper15').hide('slow');
    });
}

function D16() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle16').innerText = 'D16';

    $('#ParaSuper16').show('slow');

    $("input[id=inCaries16]").click(function(){
		d16 = 'Caries';
	});

    $("input[id=inAmalgama16]").click(function(){
		d16 = 'Amalgama';
	});

    $("input[id=inAusente16]").click(function(){
		d16 = 'Ausente';
	});

    $("input[id=inFija16]").click(function(){
		d16 = 'Fija';
	});

    $("input[id=inExtraccion16]").click(function(){
		d16 = 'Extraccion';
	});

    $('#AcepParadon16').click(function () {
        $('#ParaSuper16').hide('slow');
    });
}

function D17() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle17').innerText = 'D17';

    $('#ParaSuper17').show('slow');

    $("input[id=inCaries17]").click(function(){
		d17 = 'Caries';
	});

    $("input[id=inAmalgama17]").click(function(){
		d17 = 'Amalgama';
	});

    $("input[id=inAusente17]").click(function(){
		d17 = 'Ausente';
	});

    $("input[id=inFija17]").click(function(){
		d17 = 'Fija';
	});

    $("input[id=inExtraccion17]").click(function(){
		d17 = 'Extraccion';
	});

    $('#AcepParadon17').click(function () {
        $('#ParaSuper17').hide('slow');
    });
}

function D18() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle18').innerText = 'D18';

    $('#ParaSuper18').show('slow');

    $("input[id=inCaries18]").click(function(){
		d18 = 'Caries';
	});

    $("input[id=inAmalgama18]").click(function(){
		d18 = 'Amalgama';
	});

    $("input[id=inAusente18]").click(function(){
		d18 = 'Ausente';
	});

    $("input[id=inFija18]").click(function(){
		d18 = 'Fija';
	});

    $("input[id=inExtraccion18]").click(function(){
		d18 = 'Extraccion';
	});

    $('#AcepParadon18').click(function () {
        $('#ParaSuper18').hide('slow');
    });
}

function D21() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle21').innerText = 'D21';

    $('#ParaSuper21').show('slow');

    $("input[id=inCaries21]").click(function(){
		d21 = 'Caries';
	});

    $("input[id=inAmalgama21]").click(function(){
		d21 = 'Amalgama';
	});

    $("input[id=inAusente21]").click(function(){
		d21 = 'Ausente';
	});

    $("input[id=inFija21]").click(function(){
		d21 = 'Fija';
	});

    $("input[id=inExtraccion21]").click(function(){
		d21 = 'Extraccion';
	});

    $('#AcepParadon21').click(function () {
        $('#ParaSuper21').hide('slow');
    });
}

function D22() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle22').innerText = 'D22';

    $('#ParaSuper22').show('slow');

    $("input[id=inCaries22]").click(function(){
		d22 = 'Caries';
	});

    $("input[id=inAmalgama22]").click(function(){
		d22 = 'Amalgama';
	});

    $("input[id=inAusente22]").click(function(){
		d22 = 'Ausente';
	});

    $("input[id=inFija22]").click(function(){
		d22 = 'Fija';
	});

    $("input[id=inExtraccion22]").click(function(){
		d22 = 'Extraccion';
	});

    $('#AcepParadon22').click(function () {
        $('#ParaSuper22').hide('slow');
    });
}

function D23() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle23').innerText = 'D23';

    $('#ParaSuper23').show('slow');

    $("input[id=inCaries23]").click(function(){
		d23 = 'Caries';
	});

    $("input[id=inAmalgama23]").click(function(){
		d23 = 'Amalgama';
	});

    $("input[id=inAusente23]").click(function(){
		d23 = 'Ausente';
	});

    $("input[id=inFija23]").click(function(){
		d23 = 'Fija';
	});

    $("input[id=inExtraccion23]").click(function(){
		d23 = 'Extraccion';
	});

    $('#AcepParadon23').click(function () {
        $('#ParaSuper23').hide('slow');
    });
}

function D24() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle24').innerText = 'D24';

    $('#ParaSuper24').show('slow');

    $("input[id=inCaries24]").click(function(){
		d24 = 'Caries';
	});

    $("input[id=inAmalgama24]").click(function(){
		d24 = 'Amalgama';
	});

    $("input[id=inAusente24]").click(function(){
		d24 = 'Ausente';
	});

    $("input[id=inFija24]").click(function(){
		d24 = 'Fija';
	});

    $("input[id=inExtraccion24]").click(function(){
		d24 = 'Extraccion';
	});

    $('#AcepParadon24').click(function () {
        $('#ParaSuper24').hide('slow');
    });
}

function D25() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle25').innerText = 'D25';

    $('#ParaSuper25').show('slow');

    $("input[id=inCaries25]").click(function(){
		d25 = 'Caries';
	});

    $("input[id=inAmalgama25]").click(function(){
		d25 = 'Amalgama';
	});

    $("input[id=inAusente25]").click(function(){
		d25 = 'Ausente';
	});

    $("input[id=inFija25]").click(function(){
		d25 = 'Fija';
	});

    $("input[id=inExtraccion25]").click(function(){
		d25 = 'Extraccion';
	});

    $('#AcepParadon25').click(function () {
        $('#ParaSuper25').hide('slow');
    });
}

function D26() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M27)
        $('#ParaSuper27').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle26').innerText = 'D26';

    $('#ParaSuper26').show('slow');

    $("input[id=inCaries26]").click(function(){
		d26 = 'Caries';
	});

    $("input[id=inAmalgama26]").click(function(){
		d26 = 'Amalgama';
	});

    $("input[id=inAusente26]").click(function(){
		d26 = 'Ausente';
	});

    $("input[id=inFija26]").click(function(){
		d26 = 'Fija';
	});

    $("input[id=inExtraccion26]").click(function(){
		d26 = 'Extraccion';
	});

    $('#AcepParadon26').click(function () {
        $('#ParaSuper26').hide('slow');
    });
}

function D27() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M28 = $('#ParaSuper28').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper26').hide('slow');

    if (M28)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle27').innerText = 'D27';

    $('#ParaSuper27').show('slow');

    $("input[id=inCaries27]").click(function(){
		d27 = 'Caries';
	});

    $("input[id=inAmalgama27]").click(function(){
		d27 = 'Amalgama';
	});

    $("input[id=inAusente27]").click(function(){
		d27 = 'Ausente';
	});

    $("input[id=inFija27]").click(function(){
		d27 = 'Fija';
	});

    $("input[id=inExtraccion27]").click(function(){
		d27 = 'Extraccion';
	});

    $('#AcepParadon27').click(function () {
        $('#ParaSuper27').hide('slow');
    });
}

function D28() {

    var M11 = $('#ParaSuper11').is(':visible');
    var M12 = $('#ParaSuper12').is(':visible');
    var M13 = $('#ParaSuper13').is(':visible');
    var M14 = $('#ParaSuper14').is(':visible');
    var M15 = $('#ParaSuper15').is(':visible');
    var M16 = $('#ParaSuper16').is(':visible');
    var M17 = $('#ParaSuper17').is(':visible');
    var M18 = $('#ParaSuper18').is(':visible');
    var M21 = $('#ParaSuper21').is(':visible');
    var M22 = $('#ParaSuper22').is(':visible');
    var M23 = $('#ParaSuper23').is(':visible');
    var M24 = $('#ParaSuper24').is(':visible');
    var M25 = $('#ParaSuper25').is(':visible');
    var M26 = $('#ParaSuper26').is(':visible');
    var M27 = $('#ParaSuper27').is(':visible');

    if (M11)
        $('#ParaSuper11').hide('slow');

    if (M12)
        $('#ParaSuper12').hide('slow');

    if (M13)
        $('#ParaSuper13').hide('slow');

    if (M14)
        $('#ParaSuper14').hide('slow');

    if (M15)
        $('#ParaSuper15').hide('slow');

    if (M16)
        $('#ParaSuper16').hide('slow');

    if (M17)
        $('#ParaSuper17').hide('slow');

    if (M18)
        $('#ParaSuper18').hide('slow');

    if (M21)
        $('#ParaSuper21').hide('slow');

    if (M22)
        $('#ParaSuper22').hide('slow');

    if (M23)
        $('#ParaSuper23').hide('slow');

    if (M24)
        $('#ParaSuper24').hide('slow');

    if (M25)
        $('#ParaSuper25').hide('slow');

    if (M26)
        $('#ParaSuper27').hide('slow');

    if (M27)
        $('#ParaSuper28').hide('slow');

    document.querySelector('#ParaTitle28').innerText = 'D28';

    $('#ParaSuper28').show('slow');

    $("input[id=inCaries28]").click(function(){
		d28 = 'Caries';
	});

    $("input[id=inAmalgama28]").click(function(){
		d28 = 'Amalgama';
	});

    $("input[id=inAusente28]").click(function(){
		d28 = 'Ausente';
	});

    $("input[id=inFija28]").click(function(){
		d28 = 'Fija';
	});

    $("input[id=inExtraccion28]").click(function(){
		d28 = 'Extraccion';
	});

    $('#AcepParadon28').click(function () {
        $('#ParaSuper28').hide('slow');
    });
}

function D31() {

    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle31').innerText = 'D31';

    $('#ParaInfe31').show('slow');

    $("input[id=inCaries31]").click(function(){
		d31 = 'Caries';
	});

    $("input[id=inAmalgama31]").click(function(){
		d31 = 'Amalgama';
	});

    $("input[id=inAusente31]").click(function(){
		d31 = 'Ausente';
	});

    $("input[id=inFija31]").click(function(){
		d31 = 'Fija';
	});

    $("input[id=inExtraccion31]").click(function(){
		d31 = 'Extraccion';
	});

    $('#AcepParadon31').click(function () {
        $('#ParaInfe31').hide('slow');
    });
}

function D32() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle32').innerText = 'D32';

    $('#ParaInfe32').show('slow');

    $("input[id=inCaries32]").click(function(){
		d32 = 'Caries';
	});

    $("input[id=inAmalgama32]").click(function(){
		d32 = 'Amalgama';
	});

    $("input[id=inAusente32]").click(function(){
		d32 = 'Ausente';
	});

    $("input[id=inFija32]").click(function(){
		d32 = 'Fija';
	});

    $("input[id=inExtraccion32]").click(function(){
		d32 = 'Extraccion';
	});

    $('#AcepParadon32').click(function () {
        $('#ParaInfe32').hide('slow');
    });
}

function D33() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle33').innerText = 'D33';

    $('#ParaInfe33').show('slow');

    $("input[id=inCarie33]").click(function(){
		d33 = 'Caries';
	});

    $("input[id=inAmalgama33]").click(function(){
		d33 = 'Amalgama';
	});

    $("input[id=inAusente33]").click(function(){
		d33 = 'Ausente';
	});

    $("input[id=inFija33]").click(function(){
		d33 = 'Fija';
	});

    $("input[id=inExtraccion33]").click(function(){
		d33 = 'Extraccion';
	});

    $('#AcepParadon33').click(function () {
        $('#ParaInfe33').hide('slow');
    });
}

function D34() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle34').innerText = 'D34';

    $('#ParaInfe34').show('slow');

    $("input[id=inCaries34]").click(function(){
		d34 = 'Caries';
	});

    $("input[id=inAmalgama34]").click(function(){
		d34 = 'Amalgama';
	});

    $("input[id=inAusente34]").click(function(){
		d34 = 'Ausente';
	});

    $("input[id=inFija34]").click(function(){
		d34 = 'Fija';
	});

    $("input[id=inExtraccion34]").click(function(){
		d34 = 'Extraccion';
	});

    $('#AcepParadon34').click(function () {
        $('#ParaInfe34').hide('slow');
    });
}

function D35() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle35').innerText = 'D35';

    $('#ParaInfe35').show('slow');

    $("input[id=inCaries35]").click(function(){
		d35 = 'Caries';
	});

    $("input[id=inAmalgama35]").click(function(){
		d35 = 'Amalgama';
	});

    $("input[id=inAusente35]").click(function(){
		d35 = 'Ausente';
	});

    $("input[id=inFija35]").click(function(){
		d35 = 'Fija';
	});

    $("input[id=inExtraccion35]").click(function(){
		d35 = 'Extraccion';
	});

    $('#AcepParadon35').click(function () {
        $('#ParaInfe35').hide('slow');
    });
}

function D36() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle36').innerText = 'D36';

    $('#ParaInfe36').show('slow');

    $("input[id=inCaries36]").click(function(){
		d36 = 'Caries';
	});

    $("input[id=inAmalgama36]").click(function(){
		d36 = 'Amalgama';
	});

    $("input[id=inAusente36]").click(function(){
		d36 = 'Ausente';
	});

    $("input[id=inFija36]").click(function(){
		d36 = 'Fija';
	});

    $("input[id=inExtraccion36]").click(function(){
		d36 = 'Extraccion';
	});

    $('#AcepParadon36').click(function () {
        $('#ParaInfe36').hide('slow');
    });
}

function D37() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle37').innerText = 'D37';

    $('#ParaInfe37').show('slow');

    $("input[id=inCaries37]").click(function(){
		d37 = 'Caries';
	});

    $("input[id=inAmalgama37]").click(function(){
		d37 = 'Amalgama';
	});

    $("input[id=inAusente37]").click(function(){
		d37 = 'Ausente';
	});

    $("input[id=inFija37]").click(function(){
		d37 = 'Fija';
	});

    $("input[id=inExtraccion37]").click(function(){
		d37 = 'Extraccion';
	});

    $('#AcepParadon37').click(function () {
        $('#ParaInfe37').hide('slow');
    });
}

function D38() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle38').innerText = 'D38';

    $('#ParaInfe38').show('slow');

    $("input[id=inCaries38]").click(function(){
		d38 = 'Caries';
	});

    $("input[id=inAmalgama38]").click(function(){
		d38 = 'Amalgama';
	});

    $("input[id=inAusente38]").click(function(){
		d38 = 'Ausente';
	});

    $("input[id=inFija38]").click(function(){
		d38 = 'Fija';
	});

    $("input[id=inExtraccion38]").click(function(){
		d38 = 'Extraccion';
	});

    $('#AcepParadon38').click(function () {
        $('#ParaInfe38').hide('slow');
    });
}

function D41() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle41').innerText = 'D41';

    $('#ParaInfe41').show('slow');

    $("input[id=inCaries41]").click(function(){
		d41 = 'Caries';
	});

    $("input[id=inAmalgama41]").click(function(){
		d41 = 'Amalgama';
	});

    $("input[id=inAusente41]").click(function(){
		d41 = 'Ausente';
	});

    $("input[id=inFija41]").click(function(){
		d41 = 'Fija';
	});

    $("input[id=inExtraccion41]").click(function(){
		d41 = 'Extraccion';
	});

    $('#AcepParadon41').click(function () {
        $('#ParaInfe41').hide('slow');
    });
}

function D42() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle42').innerText = 'D42';

    $('#ParaInfe42').show('slow');

    $("input[id=inCaries42]").click(function(){
		d42 = 'Caries';
	});

    $("input[id=inAmalgama42]").click(function(){
		d42 = 'Amalgama';
	});

    $("input[id=inAusente42]").click(function(){
		d42 = 'Ausente';
	});

    $("input[id=inFija42]").click(function(){
		d42 = 'Fija';
	});

    $("input[id=inExtraccion42]").click(function(){
		d42 = 'Extraccion';
	});

    $('#AcepParadon42').click(function () {
        $('#ParaInfe42').hide('slow');
    });
}

function D43() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle43').innerText = 'D43';

    $('#ParaInfe43').show('slow');

    $("input[id=inCaries43]").click(function(){
		d43 = 'Caries';
	});

    $("input[id=inAmalgama43]").click(function(){
		d43 = 'Amalgama';
	});

    $("input[id=inAusente43]").click(function(){
		d43 = 'Ausente';
	});

    $("input[id=inFija43]").click(function(){
		d43 = 'Fija';
	});

    $("input[id=inExtraccion43]").click(function(){
		d43 = 'Extraccion';
	});

    $('#AcepParadon43').click(function () {
        $('#ParaInfe43').hide('slow');
    });
}

function D44() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle44').innerText = 'D44';

    $('#ParaInfe44').show('slow');

    $("input[id=inCaries44]").click(function(){
		d44 = 'Caries';
	});

    $("input[id=inAmalgama44]").click(function(){
		d44 = 'Amalgama';
	});

    $("input[id=inAusente44]").click(function(){
		d44 = 'Ausente';
	});

    $("input[id=inFija44]").click(function(){
		d44 = 'Fija';
	});

    $("input[id=inExtraccion44]").click(function(){
		d44 = 'Extraccion';
	});

    $('#AcepParadon44').click(function () {
        $('#ParaInfe44').hide('slow');
    });
}

function D45() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');


    document.querySelector('#ParaTitle45').innerText = 'D45';

    $('#ParaInfe45').show('slow');

    $("input[id=inCaries45]").click(function(){
		d45 = 'Caries';
	});

    $("input[id=inAmalgama45]").click(function(){
		d45 = 'Amalgama';
	});

    $("input[id=inAusente45]").click(function(){
		d45 = 'Ausente';
	});

    $("input[id=inFija45]").click(function(){
		d45 = 'Fija';
	});

    $("input[id=inExtraccion45]").click(function(){
		d45 = 'Extraccion';
	});

    $('#AcepParadon45').click(function () {
        $('#ParaInfe45').hide('slow');
    });
}

function D46() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');


    document.querySelector('#ParaTitle46').innerText = 'D46';

    $('#ParaInfe46').show('slow');

    $("input[id=inCaries46]").click(function(){
		d46 = 'Caries';
	});

    $("input[id=inAmalgama46]").click(function(){
		d46 = 'Amalgama';
	});

    $("input[id=inAusente46]").click(function(){
		d46 = 'Ausente';
	});

    $("input[id=inFija46]").click(function(){
		d46 = 'Fija';
	});

    $("input[id=inExtraccion46]").click(function(){
		d46 = 'Extraccion';
	});

    $('#AcepParadon46').click(function () {
        $('#ParaInfe46').hide('slow');
    });
}

function D47() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M48 = $('#ParaInfe48').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M48)
        $('#ParaInfe48').hide('slow');

    document.querySelector('#ParaTitle47').innerText = 'D47';

    $('#ParaInfe47').show('slow');

    $("input[id=inCaries47]").click(function(){
		d47 = 'Caries';
	});

    $("input[id=inAmalgama47]").click(function(){
		d47 = 'Amalgama';
	});

    $("input[id=inAusente47]").click(function(){
		d47 = 'Ausente';
	});

    $("input[id=inFija47]").click(function(){
		d47 = 'Fija';
	});

    $("input[id=inExtraccion47]").click(function(){
		d47 = 'Extraccion';
	});

    $('#AcepParadon47').click(function () {
        $('#ParaInfe47').hide('slow');
    });
}

function D48() {

    var M31 = $('#ParaInfe31').is(':visible');
    var M32 = $('#ParaInfe32').is(':visible');
    var M33 = $('#ParaInfe33').is(':visible');
    var M34 = $('#ParaInfe34').is(':visible');
    var M35 = $('#ParaInfe35').is(':visible');
    var M36 = $('#ParaInfe36').is(':visible');
    var M37 = $('#ParaInfe37').is(':visible');
    var M38 = $('#ParaInfe38').is(':visible');
    var M41 = $('#ParaInfe41').is(':visible');
    var M42 = $('#ParaInfe42').is(':visible');
    var M43 = $('#ParaInfe43').is(':visible');
    var M44 = $('#ParaInfe44').is(':visible');
    var M45 = $('#ParaInfe45').is(':visible');
    var M46 = $('#ParaInfe46').is(':visible');
    var M47 = $('#ParaInfe47').is(':visible');

    if (M31)
        $('#ParaInfe31').hide('slow');

    if (M32)
        $('#ParaInfe32').hide('slow');

    if (M33)
        $('#ParaInfe33').hide('slow');

    if (M34)
        $('#ParaInfe34').hide('slow');

    if (M35)
        $('#ParaInfe35').hide('slow');

    if (M36)
        $('#ParaInfe36').hide('slow');

    if (M37)
        $('#ParaInfe37').hide('slow');

    if (M38)
        $('#ParaInfe38').hide('slow');

    if (M41)
        $('#ParaInfe41').hide('slow');

    if (M42)
        $('#ParaInfe42').hide('slow');

    if (M43)
        $('#ParaInfe43').hide('slow');

    if (M44)
        $('#ParaInfe44').hide('slow');

    if (M45)
        $('#ParaInfe45').hide('slow');

    if (M46)
        $('#ParaInfe46').hide('slow');

    if (M47)
        $('#ParaInfe47').hide('slow');

    document.querySelector('#ParaTitle48').innerText = 'D48';

    $('#ParaInfe48').show('slow');

    $("input[id=inCaries48]").click(function(){
		d48 = 'Caries';
	});

    $("input[id=inAmalgama48]").click(function(){
		d48 = 'Amalgama';
	});

    $("input[id=inAusente48]").click(function(){
		d48 = 'Ausente';
	});

    $("input[id=inFija48]").click(function(){
		d48 = 'Fija';
	});

    $("input[id=inExtraccion48]").click(function(){
		d48 = 'Extraccion';
	});

    $('#AcepParadon48').click(function () {
        $('#ParaInfe48').hide('slow');
    });
}

function ObtieneUsuarios(res) {
    validador(res.data.iId);
}

function validador(id) {
    var s, apre, apcard, apdig, nerv, coa, desm, vermar, diabe, tiro, fire, hiper;
    var trat, Ttrat, Tmedi, Thospi;
    var duro, rx, encia, epite, lengua, pulpa, velo, carrillo, mordida, mordabi, desbru, anoclu;
    var emba, anti, fuma, bebe, droga, aler, higi;
    var brico, contmu, habmord, rebuc, chulab, chulen, chuded, ali;
    var rechi, Tencia, Cencia, OHbucal, hemo, cepi;

    if ($('#inMasculino').prop('checked')) {
        s = 'Masculino';
    } else {
        if ($('#inFemenino').prop('checked')) {
            s = 'Femenino';
        }
    }

    if ($('#inApRes').prop('checked')) {
        apre = 'Si'
    } else {
        apre = 'No';
    }

    if ($('#inApCard').prop('checked')) {
        apcard = 'Si'
    } else {
        apcard = 'No';
    }

    if ($('#inApDig').prop('checked')) {
        apdig = 'Si'
    } else {
        apdig = 'No';
    }

    if ($('#inSisNerv').prop('checked')) {
        nerv = 'Si'
    } else {
        nerv = 'No';
    }

    if ($('#inProCoa').prop('checked')) {
        coa = 'Si'
    } else {
        coa = 'No';
    }

    if ($('#inDesmayos').prop('checked')) {
        desm = 'Si'
    } else {
        desm = 'No';
    }

    if ($('#inVerMar').prop('checked')) {
        vermar = 'Si'
    } else {
        vermar = 'No';
    }

    if ($('#inDiabetes').prop('checked')) {
        diabe = 'Si'
    } else {
        diabe = 'No';
    }

    if ($('#inTiroides').prop('checked')) {
        tiro = 'Si'
    } else {
        tiro = 'No';
    }

    if ($('#inFiRe').prop('checked')) {
        fire = 'Si'
    } else {
        fire = 'No';
    }

    if ($('#inHiper').prop('checked')) {
        hiper = 'Si'
    } else {
        hiper = 'No';
    }

    //Tratamiento
    if ($('#inTsi').prop('checked')) {
        trat = 'Si';
    } else {
        if ($('#inTno').prop('checked')) {
            trat = 'No';
        }
    }

    //Medico o Dental
    if ($('#inMedico').prop('checked')) {
        Ttrat = 'Medico';
    } else {
        if ($('#inDental').prop('checked')) {
            Ttrat = 'Dental';
        }
    }

    //Medicamentos
    if ($('#inMsi').prop('checked')) {
        Tmedi = 'Si';
        $('#inMesp').prop('disabled', false);
    } else {
        if ($('#inMno').prop('checked')) {
            Tmedi = 'No';
            $('#inMesp').prop('disabled', true);
            $('#inMesp').val() == null;
        }
    }

    //Hospital
    if ($('#inHsi').prop('checked')) {
        Thospi = 'Si';
        $('#inMotivo').prop('disabled', false);
    } else {
        if ($('#inHno').prop('checked')) {
            Thospi = 'No';
            $('#inMotivo').prop('disabled', true);
            $('#inMotivo').val() == null;
        }
    }

    //Tejido

    //Duro
    if ($('#inEsmalte').prop('checked')) {
        duro = 'Esmalte';
    } else {
        if ($('#inDentina').prop('checked')) {
            duro = 'Dentina';
        }
    }

    //Rx
    if ($('#inRaiz').prop('checked')) {
        rx = 'Raiz';
    } else {
        if ($('#inHuesos').prop('checked')) {
            rx = 'Huesos';
        }
    }

    //Encia
    if ($('#inEncia').prop('checked')) {
        encia = 'Si';
    } else {
        encia = 'No';
    }

    //Epitelial
    if ($('#inInEpi').prop('checked')) {
        epite = 'Si';
    } else {
        epite = 'No';
    }

    //Lengua
    if ($('#inLengua').prop('checked')) {
        lengua = 'Si';
    } else {
        lengua = 'No';
    }

    //Pulpa
    if ($('#inPulpa').prop('checked')) {
        pulpa = 'Si';
    } else {
        pulpa = 'No';
    }

    //Velo
    if ($('#inVelo').prop('checked')) {
        velo = 'Si';
    } else {
        velo = 'No';
    }

    //Carrillos
    if ($('#inCarrillo').prop('checked')) {
        carrillo = 'Si';
    } else {
        carrillo = 'No';
    }

    //Oclusion
    if ($('#inMorHor').prop('checked')) {
        mordida = 'Horizontal';
    } else {
        if ($('#inMorVer').prop('checked')) {
            mordida = 'Vertical';
        }
    }

    //Mordida Abierta
    if ($('#inMordAbi').prop('checked')) {
        mordabi = 'Si';
    } else {
        mordabi = 'No';
    }

    //Bruxismo
    if ($('#inDesBru').prop('checked')) {
        desbru = 'Si';
    } else {
        desbru = 'No';
    }

    //Anoclusion
    if ($('#inAnoc').prop('checked')) {
        anoclu = 'Si';
    } else {
        anoclu = 'No';
    }

    //Embarazo
    if ($('#inSiEmba').prop('checked')) {
        emba = 'Si';
    } else {
        if ($('#inNoEmba').prop('checked')) {
            emba = 'No';
        }
    }

    //Anticonceptivos
    if ($('#inSiAnti').prop('checked')) {
        anti = 'Si';
    } else {
        if ($('#inNoAnti').prop('checked')) {
            anti = 'No';
        }
    }

    //Fuma
    if ($('#inSiFuma').prop('checked')) {
        fuma = 'Si';
    } else {
        if ($('#inNoFuma').prop('checked')) {
            fuma = 'No';
        }
    }

    //Bebe
    if ($('#inSiBebe').prop('checked')) {
        bebe = 'Si';
    } else {
        if ($('#inNoBebe').prop('checked')) {
            bebe = 'No';
        }
    }

    //Drogas
    if ($('#inSiDroga').prop('checked')) {
        droga = 'Si';
    } else {
        if ($('#inNoDroga').prop('checked')) {
            droga = 'No';
        }
    }

    //Alergia
    if ($('#inSiAlerg').prop('checked')) {
        aler = 'Si';
    } else {
        if ($('#inNoAlerg').prop('checked')) {
            aler = 'No';
        }
    }

    //Higiene
    if ($('#inBuena').prop('checked')) {
        higi = 'Buena';
    } else {
        if ($('#inMala').prop('checked')) {
            higi = 'Mala';
        }
    }

    //Bricomania
    if ($('#inBrico').prop('checked')) {
        brico = 'Si';
    } else {
        brico = 'No';
    }

    //Contracciones
    if ($('#inConMus').prop('checked')) {
        contmu = 'Si';
    } else {
        contmu = 'No';
    }

    //Mordida
    if ($('#inMordida').prop('checked')) {
        habmord = 'Si';
    } else {
        habmord = 'No';
    }

    //Respiracion Bucal
    if ($('#inRespBucal').prop('checked')) {
        rebuc = 'Si';
    } else {
        rebuc = 'No';
    }

    //Alimentacion
    if ($('#inAliBuena').prop('checked')) {
        ali = 'Buena';
    } else {
        if ($('#inAliMala').prop('checked')) {
            ali = 'Mala';
        }
    }

    //Chupador de Labios
    if ($('#inCHLabio').prop('checked')) {
        chulab = 'Si';
    } else {
        chulab = 'No';
    }

    //Chupador de Lengua
    if ($('#inCHLengua').prop('checked')) {
        chulen = 'Si';
    } else {
        chulen = 'No';
    }

    //Chupador de Dedos
    if ($('#inCHDedos').prop('checked')) {
        chuded = 'Si';
    } else {
        chuded = 'No';
    }

    //Rechina
    if ($('#inSiRechApri').prop('checked')) {
        rechi = 'Si';
    } else {
        if ($('#inNoRechApri').prop('checked')) {
            rechi = 'No';
        }
    }

    // Tratamiento Encias
    if ($('#inSiTratEncias').prop('checked')) {
        Tencia = 'Si';
    } else {
        if ($('#inNoTratEncias').prop('checked')) {
            Tencia = 'No';
        }
    }

    // Cirugia Encias
    if ($('#inSiCiruEncias').prop('checked')) {
        Cencia = 'Si';
    } else {
        if ($('#inNoCiruEncias').prop('checked')) {
            Cencia = 'No';
        }
    }

    // Orientacion de higiene
    if ($('#inSiHigiene').prop('checked')) {
        OHbucal = 'Si';
    } else {
        if ($('#inNoHigiene').prop('checked')) {
            OHbucal = 'No';
        }
    }

    // Hemorragia
    if ($('#inSiHemorragia').prop('checked')) {
        hemo = 'Si';
    } else {
        if ($('#inNoHemorragia').prop('checked')) {
            hemo = 'No';
        }
    }

    // Cepillo Dental

    if ($('#inDuro').prop('checked')) {
        cepi = 'Duro';
    } else {
        if ($('#inMedio').prop('checked')) {
            cepi = 'Medio';
        } else {
            if ($('#inSuave').prop('checked')) {
                cepi = 'Suave';
            } else {
                if ($('#inUltraSuave').prop('checked')) {
                    cepi = 'UltraSuave';
                }
            }
        }
    }

    if ($('#inNombre').val() === "" || $('#inPaterno').val() === "" || $('#inMaterno').val() === "" || $('#inDomicilio').val() === "" ||
        $('#inTelefono').val() === "" || $('#inCelular').val() === "" || $('#inFechaNac').val() === "" || s == null || trat == null ||
        Tmedi == null || Thospi == null || duro == null || rx == null || mordida == null || emba == null || anti == null ||
        fuma == null || bebe == null || droga == null || aler == null || higi == null || ali == null || rechi == null || Tencia == null
        || Cencia == null || OHbucal == null || hemo == null || $('#inVecCepi').val() === "" || cepi == null) {
        alert("Favor de llenar los campos");
    }
    else {
        var datosPaciente = JSON.stringify({

            sNombre: $('#inNombre').val(),
            sApePaterno: $('#inPaterno').val(),
            sApeMaterno: $('#inMaterno').val(),
            sDomicilio: $('#inDomicilio').val(),
            lTelefono: $('#inTelefono').val(),
            lCelular: $('#inCelular').val(),
            dtFechaNacimiento: $('#inFechaNac').val(),
            sSexo: s,
            sApa_Res: apre,
            sApa_Cardi: apcard,
            sApa_Diges: apdig,
            sSis_Nerv: nerv,
            sProp_Guagu: coa,
            sDesmayos: desm,
            sVerti_Mareo: vermar,
            sDiabetes: diabe,
            sTiroides: tiro,
            sFie_Reu: fire,
            sHipertension: hiper,
            sOtroAntecedente: $('#inAPotros').val(),
            sBajoTratamiento: trat,
            sTipoTratamiento: Ttrat,
            sNombreDoctor: $('#inNombreD').val(),
            sApePaterDoc: $('#inPaternoD').val(),
            sApeMaterDoc: $('#inMaternoD').val(),
            lTelDoct: $('#inTelD').val(),
            lCelDoct: $('#inCelD').val(),
            dtIniciaTratamiento: $('#inFechaIni').val(),
            dtTerminaTratamiento: $('#inFechaFin').val(),
            sTomaMedi: Tmedi,
            sMedicamento: $('#inMesp').val(),
            sHospi: Thospi,
            sMotivo: $('#inMotivo').val(),
            sDuros: duro,
            sRx: rx,
            sEncia: encia,
            sInsert_Epi: epite,
            sLengua: lengua,
            sPulpa: pulpa,
            sVelo: velo,
            sCarrillos: carrillo,
            sSob_Mord: mordida,
            sMordi_Abier: mordabi,
            sDesg_Bru: desbru,
            sAnoclusion: anoclu,
            sEmbarazo: emba,
            iMesesEmbarazo: $('#inMeses').val(),
            sAnticonceptivos: anti,
            sTipoAnticoncep: $('#inAntiTipo').val(),
            sFuma: fuma,
            sBebe: bebe,
            sDrogas: droga,
            sAlergia: aler,
            sTipoAlergia: $('#inEspAlerg').val(),
            sHigieneBucal: higi,
            sBricomania: brico,
            sContrac_Musc: contmu,
            sHabi_Mordi: habmord,
            sResp_Bucal: rebuc,
            sChupa_Labios: chulab,
            sChupa_Lengua: chulen,
            sChupa_Dedos: chuded,
            iFrecuencia: $('#inFrecuencia').val(),
            sAlimentacion: ali,
            sRechiApri: rechi,
            sTrataEncias: Tencia,
            sOriHigBucal: OHbucal,
            sCirugiaEncias: Cencia,
            sHemorragiaBucal: hemo,
            iCepillado: $('#inVecCepi').val(),
            sTipoCepillo: cepi,
            sD11: d11,
            sD12: d12,
            sD13: d13,
            sD14: d14,
            sD15: d15,
            sD16: d16,
            sD17: d17,
            sD18: d18,
            sD21: d21,
            sD22: d22,
            sD23: d23,
            sD24: d24,
            sD25: d25,
            sD26: d26,
            sD27: d27,
            sD28: d28,
            sD31: d31,
            sD32: d32,
            sD33: d33,
            sD34: d34,
            sD35: d35,
            sD36: d36,
            sD37: d37,
            sD38: d38,
            sD41: d41,
            sD42: d42,
            sD43: d43,
            sD44: d44,
            sD45: d45,
            sD46: d46,
            sD47: d47,
            sD48: d48,
            iOdontologo: parseInt(id)
        });
        $('#regPaci').attr("disabled", true);
        LlamadoPaciente(datosPaciente);
    }
}

function LlamadoPaciente(datosPaciente) {

    var url = $('#urlPacientes').val();
    console.log(datosPaciente);
    $.ajax({
        url: url,
        data: datosPaciente,
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: true,
        success: SuccessPaciente,
        error: function (xmlHttpRequest, textStatus, errorThrown) {
            alert("Error Agregando");
            $('#regPaci').attr("disabled", false);
        }
    });
}

function SuccessPaciente(data) {

    if (data.Exito) {
        var url = $('#urlAgregaPaciente').val();
        alert("Datos agregados Correctamente");
        window.location.href = url;
    }
    else if (data.Advertencia) {
        alert("El paciente ya existe");
        $('#regPaci').attr("disabled", false);
    }
    else {
        alert("Error");
        $('#regPaci').attr("disabled", false);
    }
    $('#regPaci').attr("disabled", false);
}