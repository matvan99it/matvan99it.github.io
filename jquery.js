
$(document).ready(function(){
    $.getJSON("project_list.json", function(data){
        console.log(data.origin); // Prints: Harry
        console.log(data.file); // Prints: 14
    }).fail(function(){
        console.log("An error has occurred.");
    });
});
