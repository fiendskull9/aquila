$(function() {
        var xmlhttp = new XMLHttpRequest();
 
        xmlhttp.open("GET", "shows.xml", true);
        xmlhttp.send();

	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {

		var dataraw = $.parseXML(xmlhttp.response); 


		let $xml = $(dataraw);
		let $show = $xml.find("event");
	
		let content = "";
		$show.each(function(){
		
			let showdate = $(this).find('date').text();
			let venue = $(this).find('venue').text();
			let showlocation = $(this).find('location').text();
			let starttime = $(this).find('timestart').text();
			let endtime = $(this).find('timeend').text();
			let eventlink = $(this).find('eventlink').text();

			
			content = `<div class="row"
     id="show">`
				+ `	<div class="col"
	     id="show-date"><h1>`+showdate+`</h1>`
		 			
				+ `	</div></div><div class="row" id="show"><div class="col"
	     id="show-info">`
				+ `		<strong>`+showlocation+`</strong>`
				+ `		`+venue+``
				+ `<br>`+starttime+` - `+endtime+``
				+ `		<br>
			<a class="link"
			   href="`+eventlink+`"
			   target="_blank">
				<i class="fab fa-facebook">&nbsp;</i>Event Link
			</a>`
				+ `		</div>`
				+ `	</div>`;
			
			$("#shows").append(content);
			
		console.log(showdate);
		});
		
		};
	};
});


