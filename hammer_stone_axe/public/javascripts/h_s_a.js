var player1_name  
var	player1_weapon

var cpu_name
var weapons //= ["hammer", "stone", "axe"];
var cpu_weapon //= weapons[parseInt(Math.random()*weapons.length) %3];

$("#submit-p1").click(function(){
	var player1_name = document.getElementById('p1_name').value;
	$("#showN").html(player1_name);
	$("#p1_name_area").hide();
	
	});
$("#submit-cpu").click(function(){
	var cpu_name = document.getElementById('cpu_name').value;
	$("#showCN").html(cpu_name);
	$("#cpu_name_area").hide();
});

function versus(){
	var player1_name = document.getElementById('p1_name').value;
	var cpu_name = document.getElementById('cpu_name').value;
	$("#versus").html(player1_name + "  versus  " + cpu_name);
};

// $("#sumbit-p1-choice").click(function(){
// 	 //var player1_weapon = $('#p1_choice').val();
// 	 var player1_name = $('#p1_name').val();
	
// 	if (true) {}
// });

//$("#p1_stone").addEventListener("click", gameStart);


var stone = document.getElementById("p1_stone");
var hammer = document.getElementById("p1_hammer");
var axe = document.getElementById("p1_axe");

stone.addEventListener("click", choiceStone);
hammer.addEventListener("click", choiceHammer);
axe.addEventListener("click", choiceAxe);

function choiceStone() {
	var player1_name = document.getElementById('p1_name').value;
	var	cpu_name = document.getElementById('cpu_name').value;
	var weapons = ["hammer", "stone", "axe"];
	var cpu_weapon = weapons[parseInt(Math.random()*weapons.length) %3];
	var player1_weapon = weapons[1];

	$("#p1_choice_display").html(player1_name + "  chooses  " + player1_weapon + "!");
	$("#cpu_choice").html(cpu_name + "  chooses  " + cpu_weapon + "!");

	if (cpu_weapon == player1_weapon){
		$("#roundWinner").html("It's a draw!");
		return null;
		}
	if (cpu_weapon == weapons[0]) {
		$("#roundWinner").html(cpu_name + "  wins the round!");
		return cpu;
		}
	if(cpu_weapon == weapons[2]){
		$("#roundWinner").html(player1_name + "  wins the round!");
		return p1;
	}

};

function choiceHammer() {
	var player1_name = document.getElementById('p1_name').value;
	var	cpu_name = document.getElementById('cpu_name').value;
	var weapons = ["hammer", "stone", "axe"];
	var cpu_weapon = weapons[parseInt(Math.random()*weapons.length) %3];
	var player1_weapon = weapons[0];
	$("#victor").html((player1_name + "  wins the match!!!").toUpperCase());
	$("#p1_choice_display").html(player1_name + "  chooses  " + player1_weapon + "!");
	$("#cpu_choice").html(cpu_name + "  chooses  " + cpu_weapon + "!");

	if (cpu_weapon == player1_weapon){
		$("#roundWinner").html("It's a draw!");
		return null;
		}
	if (cpu_weapon == weapons[2]) {
		$("#roundWinner").html(cpu_name + "  wins the round!");
		return cpu;
		}
	if(cpu_weapon == weapons[1]){
		$("#roundWinner").html(player1_name + "  wins the round!");
		return p1;
	}

};

function choiceAxe() {
	var player1_name = document.getElementById('p1_name').value;
	var	cpu_name = document.getElementById('cpu_name').value;
	var weapons = ["hammer", "stone", "axe"];
	var cpu_weapon = weapons[parseInt(Math.random()*weapons.length) %3];
	var player1_weapon = weapons[2];

	$("#p1_choice_display").html(player1_name + "  chooses  " + player1_weapon + "!");
	$("#cpu_choice").html(cpu_name + "  chooses  " + cpu_weapon + "!");

	if (cpu_weapon == player1_weapon){
		$("#roundWinner").html("It's a draw!");
		return null;
		}
	if (cpu_weapon == weapons[1]) {
		$("#roundWinner").html(cpu_name + "  wins the round!");
		return cpu;
		}
	if(cpu_weapon == weapons[0]){
		$("#roundWinner").html(player1_name + "  wins the round!");
		return p1;
	}
};

// function playGame(p1, p2, playUntil) {
// 	var player1_score = 0;
// 	var cpu_score = 0;

// 	while(player1_score < playUntil && cpu_score < playUntil){
// 		var winner = playRound(p1, p2);

// 		if(winner != null){
// 			if (p1.name === winner.name){
// 				player1_score ++;
// 			}else if(p2.name === winner.name){
// 				player2_score ++;
// 			}
// 		}
// 	}
// 	if (player1_score > player2_score) {
// 		console.log(p1.name + " is the victor!!!");
// 	} else if(player2_score > player1_score){
// 		console.log(p2.name + " is the victor!!!");
// 	}
// }
// var endgame = 5;

// if (player_1_score == endgame || cpu_score == endgame){
// 	$("#victor").html((winner + "wins the match!!!").toUpperCase())
//  }














//  Event listener on click, set value to stone, rock or paper. 