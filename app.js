var brewButton = document.getElementById("getBrewing"); //Grab all buttons and inputs and store in variables
var strongerButton = document.getElementById("stronger");
var lighterButton = document.getElementById("lighter");
var saveButton = document.getElementById("save");
var nameField = document.getElementById("nameInput");
var selectDrop = document.getElementById("savedRec");
var recipeOutput = []; //Create array to store recipe values

//Function to calculate grams of coffee and water given an ounce input
function calculateBrew() {
	var ratioNumber = document.getElementById("ratio").textContent; //Grab ratio from page. Default is 16:1
	var oz = parseInt(document.getElementById("ozInput").value); //Grab user input value for oz
	console.log(oz + " oz input");
	if (isNaN(oz)) { //Make sure oz input isn't empty or invalid
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
		recipeOutput = calcRecipe; //store recipe in global variable as an array
	}
}

//Function to increase ("widen") brew ratio
function makeLighter() {
	var ogRatio = document.getElementById("ratio").textContent; //get ratio from DOM
	console.log(ogRatio);
	var lightRatio = parseInt(ogRatio) +1; //increase ratio by 1
	console.log(lightRatio);
	document.getElementById("ratio").textContent = lightRatio; //write new ratio to DOM
	calculateBrew(); //recalculate brew using new ratio value
}

//Function to decrease ("tighten") brew ratio
function makeStronger() {
	var ogRatio = document.getElementById("ratio").textContent; //get ratio from DOM
	console.log(ogRatio);
	var strongRatio = parseInt(ogRatio) -1; //decrement ratio
	console.log(strongRatio);
	document.getElementById("ratio").textContent = strongRatio; //write new ratio to DOM
	calculateBrew(); //recalculate brew using new ratio value
}

//Function to clear input field once the user focuses
function clearField() {
	this.placeholder = "";
}

//Clear text input for recipe on focus
nameField.addEventListener("focus", clearField);

//Wire up "calculate brew" button
brewButton.addEventListener("click", calculateBrew);

//Wire up "stronger" button
strongerButton.addEventListener("click", makeStronger);

//Wire up "lighter" button
lighterButton.addEventListener("click", makeLighter);

//Wire up "save" button
saveButton.addEventListener("click", createRecipe);

//Function to save recipe in local storage
function createRecipe() {
	var recName = document.getElementById("nameInput").value; //Grab user recipe name input
	var oz = recipeOutput[0]; //Retrieve current recipe values from array
	var ratio = recipeOutput[3];
	var recipe = [oz, ratio];
	localStorage.setItem(recName, JSON.stringify(recipe)); //Store recipe name and values in local storage as key:value strings
	console.log(recipe + " set to local storage");
	var dropDown = document.getElementById("savedRec"); //Select dropdown
	var newOption = document.createElement("option"); //Create new option
	newOption.textContent = recName; //Assign recipe name to new option
	newOption.setAttribute("value", recName); //Assign option value
	dropDown.appendChild(newOption); //Add new option to dropdown
}

//Function to construct dropdown with previously saved recipes
function createRecipeList() {
	console.log("Onload select creation running!");
	var nameIndex = localStorage.length;
	for (i = 0; i < nameIndex; i++) { //Iterate through local storage
		var dropDown = document.getElementById("savedRec"); //Select dropdown
		var newOption = document.createElement("option"); //Create new option
		newOption.innerText = localStorage.key(i);  //Assign option value with local storage .key
		newOption.setAttribute("value", localStorage.key(i)); //Assign value with local storage .key
		dropDown.appendChild(newOption); //Add new option to dropdown
	}
}

//Builds the dropdown using saved recipes after page has loaded
window.onLoad = createRecipeList();

//Wire up dropdown menu to display saved recipes when selected
selectDrop.addEventListener("change", savedRecipe);

//Function to repopulate DOM with saved recipe values
function savedRecipe() {
	var name = selectDrop.value; //Grab selected option
	console.log(name);
	var recipe = JSON.parse(localStorage.getItem(name)); //Retrieve corresponding values from local storage
	console.log(recipe);
	document.getElementById("ozInput").value = parseInt(recipe[0]); //Write oz value to DOM
	document.getElementById("ratio").textContent = recipe[1]; //Write ratio to DOM
	calculateBrew(); //Run calculate brew using saved recipe values
}