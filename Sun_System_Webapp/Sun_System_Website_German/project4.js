$(function () {
    string = "";
    $(window).keypress(function (e) {
        var ev = e || window.event;
        var key = ev.keyCode || ev.which;
        string = string + key;
        lenght = string.length;
        if (string.substring((lenght - 15), lenght) == "112108117116111") {
            $('#pluto-orbit').fadeIn();
        }
    });
});

function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
}

$(document).ready(function () {
    $('#pluto-orbit').hide();

    unloadScrollBars();
	
    $('#mercury-info').hide();
    $('#venus-info').hide();
    $('#earth-info').hide();
    $('#mars-info').hide();
    $('#jupiter-info').hide();
    $('#saturn-info').hide();
    $('#uranus-info').hide();
    $('#neptun-info').hide();
    $('#sun-info').hide();

    $('#sun').click(function () {

        $('#mercury-info').hide();
        $('#venus-info').hide();
        $('#earth-info').hide();
        $('#mars-info').hide();
        $('#jupiter-info').hide();
        $('#saturn-info').hide();
        $('#uranus-info').hide();
        $('#neptun-info').hide();
        $('#sun-info').toggle('slow');
    });
    $('#mercury').click(function () {

//pos = $(this).offset();
//$('#mercury-info').offset({top: pos.top, left: pos.left});

        $('#venus-info').hide();
        $('#earth-info').hide();
        $('#mars-info').hide();
        $('#jupiter-info').hide();
        $('#saturn-info').hide();
        $('#uranus-info').hide();
        $('#neptun-info').hide();
        $('#sun-info').hide();
        $('#mercury-info').toggle('slow');
        //if ($('#mercury-info').is(":visible") == false) {
        //    $('#mercury-info').offset({top: 0, left: 0});
        //}


    });
    $('#venus').click(function () {

        $('#mercury-info').hide();
        $('#earth-info').hide();
        $('#mars-info').hide();
        $('#jupiter-info').hide();
        $('#saturn-info').hide();
        $('#uranus-info').hide();
        $('#neptun-info').hide();
        $('#sun-info').hide();
        $('#venus-info').toggle('slow');
    });
    $('#earth').click(function () {

        $('#mercury-info').hide();
        $('#venus-info').hide();
        $('#mars-info').hide();
        $('#jupiter-info').hide();
        $('#saturn-info').hide();
        $('#uranus-info').hide();
        $('#neptun-info').hide();
        $('#sun-info').hide();
        $('#earth-info').toggle('slow');
    });
    $('#mars').click(function () {

        $('#mercury-info').hide();
        $('#venus-info').hide();
        $('#earth-info').hide();
        $('#jupiter-info').hide();
        $('#saturn-info').hide();
        $('#uranus-info').hide();
        $('#neptun-info').hide();
        $('#sun-info').hide();
        $('#mars-info').toggle('slow');
    });
    $('#jupiter').click(function () {

        $('#mercury-info').hide();
        $('#venus-info').hide();
        $('#earth-info').hide();
        $('#mars-info').hide();
        $('#saturn-info').hide();
        $('#uranus-info').hide();
        $('#neptun-info').hide();
        $('#sun-info').hide();
        $('#jupiter-info').toggle('slow');
    });
    $('#saturn').click(function () {

        $('#mercury-info').hide();
        $('#venus-info').hide();
        $('#earth-info').hide();
        $('#mars-info').hide();
        $('#jupiter-info').hide();
        $('#uranus-info').hide();
        $('#neptun-info').hide();
        $('#sun-info').hide();
        $('#saturn-info').toggle('slow');
    });
    $('#uranus').click(function () {

        $('#mercury-info').hide();
        $('#venus-info').hide();
        $('#earth-info').hide();
        $('#mars-info').hide();
        $('#jupiter-info').hide();
        $('#saturn-info').hide();
        $('#neptun-info').hide();
        $('#sun-info').hide();
        $('#uranus-info').toggle('slow');
    });
    $('#neptun').click(function () {

        $('#mercury-info').hide();
        $('#venus-info').hide();
        $('#earth-info').hide();
        $('#mars-info').hide();
        $('#jupiter-info').hide();
        $('#saturn-info').hide();
        $('#uranus-info').hide();
        $('#sun-info').hide();
        $('#neptun-info').toggle('slow');
    });
});
