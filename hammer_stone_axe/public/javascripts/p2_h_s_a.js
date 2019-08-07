var player1_score = 0;
var player2_score = 0;

var player1_name
var	player1_weapon 

var player2_name
var weapons
var player2_weapon
var canClick = true;

var counter
var endgame

$("#playAgain2").hide();
$("#crown").hide();
$("#crown2").hide();

$("#submit-p1").click(function(){
	var player1_name = document.getElementById('p1_name').value;
	$("#showN").html(player1_name);
	$("#p1_name_area").hide();
	versus();
	});
$("#submit-p2").click(function(){
	var player2_name = document.getElementById('p2_name').value;
	$("#showP2").html(player2_name);
	$("#p2_name_area").hide();
	versus();
});

function versus(){
	var player1_name = document.getElementById('p1_name').value;
	var player2_name = document.getElementById('p2_name').value;
	$("#versus").html(player1_name + "  versus  " + player2_name);
};

	//for enter button to work

	//player 1 button selection
	var stone = document.getElementById("p1_stone");
	var hammer = document.getElementById("p1_hammer");
	var axe = document.getElementById("p1_axe");

	// stone.addEventListener("click", choiceStone);
	// hammer.addEventListener("click", choiceHammer);
	// axe.addEventListener("click", choiceAxe);

	//player 2 button selection
	var stone2 = document.getElementById("p2_stone");
	var hammer2 = document.getElementById("p2_hammer");
	var axe2 = document.getElementById("p2_axe");

	document.getElementsByTagName("body")[0].addEventListener('keypress', function(e){
		var key = e.which;
		console.log(key);

		if (e.target.tagName.toLowerCase() != "input" && typeof player1_weapon == "undefined") {

			if (key == 97) { //pressing a
				choiceHammer();
			}
			if (key == 115) { //pressing s
				choiceStone();
			}
			if (key == 100) { //pressing d
				choiceAxe();
			}
		}	
		if (e.target.tagName.toLowerCase() != "input" && typeof player2_weapon == "undefined") {
			if (key == 106) { //pressing j
				choiceHammer2();
			}
			if (key == 107){ //pressing k
				choiceStone2();
			}
			if (key == 108) { //pressing l
				choiceAxe2();
			}

		}

		if(typeof player1_weapon != "undefined" && player2_weapon != "undefined"){
			endgame = 5;
			if (player1_score < endgame && player2_score < endgame) {
				counter = setTimeout(restart, 3000);
				$("#countdown").html("Next round starts in 3 secs...");
			}
		}
	});

function restart(){
	player1_weapon = undefined;
	player2_weapon = undefined;
	document.getElementById("showGif").setAttribute("src", "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="); //find transparent image
	$("#countdown").html(("GO!").bold());
	$("#p1_choice_display").html('');
	$("#p2_choice_display").html('');
	$("#roundWinner").html('');
}

	//RIGHT ARROW KEY event.which 39 event.key ArrowRight event.code ArrowRight
	//LEFT ARRROW KEY event.which 37 event.key ArrowLeft event.code ArrowLeft
	//a KEY event.key a event.which 65 event.code KeyA
	//s KEY event.key s event.which 83 event.code KeyS
	//d KEY event.key d event.which 68 event.code KeyD
	//need keydown to trigger keypress
//})
	// stone2.addEventListener("click", choiceStone2);
	// hammer2.addEventListener("click", choiceHammer2);
	// axe2.addEventListener("click", choiceAxe2);

function choiceStone() {
	if(canClick){
		player1_name = document.getElementById('p1_name').value;
		var weapons = ["hammer", "stone", "axe"];
		player1_weapon = weapons[1];

		$("#p1_choice_display").html(player1_name + "  chooses  " + player1_weapon + "!").hide();
		battle();
	}	
};
	
function choiceStone2() {
		if(canClick){
			player2_name = document.getElementById('p2_name').value;
			var weapons = ["hammer", "stone", "axe"];
			player2_weapon = weapons[1];

			$("#p2_choice_display").html(player2_name + "  chooses  " + player2_weapon + "!").hide();
			battle();
		}
}; 

function choiceHammer() {
	if (canClick) {
		player1_name = document.getElementById('p1_name').value;
		
		var weapons = ["hammer", "stone", "axe"];
		player1_weapon = weapons[0];

		$("#p1_choice_display").html(player1_name + "  chooses  " + player1_weapon + "!").hide();
		battle();
	}
};

function choiceHammer2(){
	if (canClick) {
		player2_name = document.getElementById('p2_name').value;
		var weapons = ["hammer", "stone", "axe"];	
		player2_weapon = weapons[0];

		$("#p2_choice_display").html(player2_name + "  chooses  " + player2_weapon + "!").hide();
		battle();
	}
};

