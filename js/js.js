function calculate()

{
	//Stores the input from the user to calculate later
	var inputs = [""];
	//string to store current input string
	var totalString ="";
	//Operators array for validation without the .
	var operators1 = ["+", "-", "/", "*", "."];
	//Operators array with the . for validation
	var operators2 = ["."];

	var nums = [0,1,2,3,4,5,6,7,8,9];

	var operatorTally = 0;

	var newTotal;

	document.getElementById("number_display").innerHTML = "0";	

function getValue(input)
{
	if(operators2.includes(inputs[inputs.length-1]=== true && inputs==="."))
	{
		console.log("Duplicate '.' ");

	}
	else if(inputs.length===1 && operators1.includes(input)===false)
	{
		inputs.push(input);
	}
	
	else if(operators1.includes(inputs[inputs.length-1])===false)
	{
		inputs.push(input);
	}

	else if(input >= 0 && input < 10)
	{
		inputs.push(input);
	
	}



	update();
}



function update()
{
	totalString = inputs.join("");
	document.getElementById("number_display").innerHTML = totalString;	
}



function getTotal()
{
	totalString = inputs.join("");
	document.getElementById("number_display").innerHTML = eval(totalString);
	newTotal = eval(totalString);
	inputs = [""];
}


var button = document.getElementsByTagName("button");
var buttons = [];

 for (var i = 0; i < button.length; i++) {
   button[i].addEventListener("click", function() {

   	if(this.value==="AC")
   	{
   		inputs=["0"];
   		update();
   	}
   	else if(this.value==="CE")
   	{
   		inputs.pop();
   		if(inputs.length <1)
   		{
   			inputs=["0"];
   		}
   		//"pop" off the last array value;
   		update();
   	}
   	else if(this.value==="=")
   	{
   		getTotal();
   	}
   	else{
   		if(inputs[inputs.length-1].indexOf("+","-","/","*",".")===-1)
   		{
   			getValue(this.value);
   		}
   		else
   		{
   			getValue(this.value);
   		}
   	}
});
}

}
