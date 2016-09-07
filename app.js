var brewButton = document.getElementById("getBrewing");
var strongerButton = document.getElementById("stronger");
var weakerButton = document.getElementById("lighter");
var saveButton = document.getElementById("save");


function calculateBrew() {
	var ratio = 16; //Set default ratio 16:1
	var oz = parseInt(document.getElementById("ozInput").value); //grab user input value for oz
	console.log(oz + " oz input");
	var gWater = oz * 29.57; //convert fluid oz to grams
	console.log(gWater + " grams of water");
	var gCoffee = Math.round(gWater/ratio); //calculate grams coffee
	console.log(gCoffee);
	var brewWater = Math.round(gCoffee * 2 + gWater); //calculate grams water accounting for grounds absorption
	console.log(brewWater);
	var calcRecipe = [oz, gCoffee, brewWater, ratio];
	console.log(calcRecipe);
	document.getElementById("outputCoffee").textContent = calcRecipe[1];
	document.getElementById("outputWater").textContent = calcRecipe[2];
	return calcRecipe;
}

//Wire up 
brewButton.addEventListener("click", calculateBrew);




function Recipe(name, ounces, gramsCoffee, gramsWater, ratioWater) {
	this.name = name;
	this.ounces = ounces;
	this.gramsCoffee = gramsCoffee;
	this.gramsWater = gramsWater;
	this.ratioWater = ratioWater;
}

// function writeRecipe(outputId, recipeArray) {

// }














