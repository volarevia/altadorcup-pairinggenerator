const altador = ['Salayne Ritad', '"Trapper" Remis', 'Lyvon Cibaire', 'Foltaggio', 'Cawley Embith']; //6
const brightvale = ['Orie Dinelle', 'Montecito', 'Reb Weemelott', 'Gordo Gunnels', 'Kayn Hireck']; //5
const dariganCitadel = ['Reshar Collifey', 'Layton Vickles', 'Tormo "The Terror" Frein', 'Kep Bonnefie', 'Tandrak Shaye', 'Mungo Lifler']; //6
const faerieland = ['Valtonous Rea', 'Kakoni Worrill', 'Elbin Kroe', 'Delma Harrence', 'Ciona Broan', 'Babolino', 'Elbin Towse', 'Palia Alback']; //8
const hauntedWoods = ['Fanetti', 'Krell Vitor', '"Brains" Mortigan', 'Zo Junior', 'Wan Dirx', 'Autrey Fulse', 'Chelo Binay']; //8
const kikoLake = ['Erli Quinnock', '"Poke" Cellers', 'Meela Kitah', 'Holbie Pinnock', 'Ditan Colb', 'Helmo Timm', 'Relle Felson']; //7
const krawkIsland = ['Garven Hale', 'Feldon "Dinksy" Collibridge', 'Coco Metrone', 'Nitri Cassale', 'Zayle Sufhaux', '"Dasher" Soley', 'Hoke Lemtry']; //7
const kreludor = ['Jurin T.', 'Derlyn Fonnet', 'Ealyn Hawkshanks', 'Qyldae Wegg', 'Zenor Kevix', 'Xila Kitae', 'Vignacio']; //7
const lostDesert = ['Leera Heggle', 'Luvea Trivon', 'Vonde Cayle', 'Rhee Solters', 'Derbi Azar', '"Dirty" Navers', 'Wyett Tuggins']; //7
const maraqua = ['Tonie Plessix', 'Elon "The Black Hole" Hughlis', 'Oten Runeu', 'Lamelle Turow', 'Barit Jowes', 'Dorina Hals', 'Filo Desenz']; //7
const meridell = ['Yoris Obbles', 'Ilsa Ellits', '"Wizard" Windelle', 'Fiorina', 'Ethel Boortz', 'Gregorio Maille', 'Sir Pollonaire Freidl', 'Vitri Sitol']; //8
const moltara = ['Harlis Neyhbol', 'Aldric Beign', 'Tulah Kisner', 'Vere Polnicek', 'Zax Bannet']; //5
const mysteryIsland = ['Lor Benneveldt', 'Volgoth', 'Teylor Nix', 'Selmon Woulf', 'Vela Binal', 'Bertie Shurtz', 'Yaniq Avaan', 'Maital Koric']; //8
const rooIsland = ['Clutch Billaban', 'Lilo Blumario', 'Jair Tollet', 'Fenny Vail', '"Squeaky" Tressif', 'Dayla']; //6
const shenkuu = ['Xana DiLanche', 'Mirsha Grelinek', 'Timu', 'Antola Maeir', 'Larcy Phu', 'Turo Rafels']; //6
const terrorMountain = ['Minae Mitora', 'Prytariel', 'Rinok Fitel', 'Evrem Guilako', 'Osielle Lidel', 'Selwick Phoss', 'Tico Tems', 'Vaydo Pohz', 'Almadaira']; //9
const tyrannia = ['Mor Gollog', 'Loryche', '"Scrap" Taggert', 'Wila Benne', '"Spikes" Barmie']; //5
const virtupets = ['Goltron Mk I', 'Keetra Deile', 'Sela Pretore', 'Weldar Xupenfarb', 'XL Striker 3.8', 'Z-4B Goalinator', 'Kerib Vickers']; //7
const practiceTeam = ['Wartroot', 'Vinarok', 'Zeenana', 'Lemoran', 'Tagobo'];
  //5
/* These array variables group players by team. The Practice Team is included, 
as they are a team. */
const misc = ['Tobias Sigmir', 'Hovri Sweet', 'Techo Fanatic', 'Slushie Slinger Waitress', 'Altador Cup Referee', 'Committee Skeith', 'Committee Draik', 'Committee Aisha', 'Quiggle Quiz Giver', 'Coach Riki', 'Altador Cup Souvenir Shopkeeper', "Techo Fanatic's Butler", 'Prize Shop Committee Chairman', 'Inventory Management Intern', 'VIP Pass Coordinator', 'Altador Cup NC Shopkeeper', 'Lemonade Jones', 'Narinus']; //18
/* This puts non-player characters involved with the cup in their own array. It 
is an array that will be randomized differently when compared to the team 
arrays. */

let teams = [altador, brightvale, dariganCitadel, faerieland, hauntedWoods, kikoLake, krawkIsland, kreludor, lostDesert, maraqua, meridell, mysteryIsland, rooIsland, shenkuu, terrorMountain, tyrannia, virtupets, practiceTeam, misc];
//This puts the team arrays in an array to be chosen from.

function generator()	{
    "use strict";
    let index = Math.floor(Math.random() * 19);
    //This generates the team that the player is chosen from
    let team = teams[index]
    /*This puts the array of chosen members in a place where the function can
        easily pick out which characters to use */
    let teamIndex = Math.floor(Math.random() * (team.length - 1));
    //This gives a choice of the amount of characters in an array
    playerName = team[teamIndex]
    return playerName;
    //Chooses a player based on the randomly chosen location in the array.
}

function doubleCheck(checkedElement) {
    "use strict"
    checkedElement = generator()
    //ensures the same character won't be chosen twice when generated
}

let shipSign = '<span class="shippingSign">&times;</span>';

function couple(id)	{
    "use strict"
    let playerOne = generator(); //assigns a player name to the first element
    let playerTwo = generator(); //assigns a player name to the second element
    while ( playerOne == playerTwo)	{
        doubleCheck(playerTwo)
    }
    // document.getElementById(id1).innerHTML = playerOne;
    // document.getElementById(id2).innerHTML = playerTwo;
    //puts the assigned player names in the actual document
    document.getElementById(id).innerHTML = `${playerOne} ${shipSign} ${playerTwo}`
}

function threesome(id) {
    "use strict"
    let playerOne = generator()
    let playerTwo = generator()
    while (playerOne == playerTwo)	{
        doubleCheck(playerTwo)
    }
    let playerThree = generator(); //assigns a player name to the third element
    while (playerOne == playerThree || playerTwo == playerThree)	{
        doubleCheck(playerThree)
    }
    document.getElementById(id).innerHTML = `${playerOne} ${shipSign} ${playerTwo} ${shipSign} ${playerThree}`
}

function random(id) {
    "use strict";
    let choice = Boolean(Math.round(Math.random()))
    choice ? couple(id) : threesome(id)
}
