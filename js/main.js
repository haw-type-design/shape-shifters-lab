$(document).ready(function(){
    $("#one").toggleClass("show");
    $(".one").click(function(){
        $("#one").toggleClass("show");
        var t=document.querySelector("#one");
        var htmlDocument= t.contentWindow.document.body.scrollHeight;
        $("#one").css("height", htmlDocument);
    });
});

