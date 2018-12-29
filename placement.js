function placement() {
		//appending game elements
		document.body.appendChild(playArea);
		playArea.classList.add('playArea');
		playArea.style.background = localStorage.getItem("culBkgr");
		playArea.appendChild(player);
		player.classList.add('player');
		playArea.appendChild(reward);
		reward.classList.add('reward');

		//initial placement of player
		playerPosition.x = (playArea.offsetWidth / 2 + playArea.offsetLeft) - (player.offsetWidth / 2);
		playerPosition.y = (playArea.offsetHeight + playArea.offsetTop) - (player.offsetHeight * 2);

		//boundaries for game
		playArea.leftBoundary = playArea.offsetLeft + 10;
		playArea.rightBoundary = (playArea.offsetLeft + playArea.offsetWidth - 10) - player.offsetWidth;
		playArea.topBoundary = playArea.offsetTop + 15;
		playArea.bottomBoundary = (playArea.offsetTop + playArea.offsetHeight - 10) - player.offsetHeight;

		//creating initial obstacles
		for(var i = 0; i < 7; i++)
			{
				array[i] = document.createElement('div');
				playArea.appendChild(array[i]);
				if(i < 3) {
					array[i].classList.add('verticalObstacle');
				}
				else {
					array[i].classList.add('horizontalObstacle');
				}
				array[i].style.background = localStorage.getItem("culObstacle");
			}

		//cutting obstacle function
		for(var i = 0; i < 7; i++) {
			array[i].addEventListener("click", function() {
				var x = event.clientX;
				var y = event.clientY;
				if(this.classList.contains("horizontalObstacle"))
					this.style.height = y - this.offsetTop + "px";
				else
					this.style.width = x - this.offsetLeft + "px";
			})
		}

		//placing initial obstacles
		for(var i = 0; i < 3; i++)
		{
			array[i].style.left = playArea.offsetLeft + 10 + 'px';
			array[i].style.top = playArea.offsetTop + playArea.offsetHeight - 50 - (array[i].offsetHeight * (2 * i + 1)) + 'px';

		}

		xx = playArea.offsetLeft;
		for(var i = 3; i < 7; i++)
		{
			if(i % 2)
			{
				array[i].style.left = xx + 150 + 'px';
				array[i].style.top = playArea.offsetTop + array[i].offsetHeight + 10 + 'px';
			}
			else {
				array[i].style.left = xx + 180 + 'px';
				array[i].style.top = playArea.offsetTop + array[i].offsetHeight + 10 + 'px';
			}
			xx = array[i].offsetLeft + array[i].offsetWidth;
		}
		placeReward(); //place initial reward

		//initialize completed array
	function init_completed(a, b) {
		for(var i = a; i < b; i++)
			completed[i] = 0;
	}
	init_completed(0, 7);

	//function for obstacle growth
	function growObstacle(a, b) {
		for(var i = a; i < b; i++)
		{
			if((b - a) == 3)
				{
					array[i].style.width = array[i].offsetWidth + grow + 'px';
					if(((array[i].offsetLeft + array[i].offsetWidth) >= playArea.rightBoundary + player.offsetWidth) && completed[i] == 0) {
						array[i].style.width = array[i].offsetWidth - grow + 'px';
						completed[i] = 1;
						allh += 1;
					}
					else if(((array[i].offsetLeft + array[i].offsetWidth) >= playArea.rightBoundary + player.offsetWidth) && completed[i] == 1) {
						array[i].style.width = array[i].offsetWidth - grow + 'px';
					}

					if(allh == 3) {
						h = 1;
						return;
					}
				}
			else if((b - a) == 4)
				{
					array[i].style.height = array[i].offsetHeight + grow + 'px';
					if(((array[i].offsetTop + array[i].offsetHeight) >= playArea.bottomBoundary + player.offsetHeight) && completed[i] == 0) {
						array[i].style.height = array[i].offsetHeight - grow + 'px';
						completed[i] = 1;
						allv += 1;
					}
					else if(((array[i].offsetTop + array[i].offsetHeight) >= playArea.bottomBoundary + player.offsetHeight) && completed[i] == 1) {
						array[i].style.height = array[i].offsetHeight - grow + 'px';
					}

					if(allv == 4) {
						v = 1;
						return;
					}
				}
		}
	}

	//function for obstacle decrease
	function decreaseObstacle(a, b) {
		for(var i = a; i < b; i++)
		{
			if((b - a) == 3)
				{	
					if(array[i].offsetWidth < decrease)
						array[i].style.width = 0 + "px";
					else
						array[i].style.width = array[i].offsetWidth - decrease + 'px';

					if(parseInt(array[i].style.width) <= 0 && completed[i] == 0) {
						completed[i] = 1;
						allh -= 1;
					}
					else if(parseInt(array[i].style.width) <= 0 && completed[i] == 1) {
						array[i].style.width = array[i].offsetWidth + decrease + 'px';
					}

					if(allh == -3) {
						h = -1;
						return;
					}
				}
			else if((b - a) == 4)
				{	
					if(array[i].offsetHeight < decrease)
						array[i].style.height = 0 + "px";
					else
						array[i].style.height = array[i].offsetHeight - decrease + 'px';
					if(parseInt(array[i].style.height) <= 0 && completed[i] == 0) {
						array[i].style.height = array[i].offsetHeight + decrease + 'px';
						completed[i] = 1;
						allv -= 1;
					}
					else if(parseInt(array[i].style.height) <= 0 && completed[i] == 1) {
						array[i].style.height = array[i].offsetHeight + decrease + 'px';
					}

					if(allv == -4) {
						v = -1;
						return;
					}
				}
		}
	}

	//main function for growth and decrease
	function obstacleMovement() {
		var hObs = setTimeout(growObstacle, 200, 0, 3);
		var vObs = setTimeout(growObstacle, 200, 3, 7);

		if(h == 1) {
			clearTimeout(hObs);
			allh = 0;
			init_completed(0, 3);
			hObs = setTimeout(decreaseObstacle, 200, 0, 3);
		}

		if(v == 1) {
			clearTimeout(vObs);
			allv = 0;
			init_completed(3, 7);
			vObs = setTimeout(decreaseObstacle, 200, 3, 7);
		}

		if(h == -1) {
			clearTimeout(hObs);
			allh = 0;
			init_completed(0, 3);
			hObs = setTimeout(growObstacle, 200, 0, 3);
		}

		if(v == -1) {
			clearTimeout(vObs);
			allv = 0;
			init_completed(3, 7);
			vObs = setTimeout(growObstacle, 200, 3, 7);
		}
	}

	obsMove = setInterval(obstacleMovement, 200);
}
