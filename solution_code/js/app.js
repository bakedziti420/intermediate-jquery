$(document).ready(function() {
	console.log("jQuery ready for action!");
	$('#addHome').removeClass('btn-danger').addClass('btn-success');
	$('h1').addClass('text-center');
	var $newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com</a>' );
	$newLink.attr("target", "_blank");
	$newLink.appendTo('body');
	console.log($("#zillowLink").attr("href"));
	$('#addHome').click(function(event) {
		console.log(event);
		console.log(this);
	});

	$('#homes tbody').on('click', 'tr', removeHome);

	function removeHome() {
	    $(this).remove();
	}

	function House(address, sf, bedrooms, baths, price) {
		this.address = address;
		this.sf = sf;
		this.bedrooms = bedrooms;
		this.baths = baths;
		this.price = price;
	}

	var sesame = new House("123 Sesame Street", "1,234", 3, 2, "$280,000");
	var sesamo = new House("456 Plaza Sesamo", "4,321", 5, 3.5, "$680,000");

	var $sesameElement = $("<tr>"+
													"<td>"+sesame.address+"</td>"+
													"<td>"+sesame.sf+"</td>"+
													"</tr>"
	);

	var $newElement = $("tr");

	$("tbody").append($sesameElement);

	console.log(sesame);
	console.log(sesamo);
});