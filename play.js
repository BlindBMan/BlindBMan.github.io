//key functions
function keyDown(e) {
	if(e.keyCode === 68) {
		key.right = true;
	}
	else
		if(e.keyCode === 65) {
		key.left = true;
	}
	else
		if(e.keyCode === 87) {
		key.up = true;
	}
	else
		if(e.keyCode === 83) {
		key.down = true;
	}
}

function keyUp(e) {
	if(e.keyCode === 68) {
		key.right = false;
	}
	else
		if(e.keyCode === 65) {
		key.left = false;
	}

	if(e.keyCode === 87) {
		key.up = false;
	}
	else
		if(e.keyCode === 83) {
		key.down = false;
	}
}

//moving player
function movePlayer() {
	if(key.right === true) {
		playerPosition.x += playerSpeed;
	}
	else
		if(key.left === true) {
			playerPosition.x -= playerSpeed;
		}
	if(key.up === true) {
		playerPosition.y -= playerSpeed;
	}
	else
		if(key.down === true) {
			playerPosition.y += playerSpeed;
		}

	if(playerPosition.x < playArea.leftBoundary) {
		playerPosition.x = playArea.leftBoundary;
	}
	if(playerPosition.x > playArea.rightBoundary) {
		playerPosition.x = playArea.rightBoundary;
	}
	if(playerPosition.y < playArea.topBoundary) {
		playerPosition.y = playArea.topBoundary;
	}
	if(playerPosition.y > playArea.bottomBoundary) {
		playerPosition.y = playArea.bottomBoundary;
	}

	if(rewardReceived()) {
		placeReward(); //if we get reward we relocate it
		score += 1;
	}

	if(playerCollide()) {
		gameOver();
	}

	player.style.left = playerPosition.x + 'px';
	player.style.top = playerPosition.y + 'px';

}

//event listeners for pressing keys
document.addEventListener('keydown', keyDown, false);
document.addEventListener('keyup', keyUp, false);

function game() {
	placement();
	gameLoop = setInterval(movePlayer, 30);
}

/*function game() {
	placement();

	function loop() {
		movePlayer();
		gameLoop = setTimeout(loop, 200);
	}
}*/