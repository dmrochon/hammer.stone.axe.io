var player1_score = 0;
var cpu_score = 0;

var player1_name
var	player1_weapon 

var cpu_name
var weapons
var cpu_weapon
var canClick = true;

$("#playAgain").hide();
$("#crown1").hide();
$("#crown2").hide();

$("#submit-p1").click(function(){
	var player1_name = document.getElementById('p1_name').value;
	$("#showN").html(player1_name);
	$("#p1_name_area").hide();
	versus();
	});
$("#submit-cpu").click(function(){
	var cpu_name = document.getElementById('cpu_name').value;
	$("#showCN").html(cpu_name);
	$("#cpu_name_area").hide();
	versus();
});

function versus(){
	var player1_name = document.getElementById('p1_name').value;
	var cpu_name = document.getElementById('cpu_name').value;
	$("#versus").html(player1_name + "  versus  " + cpu_name);
};

	var stone = document.getElementById("p1_stone");
	var hammer = document.getElementById("p1_hammer");
	var axe = document.getElementById("p1_axe");

	stone.addEventListener("click", choiceStone);
	hammer.addEventListener("click", choiceHammer);
	axe.addEventListener("click", choiceAxe);

function choiceStone() {
	if(canClick){
		player1_name = document.getElementById('p1_name').value;
		cpu_name = document.getElementById('cpu_name').value;
		var weapons = ["hammer", "stone", "axe"];
		cpu_weapon = weapons[parseInt(Math.random()*weapons.length) %3];
		player1_weapon = weapons[1];

		$("#p1_choice_display").html(player1_name + "  chooses  " + player1_weapon + "!");
		$("#cpu_choice").html(cpu_name + "  chooses  " + cpu_weapon + "!");
		battle();
	}	
	};
function choiceHammer() {
	if (canClick) {
		player1_name = document.getElementById('p1_name').value;
		cpu_name = document.getElementById('cpu_name').value;
		var weapons = ["hammer", "stone", "axe"];
		cpu_weapon = weapons[parseInt(Math.random()*weapons.length) %3];
		player1_weapon = weapons[0];

		$("#p1_choice_display").html(player1_name + "  chooses  " + player1_weapon + "!");
		$("#cpu_choice").html(cpu_name + "  chooses  " + cpu_weapon + "!");
		battle();
	}
};

function choiceAxe() {
	if(canClick){
		player1_name = document.getElementById('p1_name').value;
		cpu_name = document.getElementById('cpu_name').value;
		var weapons = ["hammer", "stone", "axe"];
		cpu_weapon = weapons[parseInt(Math.random()*weapons.length) %3];
		player1_weapon = weapons[2];

		$("#p1_choice_display").html(player1_name + "  chooses  " + player1_weapon + "!");
		$("#cpu_choice").html(cpu_name + "  chooses  " + cpu_weapon + "!");
		battle();
	}	
};

function battle(){
	console.log(cpu_weapon, player1_weapon);
	var weapons = ["hammer", "stone", "axe"];
	var endgame = 5;

	if (cpu_weapon == weapons[0] && player1_weapon == weapons[1]){
		document.getElementById("showGif").setAttribute("src", "/images/hammer_smash.png");
		$("#roundWinner").html(cpu_name + "  wins the round!");
		
		cpu_score ++;
		$("#cpu_Score").html(cpu_score);	
	}
	else if (cpu_weapon == weapons[0] && player1_weapon == weapons[2]){
		document.getElementById("showGif").setAttribute("src", "/images/axe_slice.png");
		$("#roundWinner").html(player1_name + "  wins the round!");
		
		player1_score ++;
				$("#p1_Score").html(player1_score);
	}
	else if (cpu_weapon == weapons[1] && player1_weapon == weapons[0]){
		document.getElementById("showGif").setAttribute("src", "/images/hammer_smash.png");
		$("#roundWinner").html(player1_name + "  wins the round!");
		
		player1_score ++;
		$("#p1_Score").html(player1_score);	
	}
	else if (cpu_weapon == weapons[1] && player1_weapon == weapons[2]){
		document.getElementById("showGif").setAttribute("src", "/images/axe_broke.png");
		$("#roundWinner").html(cpu_name + "  wins the round!");
		
		cpu_score ++;
		$("#cpu_Score").html(cpu_score);
	}
	else if (cpu_weapon == weapons[2] && player1_weapon == weapons[0]){
		document.getElementById("showGif").setAttribute("src", "/images/axe_slice.png");
		$("#roundWinner").html(cpu_name + "  wins the round!");
		
		cpu_score ++;
		$("#cpu_Score").html(cpu_score);
	}
	else if (cpu_weapon == weapons[2] && player1_weapon == weapons[1]){
		document.getElementById("showGif").setAttribute("src", "/images/axe_broke.png");
		$("#roundWinner").html(player1_name + "  wins the round!");
		
		player1_score ++;
		$("#p1_Score").html(player1_score);
	}
	else {
		document.getElementById("showGif").setAttribute("src", "data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==");
		$("#roundWinner").html("It's a draw!");
	}

	if (player1_score == endgame || cpu_score == endgame){

		if (player1_score > cpu_score) {
			$("#victor").html(((player1_name + "  is the victor!!!").toUpperCase()).bold());
			$("#crown1").show();
		} 
		else if(cpu_score > player1_score){
			$("#victor").html(((cpu_name + "  is the victor!!!").toUpperCase()).bold());
			$("#crown2").show();
		}
		$("#playAgain").show();
		 canClick = false;
	}
	
};