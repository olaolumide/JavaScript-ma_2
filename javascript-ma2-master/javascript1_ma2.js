//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
function myFather(){
	this.houses = 2;
	
	myFather.prototype.property = function(){
		console.log(this.houses + ' houses left.' );	
	}
};
var olaide = new myFather();
olaide.property();
console.log(olaide.houses); //This line proofs constructor prototype inherited.

console.log('----------------------');

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var numberFive = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var fifthNumber = numberFive.slice(4, -5);

//document.getElementById('targetFifth').innerHTML = fifthNumber;
//console.log(JSON.stringify(numberFive[4])); // This method can also be used to pick element from array.
console.log(fifthNumber);

console.log('----------------------');

//3. Delete the last number in the array that you created above.

var fifthNumber = numberFive.slice(0, -1);
	console.log(fifthNumber);

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 
//Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.

var strawberry = 'Banana';
document.getElementById('toBanana').innerHTML = strawberry;
document.getElementById('toBanana2').innerHTML = strawberry;
document.getElementById('toBanana3').innerHTML = strawberry;

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var footballClub = ['Chelsea', 'Arsenal', 'Benfica', 'Sporting'];
function footballTeam(){
	document.getElementById('myTeams').innerHTML = footballClub.join(", ");
	footballClub.splice(4, 0, "Cadillac", "Aston-Martin", "BMW", "Rolls-Royce");	
	document.getElementById('myTeams1').innerHTML = footballClub.join(", ");
	console.log(footballClub);
}

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var people = ['Olumide', 'Ayo', 'Oyinlola'];
var aNameMap = people.filter(people => people.length > 3);
	console.log(aNameMap);

function filterfunction(index){
	return index ;
}

//7. Create a simple function that logs the date.

var realDate = new Date();
	console.log(realDate);

/*var date = realDate.getDate();
var month = realDate.getMonth();
	console.log('Today is ' + date+',' + " " + (month + 1));*/

