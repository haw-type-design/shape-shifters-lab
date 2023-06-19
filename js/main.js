let weeks = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen"];
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
        runner(targetClass.substring(5));

    });


});

$(window).on("load",function(){
    for (var i = 0; i < weeks.length; i++) {
        $("#"+weeks[i]).toggleClass("show");
    }

});

async function runner(id) {
    await toggler(id);
    window.scrollTo({
        top: $("."+id).position().top,
        left: 0,
        behavior: 'smooth'
    });
}

async function toggler(id) {
    $("#"+id).toggleClass("show");
    var t = document.querySelector("#"+id);
    var htmlDocument= t.contentWindow.document.body.scrollHeight;
    $("#"+id).css("height", htmlDocument);
    if(document.title.includes("Week " + capitalizeFirstLetter(id))) {
        document.title = "Shape Shifters LAB";
    } else {
        document.title = "Week " + capitalizeFirstLetter(id) + " — Shape Shifters LAB";
    }
    for (var i = 0; i < weeks.length; i++) {
        if(weeks[i] !== id) {
            $("#"+weeks[i]).removeClass("show");
        }
    }
    return;
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}