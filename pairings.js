var altador = ['Salayne Ritad', '"Trapper" Remis', 'Lyvon Cibaire', 'Foltaggio',
	'Cawley Embith'] //6
var brightvale = ['Orie Dinelle', 'Montecito', 'Reb Weemelott', 'Gordo Gunnels',
	'Kayn Hireck'] //5
var dariganCitadel = ['Reshar Collifey', 'Layton Vickles', 
	'Tormo "The Terror" Frein', 'Kep Bonnefie', 'Tandrak Shaye', 'Mungo Lifler']
	//6
var faerieland = ['Valtonous Rea', 'Kakoni Worrill', 'Elbin Kroe', 
	'Delma Harrence', 'Ciona Broan', 'Babolino', 'Elbin Towse', 'Palia Alback']
	//8
var hauntedWoods = ['Fanetti', 'Krell Vitor', '"Brains" Mortigan', 'Zo Junior', 
	'Wan Dirx', 'Autrey Fulse', 'Chelo Binay']
	//8
var kikoLake = ['Erli Quinnock', '"Poke" Cellers', 'Meela Kitah', 
	'Holbie Pinnock', 'Ditan Colb', 'Helmo Timm', 'Relle Felson']
	//7
var krawkIsland = ['Garven Hale', 'Felson "Dinksy" Collibridge', 'Coco Metrone',
	'Nitri Cassale', 'Zayle Sufhaux', '"Dasher" Soley', 'Hoke Lemtry']
	//7
var kreludor = ['Jurin T.', 'Derlyn Fonnet', 'Ealyn Hawkshanks', 'Qyldae Wegg', 
	'Zenor Kevix', 'Xila Kitae', 'Vignacio'] //7
var lostDesert = ['Leera Heggle', 'Luvea Trivon', 'Vonde Cayle', 'Rhee Solters',
	'Derbi Azar', '"Dirty" Navers', 'Wyett Tuggins'] //7
var maraqua = ['Tonie Plessix', 'Elon "The Black Hole" Hughlis', 'Oten Runeu', 
	'Lamelle Turow', 'Barit Jowes', 'Dorina Hals', 'Filo Desenz'] //7
var meridell = ['Yoris Obbles', 'Ilsa Ellits', '"Wizard" Windelle',  'Fiorina', 
	'Ethel Boortz', 'Gregorio Maille', 'Sir Pollonaire Freidl', 'Vitri Sitol']
	//8
var moltara = ['Harlis Neyhbol', 'Aldric Beign', 'Tulah Kisner', 
	'Vere Polnicek', 'Zax Bannet'] //5
var mysteryIsland = ['Lor Benneveldt', 'Volgoth', 'Teylor Nix', 'Selmon Woulf', 
	'Vela Binal', 'Bertie Shurtz', 'Yaniq Avaan', 'Maital Koric'] //8
var rooIsland = ['Clutch Billiban', 'Lilo Blumario', 'Jair Tollet', 
	'Fenny Vail', '"Squeaky" Tressif', 'Dayla'] //6
var shenkuu = ['Xana DiLanche', 'Mirsha Grelinek', 'Timu', 'Antola Maeir', 
	'Larcy Phu', 'Turo Rafels'] //6
var terrorMountain = ['Minae Mitora', 'Prytariel', 'Rinok Fitel', 
	'Evrem Guilako', 'Osielle Lidel', 'Selwick Phoss', 'Tico Tems', 
	'Vaydo Pohz', 'Almadaira'] //9
var tyrannia = ['Mor Gollog', 'Loryche', '"Scrap" Taggert', 'Wila Benne', 
	'"Spikes" Barmie'] //5
var virtupets = ['Goltron Mk I', 'Keetra Deile', 'Sela Pretore', 
	'Weldar Xupenfarb', 'XL Striker 3.8', 'Z-4B Goalinator', 'Kerib Vickers'] 
	//7
var practiceTeam = ['Wartroot', 'Vinarok', 'Zeenana', 'Lemoran', 'Tagobo'] //5
/* These array variables group players by team. The Practice Team is included, 
as they are a team. */
var misc = ['Tobias Sigmir', 'Hovri Sweet', 'Techo Fanatic', 
	'Slushie Slinger Waitress', 'Altador Cup Referee', 'Committee Skeith', 
	'Committee Draik', 'Committee Aisha', 'Quiggle Quiz Giver', 'Coach Riki',  
	'Altador Cup Souvenir Shopkeeper', "Techo Fanatic's Butler", 
	'Prize Shop Committee Chairman', 'Inventory Management Intern', 
	'VIP Pass Coordinator', 'Altador Cup NC Shopkeeper', 'Lemonade Jones', 
	'Narinus'] //18
/* This puts characters involved with the cup in their own array. It is an 
array that will be randomized differently when compared to the team arrays. */

var teams = [altador, brightvale, dariganCitadel, faerieland, hauntedWoods, 
	kikoLake, krawkIsland, kreludor, lostDesert, maraqua, meridell, 
	mysteryIsland, rooIsland, shenkuu, terrorMountain, tyrannia, virtupets, 
	practiceTeam, misc]
//This puts the array variables in an array in its own right.

function generator()	{
	var index = Math.floor(Math.random() * 19);
	var team = teams[index];
	if (team.length == 5)	{
		var teamIndex = Math.floor(Math.random() * 4);
		playerName = team[teamIndex];		
	}
	else if(team.length == 6)	{
		var teamIndex = Math.floor(Math.random() * 5);
		playerName = team[teamIndex];		
	}
	else if (team.length == 8)	{
		var teamIndex = Math.floor(Math.random() * 7);
		playerName = team[teamIndex];		
	}
	else if (team.length == 9)	{
		var teamIndex = Math.floor(Math.random() * 8);
		playerName = team[teamIndex];		
	}
	else	{
		var teamIndex = Math.floor(Math.random() * 1);
		playerName = team[teamIndex];
	}
}

function buttonPress(id1, id2)	{
	generator();
	x = playerName;
	generator();
	y = playerName;
	while (x == y)	{
		generator();
		y = playerName;
	}
	document.getElementById(id1).innerHTML = x;
	document.getElementById(id2).innerHTML = y;
}