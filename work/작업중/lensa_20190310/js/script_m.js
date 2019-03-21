$(function(){
    $(".btn_open").click(function(){
        $("header").addClass("on");
    });
    $(".btn_close").click(function(){
        $("header").removeClass("on");
    });
});