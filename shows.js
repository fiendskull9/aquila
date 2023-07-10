$(function() {
		
	
$.ajax({
type: "GET",
url: "shows.xml",
dataType: "xml",
success: function(xmlraw) {
 //remainder of the code

		let dataraw = $.parseXML(xmlraw); 
	
		let $xml = $(dataraw);
	
		let $show = $xml.find("event");
	
		let content = "";
		$show.each(function(){
		
			let showdate = $(this).find('date').text();
			let venue = $(this).find('venue').text();
			let showlocation = $(this).find('location').text();
			let starttime = $(this).find('timestart').text();
			let endtime = $(this).find('timeend').text();

			
			content += `<div class="row" id="show">`
				+ `	<div class="col-4" id="show-date">`+showdate+`</div>`
				+ `	<div class="col-8" id="show-info">`
				+ ` <h1>`+showlocation+`</h1>`
				+ `	<h2>`+venue+`</h2>`
				+ `	<i>`+starttime+` - `+endtime+`</i>`
				+ `<br> <a class="link" href="`+eventlink+`" target="_blank">
									<i class="fab fa-facebook">&nbsp;</i>Event Link
								</a>`
				+ `</div>`
				+ `</div>`;
			
			$("#shows" ).append(content);
		
		});
	
	}
});
});