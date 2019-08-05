var player1_score = 0;
var cpu_score = 0;

var player1_name //= document.getElementById('p1_name').value;  
var	player1_weapon 

var cpu_name  //= document.getElementById('cpu_name').value;
var weapons //= ["hammer", "stone", "axe"];
var cpu_weapon //= weapons[parseInt(Math.random()*weapons.length) %3];

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
	
	playGame(player1_name, cpu_name, 5);


	var stone = document.getElementById("p1_stone");
	var hammer = document.getElementById("p1_hammer");
	var axe = document.getElementById("p1_axe");

	stone.addEventListener("click", choiceStone);
	hammer.addEventListener("click", choiceHammer);
	axe.addEventListener("click", choiceAxe);

function choiceStone(p1, cpu) {
		//var player1_name = document.getElementById('p1_name').value;
		//var	cpu_name = document.getElementById('cpu_name').value;
		var weapons = ["hammer", "stone", "axe"];
		var cpu_weapon = weapons[parseInt(Math.random()*weapons.length) %3];
		var player1_weapon = weapons[1];

		$("#p1_choice_display").html(p1 + "  chooses  " + player1_weapon + "!");
		$("#cpu_choice").html(cpu + "  chooses  " + cpu_weapon + "!");
		battle();
		
	};

function choiceHammer(p1, cpu) {
		//var player1_name = document.getElementById('p1_name').value;
		//var	cpu_name = document.getElementById('cpu_name').value;
		var weapons = ["hammer", "stone", "axe"];
		var cpu_weapon = weapons[parseInt(Math.random()*weapons.length) %3];
		var player1_weapon = weapons[0];

		$("#p1_choice_display").html(p1 + "  chooses  " + player1_weapon + "!");
		$("#cpu_choice").html(cpu + "  chooses  " + cpu_weapon + "!");
		battle();
};

function choiceAxe(p1, cpu) {
		//var player1_name = document.getElementById('p1_name').value;
		//var	cpu_name = document.getElementById('cpu_name').value;
		var weapons = ["hammer", "stone", "axe"];
		var cpu_weapon = weapons[parseInt(Math.random()*weapons.length) %3];
		var player1_weapon = weapons[2];

		$("#p1_choice_display").html(p1 + "  chooses  " + player1_weapon + "!");
		$("#cpu_choice").html(cpu + "  chooses  " + cpu_weapon + "!");
		battle();
		
};

function battle(p1, cpu){
	var weapons = ["hammer", "stone", "axe"];
	if (cpu_weapon == weapons[0] && player1_weapon == weapons[1]){
		$("#roundWinner").html(cpu + "  wins the round!");
		return cpu;
	}
	if (cpu_weapon == weapons[0] && player1_weapon == weapons[2]){
		$("#roundWinner").html(p1 + "  wins the round!");
		return p1;
	}
	if (cpu_weapon == weapons[1] && player1_weapon == weapons[0]){
		$("#roundWinner").html(p1 + "  wins the round!");
		return p1;
	}
	if (cpu_weapon == weapons[1] && player1_weapon == weapons[2]){
		$("#roundWinner").html(cpu + "  wins the round!");
		return cpu;
	}
	if (cpu_weapon == weapons[2] && player1_weapon == weapons[0]){
		$("#roundWinner").html(cpu + "  wins the round!");
		return cpu;
	}
	if (cpu_weapon == weapons[2] && player1_weapon == weapons[1]){
		$("#roundWinner").html(p1 + "  wins the round!");
		return p1;
	}
	if (cpu_weapon == player1_weapon){
		$("#roundWinner").html("It's a draw!");
		return null;
	}
};

function playGame(p1, cpu, endgame) {
	 var player1_name = document.getElementById('p1_name').value;
	 var cpu_name = document.getElementById('cpu_name').value;
	
	while(player1_score < endgame && cpu_score < endgame){
		var winner = battle(p1, cpu);
		if(winner != null){
			if (p1 === winner){
				player1_score ++;
				$("#p1_Score").html(player1_score);
			}else if(cpu === winner){
				cpu_score ++;
				$("#cpu_Score").html(cpu_score);
			}
		}
	}
	if (player1_score > cpu_score) {
		$("#victor").html((player1_name + "  is the victor!!!").toUpperCase());
	} else if(cpu_score > player1_score){
		$("#victor").html((cpu_name + "  is the victor!!!").toUpperCase());
	}
};

