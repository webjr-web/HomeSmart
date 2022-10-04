console.log("js connected");
$("#menu").click(function (e) { 
    console.log("btn pressed");
    $("#menu_item").toggleClass("hidden");
    $("#menu_item").toggleClass("flex");
    $("#menu_item").toggleClass("z-10");
    
    
});