$("h1").addClass("big-title");

$("button").text("Don't Click Me");

$("button").click(function(){
    $("h1").css("color","purple");
});

$(document).keypress(function(event){
    $("h1").text(event.key);
});

$("h1").on("mouseover", function(){
    $("h1").text("Hover");
})