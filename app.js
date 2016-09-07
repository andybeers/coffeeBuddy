var brewButton = document.getElementById("getBrewing");
var strongerButton = document.getElementById("stronger");
var lighterButton = document.getElementById("lighter");
var saveButton = document.getElementById("save");


function calculateBrew() {
	var ratioNumber = document.getElementById("ratio").textContent; //Grab ratio from page. Default is 16:1
	var oz = parseInt(document.getElementById("ozInput").value); //grab user input value for oz
	console.log(oz + " oz input");
	if (isNaN(oz)) {
		alert("Please enter a number");
	} else {
		var gWater = oz * 29.57; //convert fluid oz to grams
		console.log(gWater + " grams of water");
		var gCoffee = Math.round(gWater/ratioNumber); //calculate grams coffee
		console.log(gCoffee);
		var brewWater = Math.round(gCoffee * 2 + gWater); //calculate grams water accounting for grounds absorption
		console.log(brewWater);
		var calcRecipe = [oz, gCoffee, brewWater, ratioNumber]; //store recipe values in array
		console.log(calcRecipe);
		document.getElementById("outputCoffee").textContent = calcRecipe[1]; //write coffee output to page
		document.getElementById("outputWater").textContent = calcRecipe[2]; //write water output to page
		return calcRecipe;
	}
}

function makeLighter() {
	var ogRatio = document.getElementById("ratio").textContent;
	console.log(ogRatio);
	var lightRatio = parseInt(ogRatio) +1;
	console.log(lightRatio);
	document.getElementById("ratio").textContent = lightRatio;
	calculateBrew(); 
}

function makeStronger() {
	var ogRatio = document.getElementById("ratio").textContent;
	console.log(ogRatio);
	var strongRatio = parseInt(ogRatio) -1;
	console.log(strongRatio);
	document.getElementById("ratio").textContent = strongRatio;
	calculateBrew(); 
}

//Wire up "calculate brew" button
brewButton.addEventListener("click", calculateBrew);

//Wire up "stronger" button
strongerButton.addEventListener("click", makeStronger);

//Wire up "weaker" button
lighterButton.addEventListener("click", makeLighter);




function Recipe(name, ounces, gramsCoffee, gramsWater, ratioWater) {
	this.name = name;
	this.ounces = ounces;
	this.gramsCoffee = gramsCoffee;
	this.gramsWater = gramsWater;
	this.ratioWater = ratioWater;
}

// function writeRecipe(outputId, recipeArray) {

// }














