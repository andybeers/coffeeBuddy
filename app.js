var oz;
var ratio = 16;
var gCoffee;
var gWater;
var brewWater;

//convert fluid oz input to grams
function convert(oz) {
	return (oz * 29.57);
}

//Funtion to calculate appropriate grams of coffee and water to use in brew recipe based on user's desired fluid ounces of final brew
function calculateBrew (oz, ratio) {
	gWater = convert(oz); //grams water
	gCoffee = gWater / ratio; //grams coffee
	brewWater = gCoffee * 2 + gWater; //grams water adjusted up to account for absorption by grounds
	return {
		gCoffee: gCoffee,
		brewWater: brewWater,
		ratio: ratio,
		oz: oz
	}
}


document.getElementById("getBrewing()").submit();