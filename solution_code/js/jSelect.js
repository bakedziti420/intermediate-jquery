console.log("jSelect in full effect");

function mySelector(input) {
	console.log("selectin and affectin");
	console.log(input);
	var node;
	//input start with #
	if (input[0] === "#") {
		console.log("this is an id");
		node = document.getElementById(input.substr(1));
	} 
	//input starts with .
	else if(input[0] === ".") {
		console.log("this is a class");
		node = document.getElementsByClassName(input.substr(1));
	} 
	// doesn't start with anything
	else {
		console.log("this is a tag");
		node = document.getElementsByTagName(input);
	}

	return node;
}

var allH1s = mySelector("h1");
console.log(allH1s);
// mySelector(".class");
// mySelector("#id");