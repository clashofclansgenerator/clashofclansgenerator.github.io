function deviceStart(){                                                                                                                                                       
	if($('#device').val() === "Android"){
	$("#icondevice").attr("src","img/androidIcon.png");
 } else {
 	$("#icondevice").attr("src","img/appleIcon.png");
 } 

	$('#device').change(function(){
	if($(this).val() === "Android"){
		$("#icondevice").attr("src","img/androidIcon.png");
	} else {
		$("#icondevice").attr("src","img/appleIcon.png");
	}
	})
}

deviceStart();



function usernameEmpty(){
	swal(
	  "Error!",
	  "You can't leave your username field empty!",
	  'error'
	)
}

function usernameShort(){
	swal(
	  "Error!",
	  "Your username is too short!",
	  'error'
	)
}


function messages(){

	$('#consoleMessages').typeIt({
     strings: ["$// Connecting to Supercell Server", 
     			"$// Pending request",
     			"$// Request has been received",
     			"$// Reading username", 
     			'$// User: "' + $("#username").val() + '" - Searching..',
     			"$// Searching " + $("#username").val() + " Wait please" ,
     			"$// ...",
     			"$// Retry (1)",
     			"$// Searching " + $("#username").val() + "... Wait please" , 
     			"$// ...",
     			"$// <span style='color:green;'>Username " +  $("#username").val() + " has been found!</span>",
     			"$// Reading resources request...",
     			"$// Wait a moment please",
     			"$// ....", 
     			"$// <span style='color:#ffd233'>Gold: " + $("#gold").val() + "</span>",
     			"$// <span style='color:#de1fc7'>Elixir: " + $("#elixir").val() + "</span>",
     			"$// <span style='color:#9bcc36'>Gems: " + $("#gems").val() + "</span>",
     			"$// Transferring packages " + $("#username").val(),
     			"$// Connecting....",
     			"$// <span style='color:green;'>Successful connection!</span>",
     			"$// Adding requested packages",
     			"$// .",
     			"$// ..",
     			"$// ...",],
     speed: 10,
     autoStart: true,
     callback: function(){
     	$('#boxxHeader').slideUp(400);
     	$('#step3').slideUp(400,function(){
     		$('#step4').slideDown();
     	});
     }
    });  
                 
}


$('#continue1').on('click',function(){
	if($("#username").val().length === 0){
		usernameEmpty();
	} else if($("#username").val().length < 3){
		usernameShort();
	} else{
		$('#step1').fadeOut(500,function(){
		$('#step2').fadeIn();
	});
	}
	
});

$('#volver1').on('click',function(){
	$('#step2').fadeOut(500,function(){
		$('#step1').fadeIn();
	});
});





$('#continue2').on('click',function(){
	$('#step2').slideUp(400, function(){
		$('#step3').slideDown(400,function(){
			messages();
		});
	});
});



