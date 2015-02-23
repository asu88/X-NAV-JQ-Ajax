
jQuery(document).ready(function() {

    var p = $.ajax({
        type:"GET",
        url: "text",
        cache:false
        //context: document.body
    });
    
    p.done(function(text) {
        $("div.texto").html(text);
        
    });

    $("button").click(function(){
        $.ajax({
           type:"GET",
            url:"text2",
            cache:false
        }).done(function(text2){
            $("div.texto2").html(text2);
        });
        
     });
});
