var playArea = document.createElement('div'),
	player = document.createElement('div'),
	reward = document.createElement('div'),
	playerPosition = {
		x: 0,
		y: 0
	},
	playerSpeed,
	key = {
		right: false,
		left: false,
		up: false,
		down: false
	},
	rewardPosition = {
		x: 0,
		y: 0
	},
	score;

	var time = 1000 / 60;

//variables obstacleMovement
var h, v;
var grow, decrease;
var array = new Array(7); //obstacle array
var obsMove; //for setInterval
var gameLoop;
var completed = new Array(7); // 1 if array[i] has completed, 0 else
var allh, allv; //verify if all array[i]s have completed

//variables to store
var playerName,
	culObstacle,
	playerSize,
	difficulty,
	culBkgr;

function init() {
	h = b = 0;
	playerSpeed = 15;
	score = 0;
	playArea = document.createElement('div');
	player = document.createElement('div');
	reward = document.createElement('div');
	allh = allv = 0;

	playerName = localStorage.getItem("name") || "Player",
	culObstacle = localStorage.getItem("culObstacle") || "red",
	playerSize = parseInt(localStorage.getItem("playerSize")) || 30,
	difficulty =localStorage.getItem("difficulty") || "Easy",
	culBkgr = localStorage.getItem("culBkgr") || "black";
	player.style.height = player.style.width = playerSize + "px";

	if(difficulty === "Easy") {
		grow = 10;
		decrease = 20;
	}
	else if(difficulty === "Medium") {
		grow = 20;
		decrease = 20;
	}
	else if(difficulty === "Hard") {
		grow = 30;
		decrease = 10;
	}
}

init();