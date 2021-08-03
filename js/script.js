// const breakPointWidth = 768;
const breakPointWidthSliders = 1516; //1282;

const IDmenuCoffeeMax = 4;
const IDmenuDessertMax = 4;
const IDlistCoffeeMachineMax = 4;
const IDlistCoffeeTypeMax = 4;
// const IDlistFeedbackMax = 1;

var IDactiveMenuCoffee = 'menuCoffee3';
var IDactiveMenuDessert = 'menuDessert3';
var IDactiveListCoffeeMachine = 'listCoffeeMachine3';
var IDactiveListCoffeeType = 'listCoffeeType3';
// var IDactiveListFeedback = 'listFeedback1';

function deviceCheck() {
	// console.log(window.innerWidth);
	// console.log(window.innerHeight);
	if (window.innerWidth < breakPointWidthSliders){
		for (let i = 2; i <= IDmenuCoffeeMax; i++) {
			let IDmenuCoffee = "menuCoffee" + i;			
			if (IDmenuCoffee != IDactiveMenuCoffee) {				
				let elem = document.getElementById(IDmenuCoffee);
				elem.style.display = "none";
			}
		}
		for (let i = 2; i <= IDmenuDessertMax; i++) {
			let IDmenuDessert = "menuDessert" + i;			
			if (IDmenuDessert != IDactiveMenuDessert) {				
				let elem = document.getElementById(IDmenuDessert);
				elem.style.display = "none";
			}
		}
		for (let i = 2; i <= IDlistCoffeeMachineMax; i++) {
			let IDlistCoffeeMachine = "listCoffeeMachine" + i;			
			if (IDlistCoffeeMachine != IDactiveListCoffeeMachine) {				
				let elem = document.getElementById(IDlistCoffeeMachine);
				elem.style.display = "none";
			}
		}
		for (let i = 2; i <= IDlistCoffeeTypeMax; i++) {
			let IDlistCoffeeType = "listCoffeeType" + i;			
			if (IDlistCoffeeType != IDactiveListCoffeeType) {				
				let elem = document.getElementById(IDlistCoffeeType);
				elem.style.display = "none";
			}
		}
	} else {
		for (let i = 2; i <= IDmenuCoffeeMax; i++) {
			let IDmenuCoffee = "menuCoffee" + i;			
			if (IDmenuCoffee != IDactiveMenuCoffee) {				
				let elem = document.getElementById(IDmenuCoffee);
				elem.style.display = "inline";
			}
		}
		for (let i = 2; i <= IDmenuDessertMax; i++) {
			let IDmenuDessert = "menuDessert" + i;			
			if (IDmenuDessert != IDactiveMenuDessert) {				
				let elem = document.getElementById(IDmenuDessert);
				elem.style.display = "inline";
			}
		}
		for (let i = 2; i <= IDlistCoffeeMachineMax; i++) {
			let IDlistCoffeeMachine = "listCoffeeMachine" + i;			
			if (IDlistCoffeeMachine != IDactiveListCoffeeMachine) {				
				let elem = document.getElementById(IDlistCoffeeMachine);
				elem.style.display = "inline";
			}
		}
		for (let i = 2; i <= IDlistCoffeeTypeMax; i++) {
			let IDlistCoffeeType = "listCoffeeType" + i;			
			if (IDlistCoffeeType != IDactiveListCoffeeType) {				
				let elem = document.getElementById(IDlistCoffeeType);
				elem.style.display = "inline";
			}
		}
	}
}

function slidersElementsSimplify() {
	for (let i = 2; i <= IDmenuCoffeeMax; i++) {
		let IDmenuCoffee = "menuCoffee" + i;			
		if (IDmenuCoffee != IDactiveMenuCoffee) {				
			let elem = document.getElementById(IDmenuCoffee);		
			//let chldrn = elem.children;
			let descendant = elem.getElementsByClassName('sectionFoodInfoName');
			descendant[0].style.textAlign = 'center';
			descendant[0].style.paddingBottom = '0px';
			descendant = elem.getElementsByClassName('sectionFoodInfoDescription');
			descendant[0].style.display = "none";
			descendant = elem.getElementsByClassName('sectionFoodInfoIngredients');
			descendant[0].style.display = "none";
			descendant = elem.getElementsByClassName('blockCardBottomLine');
			descendant[0].style.justifyContent = 'center';
			descendant = elem.getElementsByClassName('sectionFoodInfoCapacity');
			descendant[0].style.display = "none";
		}
	}
	for (let i = 2; i <= IDmenuDessertMax; i++) {
		let IDmenuDessert = "menuDessert" + i;			
		if (IDmenuDessert != IDactiveMenuDessert) {				
			let elem = document.getElementById(IDmenuDessert);
			let descendant = elem.getElementsByClassName('sectionFoodInfoName');
			descendant[0].style.textAlign = 'center';
			descendant[0].style.paddingBottom = '0px';
			descendant = elem.getElementsByClassName('sectionFoodInfoDescription');
			descendant[0].style.display = 'none';
			descendant = elem.getElementsByClassName('sectionFoodInfoIngredients');
			descendant[0].style.display = 'none';
			descendant = elem.getElementsByClassName('blockCardBottomLine');
			descendant[0].style.justifyContent = 'center';
			descendant = elem.getElementsByClassName('sectionFoodInfoCapacity');
			descendant[0].style.display = 'none';			
		}
	}
	for (let i = 2; i <= IDlistCoffeeMachineMax; i++) {
		let IDlistCoffeeMachine = "listCoffeeMachine" + i;			
		if (IDlistCoffeeMachine != IDactiveListCoffeeMachine) {				
			let elem = document.getElementById(IDlistCoffeeMachine);
			let descendant = elem.getElementsByClassName('sectionCoffeeMachinePic');
			descendant[0].style.marginBottom = '16px';
			descendant = elem.getElementsByClassName('sectionCoffeeMachineName');
			descendant[0].style.textAlign = 'center';
			descendant[0].style.marginBottom = '0px';
			descendant = elem.getElementsByClassName('sectionCoffeeMachineDimensions');
			descendant[0].style.display = 'none';
			descendant = elem.getElementsByClassName('sectionCoffeeMachineText');
			/*var a = ["a", "b", "c"];
			descendant.forEach(function(entry) {
				console.log(entry);
			});*/
			descendant[0].style.display = 'none';
			descendant[1].style.display = 'none';
		}
	}
	for (let i = 2; i <= IDlistCoffeeTypeMax; i++) {
		let IDlistCoffeeType = "listCoffeeType" + i;			
		if (IDlistCoffeeType != IDactiveListCoffeeType) {				
			let elem = document.getElementById(IDlistCoffeeType);
			let descendant = elem.getElementsByClassName('sectionFoodInfoFoodPic');
			descendant[0].style.marginBottom = '16px';
			descendant = elem.getElementsByClassName('sectionFoodInfoNameAndDescription');
			descendant[0].style.marginBottom = '0px';
			descendant = elem.getElementsByClassName('sectionFoodInfoName');
			descendant[0].style.textAlign = 'center';
			descendant[0].style.paddingBottom = '0px';
			descendant = elem.getElementsByClassName('sectionFoodInfoDescription');
			descendant[0].style.display = 'none';
			descendant = elem.getElementsByClassName('sectionFoodInfoIngredients');
			descendant[0].style.display = 'none';			
		}
	}	
}

window.onload = function () {
	deviceCheck();
	slidersElementsSimplify();
}
window.onresize = deviceCheck;