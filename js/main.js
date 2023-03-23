$(document).ready(function(){
    const weeks = ["one"];
    const maxDepth = 3;

    for (var i = 0; i < weeks.length; i++) {
        $("#"+weeks[i]).toggleClass("show");
    }
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

function toggler(id) {
    $("#"+id).toggleClass("show");
    var t = document.querySelector("#"+id);
    var htmlDocument= t.contentWindow.document.body.scrollHeight;
    $("#"+id).css("height", htmlDocument);
}