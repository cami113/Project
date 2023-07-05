$(document).ready(function(){
    $('.carousel').carousel({
        dist: 0,
        padding: 0,
        shift: 0,
    });
    $('.parallax').parallax({
    });

    $('.tooltipped').tooltip({
        enterDelay: 50,
        margin: 0,
        outDuration: 0,
    });
    $('.collapsible').collapsible();
    $('.modal').modal();
    $('.slider').slider({
        indicators: false,
        interval: 5000,
        height:300,
    });
});

