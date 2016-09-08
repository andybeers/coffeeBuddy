var brewButton = document.getElementById("getBrewing");
var strongerButton = document.getElementById("stronger");
var lighterButton = document.getElementById("lighter");
var saveButton = document.getElementById("save");
var nameField = document.getElementById("nameInput");
var selectDrop = document.getElementById("savedRec");
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
// saveButton.addEventListener("click", showRecipe);
// saveButton.addEventListener("click", writeSelect);

// function Recipe(name, ounces, gramsCoffee, gramsWater, ratioWater) {
// 	this.name = name;
// 	this.ounces =  ounces;
// 	this.gramsCoffee = gramsCoffee;
// 	this.gramsWater = gramsWater;
// 	this.ratioWater = ratioWater;
// }

function createRecipe() {
	var recName = document.getElementById("nameInput").value;
	var oz = recipeOutput[0];
	var ratio = recipeOutput[3];
	var recipe = [oz, ratio]
	localStorage.setItem(recName, JSON.stringify(recipe));
	console.log(recipe + " set to local storage");
	var dropDown = document.getElementById("savedRec");
	var newOption = document.createElement("option");
	newOption.textContent = recName;
	newOption.setAttribute("value", recName);
	dropDown.appendChild(newOption);
}

window.onLoad = createRecipeList();

function createRecipeList() {
	console.log("Onload select creation running!");
	var nameIndex = localStorage.length;
	for (i = 0; i < nameIndex; i++) {
		var dropDown = document.getElementById("savedRec");
		var newOption = document.createElement("option");
		newOption.innerText = localStorage.key(i);
		newOption.setAttribute("value", localStorage.key(i));
		dropDown.appendChild(newOption);
	}
}

//Function to repopulate DOM with saved recipe values
selectDrop.addEventListener("change", savedRecipe);

function savedRecipe() {
	var name = selectDrop.value;
	console.log(name);
	var recipe = JSON.parse(localStorage.getItem(name));
	console.log(recipe);
	document.getElementById("ozInput").value = parseInt(recipe[0]);
	document.getElementById("ratio").textContent = recipe[1];
	calculateBrew();
}




//Pre- refactored version of drop creation function
//***************************
// function createRecipeList() {
// 	console.log("Onload select creation running!");
// 	var nameIndex = localStorage.length;
// 	var names = [];
// 	for (i = 0; i < nameIndex; i++) {
// 		names[i] = localStorage.key(i);
// 	}
// 	console.log(names);
// 	for (i = 0; i < names.length; i++) {
// 		var dropDown = document.getElementById("savedRec");
// 		var newOption = document.createElement("option");
// 		newOption.innerText = names[i];
// 		newOption.setAttribute("value", names[i]);
// 		dropDown.appendChild(newOption);
// 	}
// }




