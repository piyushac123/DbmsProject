	$(document).ready(function(){
    
	var qty=0;


    $("button").click(function(){
        

    	qty=0;
    	$("#mycart").show();
    	$(".btn-class").hide();
		$(".btn_class_1").show();
		$(".btn_class_2").show();
		$("#qty").show();

		$("#qty").html(qty);

    });

    
    $(".btn_class_1").click(function(){

    	qty++;
    	$("#qty").html(qty);
    });
    
    $(".btn_class_2").click(function(){

    	if(qty==1)
    	{

    	qty--;
   		$("#mycart").hide();
    	$(".btn-class").show();
		$(".btn_class_1").hide();
		$(".btn_class_2").hide();
		$("#qty").hide();
 		
    	}


    	if(qty>0)
    	{
    	qty--;
    	}
    	
    	$("#qty").html(qty);
    });
    

    


});

