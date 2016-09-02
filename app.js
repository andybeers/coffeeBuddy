// var gCoffee;
// var gWater;
// var brewWater;

// var oz = ounces.value;

// var strongerButton = document.getElementById("stronger");
// var weakerButton = document.getElementById("lighter");

// //convert fluid oz input to grams
// function convert(oz) {
// 	return (oz * 29.57);
// }

// //Funtion to calculate appropriate grams of coffee and water to use in brew recipe based on user's desired fluid ounces of final brew
// function calculateBrew (oz, ratio) {
// 	var oz = document.getElementById(ozInput).value;
// 	var ratio = 16;
// 	gWater = convert(oz); //grams water
// 	gCoffee = gWater / ratio; //grams coffee
// 	brewWater = gCoffee * 2 + gWater; //grams water adjusted up to account for absorption by grounds
// 	console.log(oz);
// }

// brewButton.addEventListener("click", test);

var brewButton = document.getElementById("getBrewing");

brewButton.onclick = function() {
	var oz = parseInt(document.getElementById("ozInput").value);
	console.log(oz + "oz input");
}

