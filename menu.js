function startMenu() {
	//menu box
	var menu = document.createElement('div');
	menu.id = "menu";
	document.body.appendChild(menu);

	//options list
	var list = document.createElement('ul');
	var li_title = document.createElement('li');	
	li_title.innerHTML = "Game";
	li_title.classList.add("title_menu");
	list.appendChild(li_title);

	var li = document.createElement('li');
	var li_play = document.createElement('button');
	li_play.innerHTML = "Play";
	li_play.classList.add("button");
	li_play.addEventListener("click", function() {
		var menu = document.getElementById('menu');
		var elements = menu.children;
		for(var i = 0; i < elements.length; i++)
			elements[0].parentNode.removeChild(elements[0]);
		document.body.removeChild(menu);
		game();
	});
	li.appendChild(li_play);
	list.appendChild(li);

	li = document.createElement('li');
	var li_settings = document.createElement('button');
	li_settings.innerHTML = "Settings";
	li_settings.classList.add("button");
	li_settings.addEventListener("click", settingsMenu);
	li.appendChild(li_settings);
	list.appendChild(li);

	li = document.createElement('li');
	var li_scores = document.createElement('button');
	li_scores.innerHTML = "Scores";
	li_scores.classList.add("button");
	li_scores.addEventListener("click", scoresMenu);
	li.appendChild(li_scores);
	list.appendChild(li);

	//placing buttons
	menu.style.left = 450 + "px";
	menu.style.top = 200 + "px";

	li_title.style.left = 160 + "px";
	li_play.style.left = li_settings.style.left = 
	li_scores.style.left = 150 + "px";

	li_title.style.top = 30 + "px";
	li_play.style.top = 170 + "px";
	li_settings.style.top = 290 + "px";
	li_scores.style.top = 410 + "px";

	menu.appendChild(list);
}

startMenu();

