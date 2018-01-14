
$(document).ready(function() {
	

	//IP Address code
	function getIPaddress(){
	    $.getJSON("http://jsonip.com/?callback=?", function (data) {
	        console.log(data);
	        //alert(data.ip);
	        $("#quote").html("<h5><i>IP ADDRESS: </h5></i>" + data.ip + "<br>");
	    });
	}

	$(".getMessage").on("click", function(){
		getIPaddress();
	});

	//Current location code
	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    } else { 
	         alert("Geolocation is not supported by this browser.");
	    }
    }

   function showPosition(position) {
    $("#yourPos").html("Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude);
   }

   	$(".getLoc").on("click", function(){
		getLocation();
	});



});


// $("#quote").html(quote + "<br>" + "<h4><i>-" +
// 					author + "</h4></i>");
// 				message = quote + "- " + author;