var player_1_score = 0;
var cpu_score = 0;

var player1_name  
var	player1_weapon

var weapons = ["hammer", "stone", "axe"];
var cpu_weapon = weapons[parseInt(Math.random()*weapons.length) %3];

$("#sumbit-p1").click(function(){
	var player1_name = document.getElementById('p1_name').value;
	$("#showN").html(player1_name);
	$("#p1_name_area").hide();
	return player1_name;
	});
$("#sumbit-p1-choice").click(function(){
	 var player1_weapon = $('#p1_choice').val();
	 var player1_name = $('#p1_name').val();
	
	$("#p1_choice_display").html(player1_name + "  chooses  " + player1_weapon + "!");
	return player1_weapon;
	// if (player1_weapon !== "Hammer" || player1_weapon !== "Stone" || player1_weapon !== "Axe"
	//  || player1_weapon !== "hammer" || player1_weapon !== "stone" || player1_weapon !== "axe") {
	// 	$("#p1_choice_display").html("Choose Hammer, Stone, or Axe...");
	// 	return;
	// }
});
// if (player_1_score == endgame || cpu_score == endgame){

// } Event listener on click, set value to stone, rock or paper. 