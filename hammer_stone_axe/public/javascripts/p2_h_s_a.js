var player1_score = 0;
var player2_score = 0;

var player1_name
var	player1_weapon 

var player2_name
var weapons
var player2_weapon
var canClick = true;

$("#playAgain2").hide();

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
	//player 1 button selection
	var stone = document.getElementById("p1_stone");
	var hammer = document.getElementById("p1_hammer");
	var axe = document.getElementById("p1_axe");

	stone.addEventListener("click", choiceStone);
	hammer.addEventListener("click", choiceHammer);
	axe.addEventListener("click", choiceAxe);

	//player 2 button selection
	var stone2 = document.getElementById("p2_stone");
	var hammer2 = document.getElementById("p2_hammer");
	var axe2 = document.getElementById("p2_axe");

	stone2.addEventListener("click", choiceStone2);
	hammer2.addEventListener("click", choiceHammer2);
	axe2.addEventListener("click", choiceAxe2);

function choiceStone() {
	if(canClick){
		player1_name = document.getElementById('p1_name').value;
		var weapons = ["hammer", "stone", "axe"];
		player1_weapon = weapons[1];

		$("#p1_choice_display").html(player1_name + "  chooses  " + player1_weapon + "!");
		battle();
	}	
};

function choiceStone2() {
		if(canClick){
			player2_name = document.getElementById('p2_name').value;
			var weapons = ["hammer", "stone", "axe"];
			player2_weapon = weapons[1];

			$("#p2_choice_display").html(player2_name + "  chooses  " + player2_weapon + "!");
			battle();
		}
}; 

function choiceHammer() {
	if (canClick) {
		player1_name = document.getElementById('p1_name').value;
		
		var weapons = ["hammer", "stone", "axe"];
		player1_weapon = weapons[0];

		$("#p1_choice_display").html(player1_name + "  chooses  " + player1_weapon + "!");
		battle();
	}
};

function choiceHammer2(){
	if (canClick) {
		player2_name = document.getElementById('p2_name').value;
		var weapons = ["hammer", "stone", "axe"];	
		player2_weapon = weapons[0];

		$("#p2_choice_display").html(player2_name + "  chooses  " + player2_weapon + "!");
		battle();
	}
};

function choiceAxe() {
	if (canClick) {
		player1_name = document.getElementById('p1_name').value;
		
		var weapons = ["hammer", "stone", "axe"];
		player1_weapon = weapons[2];

		$("#p1_choice_display").html(player1_name + "  chooses  " + player1_weapon + "!");
		battle();
	}
};

function choiceAxe2(){
	if (canClick) {
		player2_name = document.getElementById('p2_name').value;
		var weapons = ["hammer", "stone", "axe"];	
		player2_weapon = weapons[2];

		$("#p2_choice_display").html(player2_name + "  chooses  " + player2_weapon + "!");
		battle();
	}
};

function battle(){
	console.log(player2_weapon, player1_weapon);
	var weapons = ["hammer", "stone", "axe"];
	var endgame = 5;

	if (player2_weapon == weapons[0] && player1_weapon == weapons[1]){
		document.getElementById("showGif").setAttribute("src", "/images/hammer.jpg");
		$("#roundWinner").html(player2_name + "  wins the round!");
		
		player2_score ++;
		$("#p2_Score").html(player2_score);	
	}
	else if (player2_weapon == weapons[0] && player1_weapon == weapons[2]){
		document.getElementById("showGif").setAttribute("src", "/images/axe.jpg");
		$("#roundWinner").html(player1_name + "  wins the round!");
		
		player1_score ++;
				$("#p1_Score").html(player1_score);
	}
	else if (player2_weapon == weapons[1] && player1_weapon == weapons[0]){
		document.getElementById("showGif").setAttribute("src", "/images/hammer.jpg");
		$("#roundWinner").html(player1_name + "  wins the round!");
		
		player1_score ++;
		$("#p1_Score").html(player1_score);	
	}
	else if (player2_weapon == weapons[1] && player1_weapon == weapons[2]){
		document.getElementById("showGif").setAttribute("src", "/images/stone.jpg");
		$("#roundWinner").html(player2_name + "  wins the round!");
		
		player2_score ++;
		$("#p2_Score").html(player2_score);
	}
	else if (player2_weapon == weapons[2] && player1_weapon == weapons[0]){
		document.getElementById("showGif").setAttribute("src", "/images/axe.jpg");
		$("#roundWinner").html(player2_name + "  wins the round!");
		
		player2_score ++;
		$("#p2_Score").html(player2_score);
	}
	else if (player2_weapon == weapons[2] && player1_weapon == weapons[1]){
		document.getElementById("showGif").setAttribute("src", "/images/stone.jpg");
		$("#roundWinner").html(player1_name + "  wins the round!");
		
		player1_score ++;
		$("#p1_Score").html(player1_score);
	}
	else {
		$("#roundWinner").html("It's a draw!");
	}

	if (player1_score == endgame || player2_score == endgame){

		if (player1_score > player2_score) {
		$("#victor").html(((player1_name + "  is the victor!!!").toUpperCase()).bold());
			} 
		else if(player2_score > player1_score){
			$("#victor").html(((player2_name + "  is the victor!!!").toUpperCase()).bold());
			}
		$("#playAgain2").show();
		 canClick = false;
	}
	
};
