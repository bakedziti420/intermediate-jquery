console.log("JS is loaded!");

$(document).ready(function() {

	console.log("Everything is ready, let's go!");

	$("#addHome").removeClass('btn-danger').addClass('btn-success');
	
	$("h1").addClass("text-center");
	
	let $newLink = $('<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow</a>');
	$newLink.appendTo('body');
	$('#zillowLink').attr("target", "_blank");
	console.log($('#zillowLink').attr("href"));

	$('#addHome').click(function(event) {
		console.log(event);
		console.log(this);
	});

	$('#homes tbody').on('click', 'tr button', removeHome);

	function removeHome() {
		$(this).closest('tr').fadeOut(1000, function() {
			$(this).closest('tr').remove();
		});
	}

	let $cells = $('#homes thead tr').children();
	$cells.eq(0).css('color', 'blue');
	$cells.eq(4).css('color', 'green');

	function House(address, sf, bedrooms, baths, price) {
		this.address = address;
		this.sf = sf;
		this.bedrooms = bedrooms;
		this.baths = baths;
		this.price = price;
	}

	let sesame = new House("123 Sesame Street", "1,234", 3, 2, "$280,000");
	let sesamo = new House("456 Plaza Sesamo", "4,321", 5, 3.5, "$680,000");

	let newHouses = [sesame,sesamo];

	for(let i = 0; i < newHouses.length; i++) {
		let $newHomeElement = $("<tr>"+
													"<td>"+newHouses[i].address+"</td>"+
													"<td>"+newHouses[i].sf+"</td>"+
													"<td>"+newHouses[i].bedrooms+"</td>"+
													"<td>"+newHouses[i].baths+"</td>"+
													"<td>"+newHouses[i].price+"</td>"+
													"<td><button class='btn btn-xs btn-danger'>Remove</button></td>"+
													"</tr>"
		);

		$("tbody").append($newHomeElement);
	}

});