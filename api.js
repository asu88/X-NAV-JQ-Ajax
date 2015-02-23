
jQuery(document).ready(function() {

    var p = $.ajax({
        type:"GET",
        url: "text",
        cache:false
        //context: document.body
    });
    
    p.done(function(text) {
        $("#texto").html(text);
        
    });

});
