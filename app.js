$(document).ready(function() {

    $('#buttoncontainer .1').click(function() {
        $('.imgcontainer .pic1').css({left: "0%"});
        $('.imgcontainer .pic2').css({left: "100%"});
        $('.imgcontainer .pic3').css({left: "200%"});
    });
    $('#buttoncontainer .2').click(function() {
        $('.imgcontainer .pic1').css({left: "100%"});
        $( ".imgcontainer .pic2" ).animate({ "left": "0%" }, "slow" );
        $('.imgcontainer .pic3').css({left: "200%"});

    });
    $('#buttoncontainer .3').click(function() {
        $('.imgcontainer .pic1').css({left: "200%"});
        $('.imgcontainer .pic2').css({left: "100%"});
        $('.imgcontainer .pic3').css({left: "0%"});
    });
});
