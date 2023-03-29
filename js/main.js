let weeks = ["one"];
$(document).ready(function(){
    let maxDepth = 3;
    $(document).click(function(event) {
        var target = $(event.target);
        var targetClass = target.parent().prop('className');
        for (var i = 0; i < maxDepth; i++) {
            if(weeks.includes(targetClass.substring(5))) {
                break;
            } else {
                target = target.parent();
                targetClass = target.parent().prop('className');
            }
        }
        toggler(targetClass.substring(5));
    });


});

$(window).on("load",function(){
    for (var i = 0; i < weeks.length; i++) {
        $("#"+weeks[i]).toggleClass("show");
    }

});


function toggler(id) {
    $("#"+id).toggleClass("show");
    var t = document.querySelector("#"+id);
    var htmlDocument= t.contentWindow.document.body.scrollHeight;
    $("#"+id).css("height", htmlDocument);
    if(document.title.includes("Week")) {
        document.title = "Shape Shifters LAB";
    } else {
        document.title = "Week " + id.toUpperCase() + " — Shape Shifters LAB";
    }

}