var brewButton = document.getElementById("getBrewing");
var strongerButton = document.getElementById("stronger");
var weakerButton = document.getElementById("lighter");


function calculateBrew() {
	var ratio = 16; //Set default ratio 16:1
	var oz = parseInt(document.getElementById("ozInput").value); //grab user input value for oz
	console.log(oz + " oz input");
	var gWater = oz * 29.57; //convert fluid oz to grams
	console.log(gWater + " grams of water");
	var gCoffee = gWater/ratio; //calculate grams coffee
	console.log(gCoffee);
	var brewWater = gCoffee * 2 + gWater; //calculate grams water accounting for grounds absorption
	console.log(brewWater);
	var recipe = [oz, gCoffee, brewWater, ratio];
	console.log(recipe);
	return recipe;
}

brewButton.addEventListener("click", calculateBrew);