function settingsMenu() {
	//clear previous menu
	var menu = document.getElementById('menu');
	var elements = menu.getElementsByTagName('*');
	for(var i = 0; i < elements.length; i++)
		elements[0].parentNode.removeChild(elements[0]);

	//list creation
	var list = document.createElement('div');
	list.classList.add("settingsOptions");
	var li_title = document.createElement('p');	
	li_title.innerHTML = "Settings";
	li_title.classList.add("title_menu");
	list.appendChild(li_title);


	//range input player size
	var li_marime = document.createElement('div');
	li_marime.classList.add("settingsOptions");
	var para = document.createElement('p');
	var text = document.createTextNode("Marime player ");
	para.classList.add("para");
	para.appendChild(text);
	li_marime.appendChild(para);

	para = document.createElement('p');
	text = document.createTextNode("30");
	para.style.margin = 0;
	para.classList.add("para");
	para.appendChild(text);
	li_marime.appendChild(para);

	var range = document.createElement('input');
	range.type = "range";
	range.min = 30;
	range.max = 100;
	range.value = 30;
	range.step = 10;
	li_marime.appendChild(range);

	para = document.createElement('p');
	text = document.createTextNode("100");
	para.classList.add("para");
	para.appendChild(text);
	li_marime.appendChild(para);
	list.appendChild(li_marime);


	//text input player name
	var li_nume = document.createElement('div');
	li_nume.classList.add("settingsOptions");
	para = document.createElement('p');
	text = document.createTextNode("Nume player ");
	para.classList.add("para");
	para.appendChild(text);
	li_nume.appendChild(para);

	var text_input = document.createElement('input');
	text_input.type = "text";
	text_input.value = "Player";
	li_nume.appendChild(text_input);
	list.appendChild(li_nume);


	//checkbox input obstacle color
	var li_culObs = document.createElement('div');
	li_culObs.classList.add("settingsOptions");
	para = document.createElement('p');
	text = document.createTextNode("Culori obstacole ");
	para.classList.add("para");
	para.appendChild(text);
	li_culObs.appendChild(para);

	var li_check1 = document.createElement('input');
	li_check1.type = "checkbox";
	li_check1.value = "red";
	li_check1.checked = true;
	li_culObs.appendChild(li_check1);

	var li_check2 = document.createElement('input');
	li_check2.type = "checkbox";
	li_check2.value = "blue";
	li_culObs.appendChild(li_check2)

	var li_check3 = document.createElement('input');
	li_check3.type = "checkbox";
	li_check3.value = "green";
	li_culObs.appendChild(li_check3);

	var li_check4 = document.createElement('input');
	li_check4.type = "checkbox";
	li_check4.value = "purple";
	li_culObs.appendChild(li_check4)
	list.appendChild(li_culObs);


	//radio input dificulty
	var li_dif = document.createElement('div');
	li_dif.classList.add("settingsOptions");
	para = document.createElement('p');
	text = document.createTextNode("Dificultate ");
	para.classList.add("para");
	para.appendChild(text);
	li_dif.appendChild(para);

	var li_radio1 = document.createElement('input');
	li_radio1.type = "radio";
	li_radio1.value = "Easy";
	li_radio1.name = "dif";
	li_dif.appendChild(li_radio1);

	var li_radio2 = document.createElement('input');
	li_radio2.type = "radio";
	li_radio2.value = "Medium";
	li_radio2.name = "dif";
	li_radio2.checked = true;
	li_dif.appendChild(li_radio2);

	var li_radio3 = document.createElement('input');
	li_radio3.type = "radio";
	li_radio3.value = "Hard";
	li_radio3.name = "dif";
	li_dif.appendChild(li_radio3);
	list.appendChild(li_dif);


	//select input bkgr color
	var div_select = document.createElement('div');
	div_select.classList.add("settingsOptions");
	para = document.createElement('p');
	text = document.createTextNode("Culoare background ");
	para.classList.add("para");
	para.appendChild(text);
	div_select.appendChild(para);

	var li_select = document.createElement('select');
	var opt1 = document.createElement('option');
	opt1.value = "black";
	opt1.innerHTML = "black";
	li_select.appendChild(opt1);

	var opt2 = document.createElement('option');
	opt2.value = "grey";
	opt2.innerHTML = "grey";
	li_select.appendChild(opt2);

	var opt3 = document.createElement('option');
	opt3.value = "brown";
	opt3.innerHTML = "brown";
	li_select.appendChild(opt3);
	div_select.appendChild(li_select);
	list.appendChild(div_select);


	//textarea input feedback
	var li_textarea = document.createElement('div');
	li_textarea.classList.add("settingsOptions");

	var textarea = document.createElement('textarea');
	textarea.placeholder = "Feedback";
	textarea.rows = 4;
	textarea.cols = 30;
	li_textarea.appendChild(textarea);
	list.appendChild(li_textarea);


	//button submit
	var submit = document.createElement('button');
	submit.classList.add("button");
	submit.innerHTML = "Submit";
	submit.addEventListener("click", function() {
		//store player name and size
		localStorage.setItem("name", text_input.value);
		localStorage.setItem("playerSize", range.value);
		
		//randomly pick obstacle color from those checked
		var colorsArr = new Array();
		var chk = document.querySelectorAll("input[type='checkbox']");
		for(var i = 0; i < chk.length; i++)
			if(chk[i].checked)
				colorsArr.push(chk[i].value);
		var randColor = Math.floor(Math.random() * colorsArr.length);
		localStorage.setItem("culObstacle", colorsArr[randColor]);

		//store difficulty
		var dif = document.querySelectorAll("input[type='radio']");
		for(var i = 0; i < dif.length; i++)
			if(dif[i].checked)
				localStorage.setItem("difficulty", dif[i].value);

		//store bkgr color
		localStorage.setItem("culBkgr", li_select[li_select.selectedIndex].value);

		init();
		alert("Settings saved!");
	});
	list.appendChild(submit);


	//button back
	var back = document.createElement('button');
	back.classList.add("button");
	back.innerHTML = "Back";
	back.addEventListener("click", backButton);
	list.appendChild(back);
	
	menu.appendChild(list);

	//placing inputs
	li_title.style.top = 0 + "px";
	li_title.style.left =120 + "px";

	li_nume.style.top = 130 + "px";
	li_nume.style.left = 80 + "px";
	
	li_marime.style.top = 200 + "px";
	li_marime.style.left = 80 + "px";
	
	li_culObs.style.top = 270 + "px";
	li_culObs.style.left = 80 + "px";

	li_dif.style.top = 340 + "px";
	li_dif.style.left = 80 + "px";

	div_select.style.top = 410 + "px";
	div_select.style.left = 80 + "px";

	li_textarea.style.top = 450 + "px";
	li_textarea.style.left = 120 + "px";

	//placing buttons
	submit.style.top = 525 + "px";
	submit.style.left = 50 + "px";

	back.style.top = 525 + "px";
	back.style.left = 270 + "px";
}