function choiceAxe() {
	if (canClick) {
		player1_name = document.getElementById('p1_name').value;
		
		var weapons = ["hammer", "stone", "axe"];
		player1_weapon = weapons[2];

		$("#p1_choice_display").html(player1_name + "  chooses  " + player1_weapon + "!").hide();
		battle();
	}
};

function choiceAxe2(){
	if (canClick) {
		player2_name = document.getElementById('p2_name').value;
		var weapons = ["hammer", "stone", "axe"];	
		player2_weapon = weapons[2];

		$("#p2_choice_display").html(player2_name + "  chooses  " + player2_weapon + "!").hide();
		battle();
	}
};

function battle(){
	console.log(player2_weapon, player1_weapon);
	var weapons = ["hammer", "stone", "axe"];
	endgame = 5;

	if (player2_weapon == weapons[0] && player1_weapon == weapons[1]){
		document.getElementById("showGif").setAttribute("src", "/images/hammer.jpg");
		$("#roundWinner").html(player2_name + "  wins the round!");

		$("#p1_choice_display").html(player1_name + "  chooses  " + player1_weapon + "!").show();
		$("#p2_choice_display").html(player2_name + "  chooses  " + player2_weapon + "!").show();

		player2_score ++;
		$("#p2_Score").html(player2_score);	
	}
	else if (player2_weapon == weapons[0] && player1_weapon == weapons[2]){
		document.getElementById("showGif").setAttribute("src", "/images/axe.jpg");
		$("#roundWinner").html(player1_name + "  wins the round!");
		
		$("#p1_choice_display").html(player1_name + "  chooses  " + player1_weapon + "!").show();
		$("#p2_choice_display").html(player2_name + "  chooses  " + player2_weapon + "!").show();

		player1_score ++;
				$("#p1_Score").html(player1_score);
	}
	else if (player2_weapon == weapons[1] && player1_weapon == weapons[0]){
		document.getElementById("showGif").setAttribute("src", "/images/hammer.jpg");
		$("#roundWinner").html(player1_name + "  wins the round!");
		
		$("#p1_choice_display").html(player1_name + "  chooses  " + player1_weapon + "!").show();
		$("#p2_choice_display").html(player2_name + "  chooses  " + player2_weapon + "!").show();

		player1_score ++;
		$("#p1_Score").html(player1_score);	
	}
	else if (player2_weapon == weapons[1] && player1_weapon == weapons[2]){
		document.getElementById("showGif").setAttribute("src", "/images/stone.jpg");
		$("#roundWinner").html(player2_name + "  wins the round!");
		
		$("#p1_choice_display").html(player1_name + "  chooses  " + player1_weapon + "!").show();
		$("#p2_choice_display").html(player2_name + "  chooses  " + player2_weapon + "!").show();

		player2_score ++;
		$("#p2_Score").html(player2_score);
	}
	else if (player2_weapon == weapons[2] && player1_weapon == weapons[0]){
		document.getElementById("showGif").setAttribute("src", "/images/axe.jpg");
		$("#roundWinner").html(player2_name + "  wins the round!");
		
		$("#p1_choice_display").html(player1_name + "  chooses  " + player1_weapon + "!").show();
		$("#p2_choice_display").html(player2_name + "  chooses  " + player2_weapon + "!").show();

		player2_score ++;
		$("#p2_Score").html(player2_score);
	}
	else if (player2_weapon == weapons[2] && player1_weapon == weapons[1]){
		document.getElementById("showGif").setAttribute("src", "/images/stone.jpg");
		$("#roundWinner").html(player1_name + "  wins the round!");
		
		$("#p1_choice_display").html(player1_name + "  chooses  " + player1_weapon + "!").show();
		$("#p2_choice_display").html(player2_name + "  chooses  " + player2_weapon + "!").show();

		player1_score ++;
		$("#p1_Score").html(player1_score);
	}
	else if(player2_weapon == player1_weapon){
		$("#roundWinner").html("It's a draw!");

		$("#p1_choice_display").html(player1_name + "  chooses  " + player1_weapon + "!").show();
		$("#p2_choice_display").html(player2_name + "  chooses  " + player2_weapon + "!").show();
		
			
		
	}

	if (player1_score == endgame || player2_score == endgame){

		if (player1_score > player2_score) {
			$("#victor").html(((player1_name + "  is the victor!!!").toUpperCase()).bold());
			$("#crown1").show();
		} 
		else if(player2_score > player1_score){
			$("#victor").html(((player2_name + "  is the victor!!!").toUpperCase()).bold());
			$("#crown2").show();
		}

		$("#playAgain2").show();
		 canClick = false;
		 clearTimeout(counter);
	}
	
};
