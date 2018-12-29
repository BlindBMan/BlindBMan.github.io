//function for reward-player-obstacle collision
function rewardCollide() {
    if ( !(((rewardPosition.y + reward.offsetHeight) < (playerPosition.y)) || 
    	(rewardPosition.y > (playerPosition.y + player.offsetHeight)) || 
    	((rewardPosition.x + reward.offsetWidth) < playerPosition.x) ||
        (rewardPosition.x > (playerPosition.x + player.offsetWidth))) )
        return 1;

    for(var i = 0; i < array.length; i++)
    {
    if( !(((rewardPosition.y + reward.offsetHeight) < (array[i].offsetTop)) || 
    	(rewardPosition.y > (array[i].offsetTop + array[i].offsetHeight)) || 
    	((rewardPosition.x + reward.offsetWidth) < array[i].offsetLeft) ||
        (rewardPosition.x > (array[i].offsetLeft + array[i].offsetWidth))) )
        return 1;
	}
    return 0;
}

//check if player reached reward
function rewardReceived() {
	if( ((rewardPosition.y + reward.offsetHeight) < (playerPosition.y)) || 
    	(rewardPosition.y > (playerPosition.y + player.offsetHeight)) || 
    	((rewardPosition.x + reward.offsetWidth) < playerPosition.x) ||
        (rewardPosition.x > (playerPosition.x + player.offsetWidth)) )
        return 0;
    return 1;
}

function placeReward() {
	rewardPosition.x = Math.floor(Math.random() * (playArea.offsetWidth - playArea.offsetLeft + 5) + playArea.offsetLeft);
	rewardPosition.y = Math.floor(Math.random() * (playArea.offsetTop + 10 - playArea.offsetHeight) + playArea.offsetHeight);

    //if collide then recompute reward location
	while (rewardCollide()) {
		rewardPosition.x = Math.floor(Math.random() * (playArea.offsetWidth - playArea.offsetLeft + 5) + playArea.offsetLeft);
		rewardPosition.y = Math.floor(Math.random() * (playArea.offsetTop + 5 - playArea.offsetHeight) + playArea.offsetHeight);
	}

	reward.style.left = rewardPosition.x + 'px';
	reward.style.top = rewardPosition.y + 'px';
}

//function for player-obstacle collision
function playerCollide() {
    for(var i = 0; i < array.length; i++)
    {
        if( !(((playerPosition.y + player.offsetHeight) < (array[i].offsetTop)) || 
            (playerPosition.y > (array[i].offsetTop + array[i].offsetHeight)) || 
            ((playerPosition.x + player.offsetWidth) < array[i].offsetLeft) ||
            (playerPosition.x > (array[i].offsetLeft + array[i].offsetWidth))) )
                return 1;
    }
    return 0;
}

//game over function
function gameOver() {
    clearInterval(obsMove);
    clearInterval(gameLoop);
    alert("You are so bad!");

    //store score and name
    localStorage.setItem(playerName + "2", localStorage.getItem(playerName + "1"));
    localStorage.setItem(playerName + "1", localStorage.getItem(playerName));
    localStorage.setItem(playerName, score);

    //clear playArea and show menu
    document.body.removeChild(playArea);
    startMenu();
    init();

    //clear keys
    key.right = key.left = key.up = key.down = false;
}