function backButton() {
	//clear previous menu
	var menu = document.getElementById('menu');
	var elements = menu.children;
	for(var i = 0; i < elements.length; i++)
		elements[0].parentNode.removeChild(elements[0]);
	document.body.removeChild(menu);
	//invoke function for starting menu
	startMenu();
}

function scoresMenu() {
	//clear previous menu
	var menu = document.getElementById('menu');
	var elements = menu.getElementsByTagName('*');
	for(var i = 0; i < elements.length; i++)
		elements[0].parentNode.removeChild(elements[0]);

	//list creation
	var list = document.createElement('div');
	list.classList.add("settingsOptions");
	var li_title = document.createElement('p');
	li_title.innerHTML = "Scores";
	li_title.classList.add("title_menu");
	list.appendChild(li_title);
	
	var li_firstPlayer = document.createElement('div');
	li_firstPlayer.classList.add("scoresElements");

	li_name = document.createElement('p');	
	li_name.classList.add("para");
	li_name.innerHTML = playerName;
	li_firstPlayer.appendChild(li_name);

	li_score = document.createElement('p');	
	li_score.classList.add("para");
	li_score.innerHTML = localStorage.getItem(playerName) || score;

	li_firstPlayer.appendChild(li_score);
	list.appendChild(li_firstPlayer);


	var li_secondPlayer = document.createElement('div');
	li_secondPlayer.classList.add("scoresElements");

	li_name = document.createElement('p');	
	li_name.classList.add("para");
	li_name.innerHTML = playerName;
	li_secondPlayer.appendChild(li_name);

	li_score = document.createElement('p');	
	li_score.classList.add("para");
	li_score.innerHTML = localStorage.getItem(playerName + "1") || score;

	li_secondPlayer.appendChild(li_score);
	list.appendChild(li_secondPlayer);


	var li_thirdPlayer = document.createElement('div');
	li_thirdPlayer.classList.add("scoresElements");

	li_name = document.createElement('p');	
	li_name.classList.add("para");
	li_name.innerHTML = playerName;
	li_thirdPlayer.appendChild(li_name);

	li_score = document.createElement('p');	
	li_score.classList.add("para");
	li_score.innerHTML = localStorage.getItem(playerName + "2") || score;

	li_thirdPlayer.appendChild(li_score);
	list.appendChild(li_thirdPlayer);


	//button back
	var back = document.createElement('button');
	back.classList.add("button");
	back.innerHTML = "Back";
	back.addEventListener("click", backButton);
	list.appendChild(back);


	//placement
	li_title.style.top = 30 + "px";
	li_title.style.left = 120 + "px";

	li_firstPlayer.style.top = 180 + "px";
	li_firstPlayer.style.left = 60 + "px";

	li_secondPlayer.style.top = 280 + "px";
	li_secondPlayer.style.left = 60 + "px";

	li_thirdPlayer.style.top = 380 + "px";
	li_thirdPlayer.style.left = 60 + "px";

	back.style.top = 525 + "px";
	back.style.left = 270 + "px";

	menu.appendChild(list);
}