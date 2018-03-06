//Exercise One

var num = prompt("Enter a Number");
var total = 0; 

for(var i = 0; i <= num; i++){
	total = total + i; 
}

console.log(total);

//Exercise Two

var startGame = prompt("Do you want to play?");
var result = "";

if(startGame == "yes"){
	do{
		var y = prompt("Enter a word");
		result += y += " ";
		var question = prompt("Do you want to play again?");
	} while (question == "yes");
}

console.log(result);

// Exercise Three

var ask = prompt("Would you like to print your name?");
var askAgain = "yes";
var greeting = "Hello, my name is ";

if(ask === "yes"){
		var name = prompt("What is your name?");
		var response = greeting + name;
		console.log(greeting + name);
		
		while(askAgain=="yes"){
			var askAgain = prompt("Would you like to print this again?");
			console.log(response += "!");
		}
	}

// Exercise Four

var ask = prompt("What time of day is it?");

if(ask == "morning"){
	console.log("Since it is morning, you should be eating breakfast. We suggest eggs and toast.")
} else if(ask == "noon"){
	console.log("Since it is noon, you should be eating lunch. We suggest a salad.");
} else if(ask == "evening"){
	console.log("Since it is evening, you should be eating dinner. We suggest chicken and rice.");
}