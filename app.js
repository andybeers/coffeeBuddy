var brewButton = document.getElementById("getBrewing");
var strongerButton = document.getElementById("stronger");
var lighterButton = document.getElementById("lighter");
var saveButton = document.getElementById("save");
var nameField = document.getElementById("nameInput");
var recipeOutput = [];


function calculateBrew() {
	var ratioNumber = document.getElementById("ratio").textContent; //Grab ratio from page. Default is 16:1
	var oz = parseInt(document.getElementById("ozInput").value); //grab user input value for oz
	console.log(oz + " oz input");
	if (isNaN(oz)) {
		alert("Please enter an ounce number.");
	} else {
		var finalWater = oz * 29.57; //convert fluid oz to grams
		console.log(finalWater + " grams of water");
		var absorption = ratioNumber - 2; // account for grounds absorbing twice their weight in water
		var gCoffee = Math.round(finalWater/absorption); //calculate grams coffee
		console.log(gCoffee);
		var gWater = Math.round(finalWater + (gCoffee * 2)); //calculate grams water used in recipe
		var calcRecipe = [oz, gCoffee, gWater, ratioNumber]; //store recipe values in array
		console.log(calcRecipe);
		document.getElementById("outputCoffee").textContent = calcRecipe[1]; //write coffee output to page
		document.getElementById("outputWater").textContent = calcRecipe[2]; //write water output to page
		recipeOutput = calcRecipe;
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

function clearField() {
	this.placeholder = "";
}

//Wire up "calculate brew" button
brewButton.addEventListener("click", calculateBrew);

//Wire up "stronger" button
strongerButton.addEventListener("click", makeStronger);

//Wire up "weaker" button
lighterButton.addEventListener("click", makeLighter);

//Clear text input for recipe on focus
nameField.addEventListener("focus", clearField);

saveButton.addEventListener("click", createRecipe);

function Recipe(name, ounces, gramsCoffee, gramsWater, ratioWater) {
	this.name = name;
	this.ounces =  ounces;
	this.gramsCoffee = gramsCoffee;
	this.gramsWater = gramsWater;
	this.ratioWater = ratioWater;
}

function createRecipe() {
	var recName = document.getElementById("nameInput").value;
	recName = new Recipe(recName, recipeOutput[0], recipeOutput[1], recipeOutput[2], recipeOutput[3]);
	console.log(recName);
} 
//onclick getelebyID("name").text = new Recipe


// function calculateBrew() {
// 	var ratioNumber = document.getElementById("ratio").textContent; //Grab ratio from page. Default is 16:1
// 	var oz = parseInt(document.getElementById("ozInput").value); //grab user input value for oz
// 	console.log(oz + " oz input");
// 	if (isNaN(oz)) {
// 		alert("Please enter an ounce number.");
// 	} else {
// 		var finalWater = oz * 29.57; //convert fluid oz to grams
// 		console.log(finalWater + " grams of water");
// 		var absorption = ratioNumber - 2; // account for grounds absorbing twice their weight in water
// 		var gCoffee = Math.round(finalWater/absorption); //calculate grams coffee
// 		console.log(gCoffee);
// 		var gWater = Math.round(finalWater + (gCoffee * 2)); //calculate grams water used in recipe
// 		var calcRecipe = [oz, gCoffee, gWater, ratioNumber]; //store recipe values in array
// 		console.log(calcRecipe);
// 		document.getElementById("outputCoffee").textContent = calcRecipe[1]; //write coffee output to page
// 		document.getElementById("outputWater").textContent = calcRecipe[2]; //write water output to page
// 		return calcRecipe;
// 	}
// }


// localStorage.setItem("key", "value");
// localStorage.getItem("key"); --> "value"

// localStorage.setItem("object", JSON.stringify(object));
// console.log(JSON.parse(localStorage.getItem("car")));













