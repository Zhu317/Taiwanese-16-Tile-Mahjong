const Dices = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
const Mahjong = [
  "🀀", "🀀", "🀀", "🀀",
  "🀁", "🀁", "🀁", "🀁",
  "🀂", "🀂", "🀂", "🀂",
  "🀃", "🀃", "🀃", "🀃",
  "🀄", "🀄", "🀄", "🀄",
  "🀅", "🀅", "🀅", "🀅",
  "🀆", "🀆", "🀆", "🀆",
  "🀇", "🀇", "🀇", "🀇",
  "🀈", "🀈", "🀈", "🀈",
  "🀉", "🀉", "🀉", "🀉",
  "🀊", "🀊", "🀊", "🀊",
  "🀋", "🀋", "🀋", "🀋",
  "🀌", "🀌", "🀌", "🀌",
  "🀍", "🀍", "🀍", "🀍",
  "🀎", "🀎", "🀎", "🀎",
  "🀏", "🀏", "🀏", "🀏",
  "🀐", "🀐", "🀐", "🀐",
  "🀑", "🀑", "🀑", "🀑",
  "🀒", "🀒", "🀒", "🀒",
  "🀓", "🀓", "🀓", "🀓",
  "🀔", "🀔", "🀔", "🀔",
  "🀕", "🀕", "🀕", "🀕",
  "🀖", "🀖", "🀖", "🀖",
  "🀗", "🀗", "🀗", "🀗",
  "🀘", "🀘", "🀘", "🀘",
  "🀙", "🀙", "🀙", "🀙",
  "🀚", "🀚", "🀚", "🀚",
  "🀛", "🀛", "🀛", "🀛",
  "🀜", "🀜", "🀜", "🀜",
  "🀝", "🀝", "🀝", "🀝",
  "🀞", "🀞", "🀞", "🀞",
  "🀟", "🀟", "🀟", "🀟",
  "🀠", "🀠", "🀠", "🀠",
  "🀡", "🀡", "🀡", "🀡",
  "🀢", "🀣", "🀤", "🀥",
  "🀦", "🀧", "🀨", "🀩"
];
const SeasonsFlowers = ["🀢", "🀣", "🀤", "🀥", "🀦", "🀧", "🀨", "🀩"];
const Pair = [
  "🀀🀀", "🀁🀁", "🀂🀂", "🀃🀃", "🀄🀄", "🀅🀅", "🀆🀆",
  "🀇🀇", "🀈🀈", "🀉🀉", "🀊🀊", "🀋🀋", "🀌🀌", "🀍🀍", "🀎🀎", "🀏🀏",
  "🀐🀐", "🀑🀑", "🀒🀒", "🀓🀓", "🀔🀔", "🀕🀕", "🀖🀖", "🀗🀗", "🀘🀘",
  "🀙🀙", "🀚🀚", "🀛🀛", "🀜🀜", "🀝🀝", "🀞🀞", "🀟🀟", "🀠🀠", "🀡🀡"
];
const Pung = [
  "🀀🀀🀀", "🀁🀁🀁", "🀂🀂🀂", "🀃🀃🀃", "🀄🀄🀄", "🀅🀅🀅", "🀆🀆🀆",
  "🀇🀇🀇", "🀈🀈🀈", "🀉🀉🀉", "🀊🀊🀊", "🀋🀋🀋", "🀌🀌🀌", "🀍🀍🀍", "🀎🀎🀎", "🀏🀏🀏",
  "🀐🀐🀐", "🀑🀑🀑", "🀒🀒🀒", "🀓🀓🀓", "🀔🀔🀔", "🀕🀕🀕", "🀖🀖🀖", "🀗🀗🀗", "🀘🀘🀘",
  "🀙🀙🀙", "🀚🀚🀚", "🀛🀛🀛", "🀜🀜🀜", "🀝🀝🀝", "🀞🀞🀞", "🀟🀟🀟", "🀠🀠🀠", "🀡🀡🀡"
];
const Chow = [
  "🀇", "🀈", "🀉", "🀊", "🀋", "🀌", "🀍", "🀎", "🀏",
  "🀐", "🀑", "🀒", "🀓", "🀔", "🀕", "🀖", "🀗", "🀘",
  "🀙", "🀚", "🀛", "🀜", "🀝", "🀞", "🀟", "🀠", "🀡"
];
const ParingChow = [
  ["🀇", "🀈", "🀉"], ["🀈", "🀉", "🀊"], ["🀉", "🀊", "🀋"], ["🀊", "🀋", "🀌"], ["🀋", "🀌", "🀍"], ["🀌", "🀍", "🀎"], ["🀍", "🀎", "🀏"],
  ["🀐", "🀑", "🀒"], ["🀑", "🀒", "🀓"], ["🀒", "🀓", "🀔"], ["🀓", "🀔", "🀕"], ["🀔", "🀕", "🀖"], ["🀕", "🀖", "🀗"], ["🀖", "🀗", "🀘"],
  ["🀙", "🀚", "🀛"], ["🀚", "🀛", "🀜"], ["🀛", "🀜", "🀝"], ["🀜", "🀝", "🀞"], ["🀝", "🀞", "🀟"], ["🀞", "🀟", "🀠"], ["🀟", "🀠", "🀡"]
];
const PossibleChow = [
  "🀇🀈", "🀈🀉", "🀉🀊", "🀊🀋", "🀋🀌", "🀌🀍", "🀍🀎", "🀎🀏",
  "🀐🀑", "🀑🀒", "🀒🀓", "🀓🀔", "🀔🀕", "🀕🀖", "🀖🀗", "🀗🀘",
  "🀙🀚", "🀚🀛", "🀛🀜", "🀜🀝", "🀝🀞", "🀞🀟", "🀟🀠", "🀠🀡"
];
const ParingChowDictionary = {
  "🀇": ["🀈", "🀉"],
  "🀈": ["🀇", "🀉", "🀊"],
  "🀉": ["🀇", "🀈", "🀊", "🀋"],
  "🀊": ["🀈", "🀉", "🀋", "🀌"],
  "🀋": ["🀉", "🀊", "🀌", "🀍"],
  "🀌": ["🀊", "🀋", "🀍", "🀎"],
  "🀍": ["🀋", "🀌", "🀎", "🀏"],
  "🀎": ["🀌", "🀍", "🀏"],
  "🀏": ["🀍", "🀎"],
  "🀐": ["🀑", "🀒"],
  "🀑": ["🀐", "🀒", "🀓"],
  "🀒": ["🀐", "🀑", "🀓", "🀔"],
  "🀓": ["🀑", "🀒", "🀔", "🀕"],
  "🀔": ["🀒", "🀓", "🀕", "🀖"],
  "🀕": ["🀓", "🀔", "🀖", "🀗"],
  "🀖": ["🀔", "🀕", "🀗", "🀘"],
  "🀗": ["🀕", "🀖", "🀘"],
  "🀘": ["🀖", "🀗"],
  "🀙": ["🀚", "🀛"],
  "🀚": ["🀙", "🀛", "🀜"],
  "🀛": ["🀙", "🀚", "🀜", "🀝"],
  "🀜": ["🀚", "🀛", "🀝", "🀞"],
  "🀝": ["🀛", "🀜", "🀞", "🀟"],
  "🀞": ["🀜", "🀝", "🀟", "🀠"],
  "🀟": ["🀝", "🀞", "🀠", "🀡"],
  "🀠": ["🀞", "🀟", "🀡"],
  "🀡": ["🀟", "🀠"]
};
let StartPosition, EndPosition, Discard, EastDiscarded, SouthDiscarded, WestDiscarded, NorthDiscarded, PlayerNow, PlayerNowTile, EastCanKong, EastCanMeldedAndConcealedKong, EastCanConcealedKongAtFirst, EastCanPung, EastCanChow, EastCanKongAndChow, EastCanPungAndChow, Draw, GameOver, SomeoneMahjong, SouthCanConcealedKongAtFirst, WestCanConcealedKongAtFirst, NorthCanConcealedKongAtFirst;
let TempMahjong = new Array();
let East = new Array();
let South = new Array();
let West = new Array();
let North = new Array();
let EastTilesInFrontOfHand = new Array();
let SouthTilesInFrontOfHand = new Array();
let WestTilesInFrontOfHand = new Array();
let NorthTilesInFrontOfHand = new Array();
let OneTileLeft = new Array(72).fill(false);
let MeldedEastPungs = new Array();
let MeldedSouthPungs = new Array();
let MeldedWestPungs = new Array();
let MeldedNorthPungs = new Array();
let ChowTiles = new Array();
let ChowEastTiles = new Array();
let BeginningConcealedKongs = new Array();
let SouthBeginningConcealedKongs = new Array();
let WestBeginningConcealedKongs = new Array();
let NorthBeginningConcealedKongs = new Array();

// Turn on the interface of game tutorial.
function TurnOnTutorial() {
  document.getElementById("overlay").style.display = 'block';
}

// Turn off the interface of game tutorial.
function TurnOffTutorial() {
  document.getElementById("overlay").style.display = 'none';
}

//Hide tiles after being taken out, 32 in total.
function HideTakeOut(Total) {
  let j;
  switch (Total) {
    case 3: //西
      EndPosition = 3;
      break;
    case 4: //北
      EndPosition = 58;
      break;
    case 5: //東
      EndPosition = 41;
      break;
    case 6: //南
      EndPosition = 24;
      break;
    case 7: //西
      EndPosition = 7;
      break;
    case 8: //北
      EndPosition = 62;
      break;
    case 9: //東
      EndPosition = 45;
      break;
    case 10: //南
      EndPosition = 28;
      break;
    case 11: //西
      EndPosition = 11;
      break;
    case 12: //北
      EndPosition = 66;
      break;
    case 13: //東
      EndPosition = 49;
      break;
    case 14: //南
      EndPosition = 32;
      break;
    case 15: //西
      EndPosition = 15;
      break;
    case 16: //北
      EndPosition = 70;
      break;
    case 17: //東
      EndPosition = 53;
      break;
    case 18: //南
      EndPosition = 36;
      break;
  }
  for (let i = 1; i <= 32; i++) {
    j = (i + EndPosition) % 72;
    document.getElementById(`takeout${j}`).style.visibility = 'hidden';
  }
  StartPosition = j + 1;
}

// Hide tiles from the last part.
function HideLastTiles() {
  if (OneTileLeft[EndPosition]) {
    document.getElementById(`takeout${EndPosition}`).style.opacity = 1;
    document.getElementById(`takeout${EndPosition}`).style.visibility = 'hidden';
    OneTileLeft[EndPosition] = false;
    EndPosition = (EndPosition + 71) % 72;
  } else {
    document.getElementById(`takeout${EndPosition}`).style.opacity = 0.5;
    OneTileLeft[EndPosition] = true;
  }
}

// Hide tiles from the starting part.
function HideStartingTiles() {
  if (OneTileLeft[StartPosition]) {
    document.getElementById(`takeout${StartPosition}`).style.opacity = 1;
    document.getElementById(`takeout${StartPosition}`).style.visibility = 'hidden';
    OneTileLeft[StartPosition] = false;
    StartPosition = (StartPosition + 1) % 72;
  } else {
    document.getElementById(`takeout${StartPosition}`).style.opacity = 0.5;
    OneTileLeft[StartPosition] = true;
  }
}

// Disable click events of the tiles (East).
function DisableEastTiles() {
  for (let i = 0; i < East.length; i++) {
    document.getElementById(`PlayerTiles${i}`).removeEventListener("click", PlayMahjong);
  }
}

// Claim who the winner is.
function PlayerMahjong(Tile, ImgFile) {
  document.getElementById("information").innerHTML = "";
  switch (Tile) {
    case "East":
      document.getElementById("information").innerHTML += "<p>東：Mahjong!</p>";
      DisableEastTiles();
      if (ImgFile != "") East.push(ImgFile);
      break;
    case "South":
      document.getElementById("information").innerHTML += "<p>南：Mahjong!</p>";
      if (ImgFile != "") South.push(ImgFile);
      break;
    case "West":
      document.getElementById("information").innerHTML += "<p>西：Mahjong!</p>";
      if (ImgFile != "") West.push(ImgFile);
      break;
    case "North":
      document.getElementById("information").innerHTML += "<p>北：Mahjong!</p>";
      if (ImgFile != "") North.push(ImgFile);
      break;
  }
  let tbl = document.createElement('table');
  tbl.setAttribute("id", "tabletiles");
  for (let i = 0; i < 8; i++) {
    let tr = tbl.insertRow();
    for (let j = 0; j < 2; j++) {
      if (i % 2 == 0 && j == 0) {
        let td = tr.insertCell();
        td.setAttribute('rowSpan', '2');
        switch (i) {
          case 0:
            td.appendChild(document.createTextNode("東"));
            break;
          case 2:
            td.appendChild(document.createTextNode("南"));
            break;
          case 4:
            td.appendChild(document.createTextNode("西"));
            break;
          case 6:
            td.appendChild(document.createTextNode("北"));
            break;
        }
      } else if (i % 2 == 0 && j == 1) {
        let td = tr.insertCell();
        switch (i) {
          case 0:
            if (EastTilesInFrontOfHand.length != 0) td.appendChild(document.createTextNode(EastTilesInFrontOfHand.join('')));
            else td.appendChild(document.createTextNode(""));
            break;
          case 2:
            if (SouthTilesInFrontOfHand.length != 0) td.appendChild(document.createTextNode(SouthTilesInFrontOfHand.join('')));
            else td.appendChild(document.createTextNode(""));
            break;
          case 4:
            if (WestTilesInFrontOfHand.length != 0) td.appendChild(document.createTextNode(WestTilesInFrontOfHand.join('')));
            else td.appendChild(document.createTextNode(""));
            break;
          case 6:
            if (NorthTilesInFrontOfHand.length != 0) td.appendChild(document.createTextNode(NorthTilesInFrontOfHand.join('')));
            else td.appendChild(document.createTextNode(""));
            break;
        }
      } else if (i % 2 == 1 && j == 0) {
        continue;
      } else {
        let td = tr.insertCell();
        switch (i) {
          case 1:
            td.appendChild(document.createTextNode(East.join('')));
            break;
          case 3:
            td.appendChild(document.createTextNode(South.join('')));
            break;
          case 5:
            td.appendChild(document.createTextNode(West.join('')));
            break;
          case 7:
            td.appendChild(document.createTextNode(North.join('')));
            break;
        }
      }
    }
  }
  document.getElementById("information").appendChild(tbl);
  clearInterval(GameOver);
  document.getElementById("startgame").disabled = false;
}

// Check if winning or not.
function WhetherMahjong(CheckedPlayer, ImgFile) {
  let WinningMahjong = false;
  let Tile = new Array();
  let PairIndex = new Array();
  switch (CheckedPlayer) {
    case "East":
      Tile = East.slice();
      if(ImgFile != "") Tile.push(ImgFile);
      break;
    case "South":
      Tile = South.slice();
      if(ImgFile != "") Tile.push(ImgFile);
      break;
    case "West":
      Tile = West.slice();
      if(ImgFile != "") Tile.push(ImgFile);
      break;
    case "North":
      Tile = North.slice();
      if(ImgFile != "") Tile.push(ImgFile);
      break;
  }
  Tile.sort();
  let Tiles = Tile.join('');
  // Find all the possible pairs. 
  Pair.forEach(element => {
    if (Tiles.includes(element)) {
      PairIndex.push(element);
    }
  });
  // Compare each pair to the tiles.
  PairIndex.forEach(element => {
    let TempTiles = Tiles.replace(element, "");
    // Find all the possible pungs.
    Pung.forEach(P => TempTiles = TempTiles.replace(P, ""));
    // Find all the possible chows. The same chow may appear more than 1 time, such as "🀇🀇🀈🀈🀉🀉".
    ParingChow.forEach(C => {
      while (C.every(Cs => TempTiles.includes(Cs))) {
        C.forEach(Cs => TempTiles = TempTiles.replace(Cs, ""));
      }
    })
    if (TempTiles.length == 0) {
      WinningMahjong = true;
    }
  });
  if (WinningMahjong) return true;
  else return false;
}

// Replace seasons and flowers to regular tiles.
function ChangeSeasonsAndFlowers(Tile) {
  switch (Tile) {
    case "East":
      while (SeasonsFlowers.some(element => East.includes(element))) {
        SeasonsFlowers.forEach(elements => {
          if (East.includes(elements)) {
            let img = document.createElement("img");
            img.src = `./image/East/${elements}.png`;
            document.getElementById("SuitedE").appendChild(img);
            EastTilesInFrontOfHand.push(elements);
            East.splice(East.indexOf(elements), 1);
            East.push(TempMahjong[0]);
            TempMahjong.shift();
            HideLastTiles();
          }
        });
      }
      break;
    case "South":
      while (SeasonsFlowers.some(element => South.includes(element))) {
        SeasonsFlowers.forEach(elements => {
          if (South.includes(elements)) {
            let img = document.createElement("img");
            img.src = `./image/South/${elements}.png`;
            document.getElementById("SuitedS").appendChild(img);
            SouthTilesInFrontOfHand.push(elements);
            South.splice(South.indexOf(elements), 1);
            South.push(TempMahjong[0]);
            TempMahjong.shift();
            HideLastTiles();
          }
        });        
      }
      break;
    case "West":
      while (SeasonsFlowers.some(element => West.includes(element))) {
        SeasonsFlowers.forEach(elements => {
          if (West.includes(elements)) {
            let img = document.createElement("img");
            img.src = `./image/West/${elements}.png`;
            document.getElementById("SuitedW").appendChild(img);
            WestTilesInFrontOfHand.push(elements);
            West.splice(West.indexOf(elements), 1);
            West.push(TempMahjong[0]);
            TempMahjong.shift();
            HideLastTiles();
          }          
        });
      }
      break;
    case "North":
      while (SeasonsFlowers.some(element => North.includes(element))) {
        SeasonsFlowers.forEach(elements => {
          if (North.includes(elements)) {
            let img = document.createElement("img");
            img.src = `./image/North/${elements}.png`;
            document.getElementById("SuitedN").appendChild(img);
            NorthTilesInFrontOfHand.push(elements);
            North.splice(North.indexOf(elements), 1);
            North.push(TempMahjong[0]);
            TempMahjong.shift();
            HideLastTiles();
          }
        })        
      }
      break;
  }
}

// Sort tiles of the player (East).
function SortedEastTiles() {
  East.sort();
  document.getElementById("Player").innerHTML = "";
  for (let i = 0; i < East.length; i++) {
    let img = document.createElement("img");
    img.src = `./image/East/${East[i]}.png`;
    img.setAttribute("id", `PlayerTiles${i}`);
    document.getElementById("Player").appendChild(img);
    document.getElementById(`PlayerTiles${i}`).addEventListener("click", PlayMahjong);
  }
}

// Show the remaining tiles.
function RemainingTiles() {
  document.getElementById("RemainingNumber").innerHTML = TempMahjong.length;
  if (TempMahjong.length <= Draw) {
    document.getElementById("information").innerHTML = "<p>It’s a draw!</p>";
    let tbl = document.createElement('table');
    tbl.setAttribute("id", "tabletiles");
    for (let i = 0; i < 8; i++) {
      let tr = tbl.insertRow();
      for (let j = 0; j < 2; j++) {
        if (i % 2 == 0 && j == 0) {
          let td = tr.insertCell();
          td.setAttribute('rowSpan', '2');
          switch (i) {
            case 0:
              td.appendChild(document.createTextNode("東"));
              break;
            case 2:
              td.appendChild(document.createTextNode("南"));
              break;
            case 4:
              td.appendChild(document.createTextNode("西"));
              break;
            case 6:
              td.appendChild(document.createTextNode("北"));
              break;
          }
        } else if (i % 2 == 0 && j == 1) {
          let td = tr.insertCell();
          switch (i) {
            case 0:
              if (EastTilesInFrontOfHand.length != 0) td.appendChild(document.createTextNode(EastTilesInFrontOfHand.join('')));
              else td.appendChild(document.createTextNode(""));
              break;
            case 2:
              if (SouthTilesInFrontOfHand.length != 0) td.appendChild(document.createTextNode(SouthTilesInFrontOfHand.join('')));
              else td.appendChild(document.createTextNode(""));
              break;
            case 4:
              if (WestTilesInFrontOfHand.length != 0) td.appendChild(document.createTextNode(WestTilesInFrontOfHand.join('')));
              else td.appendChild(document.createTextNode(""));
              break;
            case 6:
              if (NorthTilesInFrontOfHand.length != 0) td.appendChild(document.createTextNode(NorthTilesInFrontOfHand.join('')));
              else td.appendChild(document.createTextNode(""));
              break;
          }
        } else if (i % 2 == 1 && j == 0) {
          continue;
        } else {
          let td = tr.insertCell();
          switch (i) {
            case 1:
              td.appendChild(document.createTextNode(East.join('')));
              break;
            case 3:
              td.appendChild(document.createTextNode(South.join('')));
              break;
            case 5:
              td.appendChild(document.createTextNode(West.join('')));
              break;
            case 7:
              td.appendChild(document.createTextNode(North.join('')));
              break;
          }
        }
      }
    }
    document.getElementById("information").appendChild(tbl);
    clearInterval(GameOver);
    DisableEastTiles();
    document.getElementById("startgame").disabled = false;
  }
}

// Discard a tile.
function DiscardTiles(Tile) {
  switch (Tile) {
    case "South":
      let PairIndexS = new Array();
      South.sort();
      let TilesS = South.join(''), SmallestTilesS = "";
      let MinimumS = 17;
      Pair.forEach(element => {
        if (TilesS.includes(element)) {
          PairIndexS.push(element);
        }
      });
      PairIndexS.forEach(element => {
        let TempTiles = TilesS.replace(element, "");
        Pung.forEach(P => TempTiles = TempTiles.replace(P, ""));
        ParingChow.forEach(C => {
          while (C.every(Cs => TempTiles.includes(Cs))){
            C.forEach(Cs => TempTiles = TempTiles.replace(Cs, ""));
          }
        })
        if (TempTiles.length < MinimumS) {
          MinimumS = TempTiles.length;
          SmallestTilesS = TempTiles;
        }
      });
      PairIndexS.forEach(element => SmallestTilesS = SmallestTilesS.replace(element, ""));
      PossibleChow.forEach(element => SmallestTilesS = SmallestTilesS.replace(element, ""));
      if (SmallestTilesS == "") {
        let img = document.createElement("img");
        img.src = `./image/East/${South[0]}.png`;
        img.setAttribute("id", `discarded${Discard}`);
        document.getElementById("playing").appendChild(img);
        SouthDiscarded = South[0];
        South.splice(0, 1);
        Discard++;
        document.getElementById("drawingtileS").style.visibility = 'hidden';
      } else {
        let img = document.createElement("img");
        img.src = `./image/East/${[...SmallestTilesS][0]}.png`;
        img.setAttribute("id", `discarded${Discard}`);
        document.getElementById("playing").appendChild(img);
        SouthDiscarded = [...SmallestTilesS][0];
        South.splice(South.indexOf([...SmallestTilesS][0]), 1);
        Discard++;
        document.getElementById("drawingtileS").style.visibility = 'hidden';
      }
      PlayerNow = "South";
      if (WhetherMahjong("West", SouthDiscarded)) {
        SomeoneMahjong = true;
        PlayerMahjong("West", SouthDiscarded);
      } else if (WhetherMahjong("North", SouthDiscarded)) {
        SomeoneMahjong = true;
        PlayerMahjong("North", SouthDiscarded);
      } else if (WhetherMahjong("East", SouthDiscarded)) {
        SomeoneMahjong = true;
        PlayerMahjong("East", SouthDiscarded);
      } else KongsPungsChows("South");
      break;
    case "West":
      let PairIndexW = new Array();
      West.sort();
      let TilesW = West.join(''), SmallestTilesW = "";
      let MinimumW = 17;
      Pair.forEach(element => {
        if (TilesW.includes(element)) {
          PairIndexW.push(element);
        }
      });
      PairIndexW.forEach(element => {
        let TempTiles = TilesW.replace(element, "");
        Pung.forEach(P => TempTiles = TempTiles.replace(P, ""));
        ParingChow.forEach(C => {
          while (C.every(Cs => TempTiles.includes(Cs))){
            C.forEach(Cs => TempTiles = TempTiles.replace(Cs, ""));
          }
        })
        if (TempTiles.length < MinimumW) {
          MinimumW = TempTiles.length;
          SmallestTilesW = TempTiles;
        }
      });
      PairIndexW.forEach(element => SmallestTilesW = SmallestTilesW.replace(element, ""));
      PossibleChow.forEach(element => SmallestTilesW = SmallestTilesW.replace(element, ""));
      if (SmallestTilesW == "") {
        let img = document.createElement("img");
        img.src = `./image/East/${West[0]}.png`;
        img.setAttribute("id", `discarded${Discard}`);
        document.getElementById("playing").appendChild(img);
        WestDiscarded = West[0];
        West.splice(0, 1);
        Discard++;
        document.getElementById("drawingtileW").style.visibility = 'hidden';
      } else {
        let img = document.createElement("img");
        img.src = `./image/East/${[...SmallestTilesW][0]}.png`;
        img.setAttribute("id", `discarded${Discard}`);
        document.getElementById("playing").appendChild(img);
        WestDiscarded = [...SmallestTilesW][0];
        West.splice(West.indexOf([...SmallestTilesW][0]), 1);
        Discard++;
        document.getElementById("drawingtileW").style.visibility = 'hidden';
      }
      PlayerNow = "West";
      if (WhetherMahjong("North", WestDiscarded)) {
        SomeoneMahjong = true;
        PlayerMahjong("North", WestDiscarded);
      } else if (WhetherMahjong("East", WestDiscarded)) {
        SomeoneMahjong = true;
        PlayerMahjong("East", WestDiscarded);
      } else if (WhetherMahjong("South", WestDiscarded)) {
        SomeoneMahjong = true;
        PlayerMahjong("South", WestDiscarded);
      } else KongsPungsChows("West");
      break;
    case "North":
      let PairIndexN = new Array();
      North.sort();
      let TilesN = North.join(''), SmallestTilesN = "";
      let MinimumN = 17;
      Pair.forEach(element => {
        if (TilesN.includes(element)) {
          PairIndexN.push(element);
        }
      });
      PairIndexN.forEach(element => {
        let TempTiles = TilesN.replace(element, "");
        Pung.forEach(P => TempTiles = TempTiles.replace(P, ""));
        ParingChow.forEach(C => {
          while (C.every(Cs => TempTiles.includes(Cs))){
            C.forEach(Cs => TempTiles = TempTiles.replace(Cs, ""));
          }
        })
        if (TempTiles.length < MinimumN) {
          MinimumN = TempTiles.length;
          SmallestTilesN = TempTiles;
        }
      });
      PairIndexN.forEach(element => SmallestTilesN = SmallestTilesN.replace(element, ""));
      PossibleChow.forEach(element => SmallestTilesN = SmallestTilesN.replace(element, ""));
      if (SmallestTilesN == "") {
        let img = document.createElement("img");
        img.src = `./image/East/${North[0]}.png`;
        img.setAttribute("id", `discarded${Discard}`);
        document.getElementById("playing").appendChild(img);
        NorthDiscarded = North[0];
        North.splice(0, 1);
        Discard++;
        document.getElementById("drawingtileN").style.visibility = 'hidden';
      } else {
        let img = document.createElement("img");
        img.src = `./image/East/${[...SmallestTilesN][0]}.png`;
        img.setAttribute("id", `discarded${Discard}`);
        document.getElementById("playing").appendChild(img);
        NorthDiscarded = [...SmallestTilesN][0];
        North.splice(North.indexOf([...SmallestTilesN][0]), 1);
        Discard++;
        document.getElementById("drawingtileN").style.visibility = 'hidden';
      }
      PlayerNow = "North";
      if (WhetherMahjong("East", NorthDiscarded)) {
        SomeoneMahjong = true;
        PlayerMahjong("East", NorthDiscarded);
      } else if (WhetherMahjong("South", NorthDiscarded)) {
        SomeoneMahjong = true;
        PlayerMahjong("South", NorthDiscarded);
      } else if (WhetherMahjong("West", NorthDiscarded)) {
        SomeoneMahjong = true;
        PlayerMahjong("West", NorthDiscarded);
      } else KongsPungsChows("North");
      break;
  }
}

// East has concealed kongs.
function EastConcealedKongs(ImgFile) {
  for (let i = 0; i < 4; i++) {
    let img = document.createElement("img");
    img.src = "./image/背面.png";
    document.getElementById("SuitedE").appendChild(img);
    EastTilesInFrontOfHand.push(ImgFile);
  }
  East = East.filter(element => element != ImgFile);
  SortedEastTiles();
  East.push(TempMahjong[0]);
  TempMahjong.shift();
  HideLastTiles();
  if (WhetherMahjong("East", "")) {
    SomeoneMahjong = true;
  } else {
    ChangeSeasonsAndFlowers("East");
    if (WhetherMahjong("East", "")) {
      SomeoneMahjong = true;
    }
  }
  Draw += 2;
}

// South has concealed kongs.
function SouthConcealedKongs(ImgFile) {
  for (let i = 0; i < 4; i++) {
    let img = document.createElement("img");
    img.src = "./image/背面2.png";
    document.getElementById("SuitedS").appendChild(img);
    SouthTilesInFrontOfHand.push(ImgFile);
  }
  for (let i = South.length - 2; i >= South.length - 4; i--) {
    document.getElementById(`tilesS${i}`).style.visibility = 'hidden';
  }
  South = South.filter(element => element != ImgFile);
  South.push(TempMahjong[0]);
  TempMahjong.shift();
  HideLastTiles();
  if (WhetherMahjong("South", "")) {
    SomeoneMahjong = true;
    PlayerMahjong("South", "");
  } else {
    ChangeSeasonsAndFlowers("South");
    if (WhetherMahjong("South", "")) {
      SomeoneMahjong = true;
      PlayerMahjong("South", "");
    }
  }
  Draw += 2;
}

// West has concealed kongs.
function WestConcealedKongs(ImgFile) {
  for (let i = 0; i < 4; i++) {
    let img = document.createElement("img");
    img.src = "./image/背面.png";
    document.getElementById("SuitedW").appendChild(img);
    WestTilesInFrontOfHand.push(ImgFile);
  }
  for (let i = West.length - 2; i >= West.length - 4; i--) {
    document.getElementById(`tilesW${i}`).style.visibility = 'hidden';
  }
  West = West.filter(element => element != ImgFile);
  West.push(TempMahjong[0]);
  TempMahjong.shift();
  HideLastTiles();
  if (WhetherMahjong("West", "")) {
    SomeoneMahjong = true;
    PlayerMahjong("West", "");
  } else {
    ChangeSeasonsAndFlowers("West");
    if (WhetherMahjong("West", "")) {
      SomeoneMahjong = true;
      PlayerMahjong("West", "");
    }
  }
  Draw += 2;
}

// North has concealed kongs.
function NorthConcealedKongs(ImgFile) {
  for (let i = 0; i < 4; i++) {
    let img = document.createElement("img");
    img.src = "./image/背面2.png";
    document.getElementById("SuitedN").appendChild(img);
    NorthTilesInFrontOfHand.push(ImgFile);
  }
  for (let i = North.length - 2; i >= North.length - 4; i--) {
    document.getElementById(`tilesN${i}`).style.visibility = 'hidden';
  }
  North = North.filter(element => element != ImgFile);
  North.push(TempMahjong[0]);
  TempMahjong.shift();
  HideLastTiles();
  if (WhetherMahjong("North", "")) {
    SomeoneMahjong = true;
    PlayerMahjong("North", "");
  } else {
    ChangeSeasonsAndFlowers("North");
    if (WhetherMahjong("North", "")) {
      SomeoneMahjong = true;
      PlayerMahjong("North", "");
    }
  }
  Draw += 2;
}

// East has melded kongs.
function EastMeldedKongs(ImgFile) {
  for (let i = 0; i < 3; i++) document.getElementById(ImgFile).remove();
  EastTilesInFrontOfHand = EastTilesInFrontOfHand.filter(element => element != ImgFile);
  for (let i = 0; i < 4; i++) {
    let img = document.createElement("img");
    img.src = `./image/East/${ImgFile}.png`;
    document.getElementById("SuitedE").appendChild(img);
    EastTilesInFrontOfHand.push(ImgFile);
  }
  East = East.filter(element => element != ImgFile);
  SortedEastTiles();
  East.push(TempMahjong[0]);
  TempMahjong.shift();
  HideLastTiles();
  if (WhetherMahjong("East", "")) {
    SomeoneMahjong = true;
  } else {
    ChangeSeasonsAndFlowers("East");
    if (WhetherMahjong("East", "")) {
      SomeoneMahjong = true;
    }
  }
  Draw += 2;
}

// South has melded kongs.
function SouthMeldedKongs(ImgFile) {
  for (let i = 0; i < 3; i++) document.getElementById(ImgFile).remove();
  SouthTilesInFrontOfHand = SouthTilesInFrontOfHand.filter(element => element != ImgFile);
  for (let i = 0; i < 4; i++) {
    let img = document.createElement("img");
    img.src = `./image/South/${ImgFile}.png`;
    document.getElementById("SuitedS").appendChild(img);
    SouthTilesInFrontOfHand.push(ImgFile);
  }
  South = South.filter(element => element != ImgFile);
  South.push(TempMahjong[0]);
  TempMahjong.shift();
  HideLastTiles();
  if (WhetherMahjong("South", "")) {
    SomeoneMahjong = true;
    PlayerMahjong("South", "");
  } else {
    ChangeSeasonsAndFlowers("South");
    if (WhetherMahjong("South", "")) {
      SomeoneMahjong = true;
      PlayerMahjong("South", "");
    }
  }
  Draw += 2;
}

// West has melded kongs.
function WestMeldedKongs(ImgFile) {
  for (let i = 0; i < 3; i++) document.getElementById(ImgFile).remove();
  WestTilesInFrontOfHand = WestTilesInFrontOfHand.filter(element => element != ImgFile);
  for (let i = 0; i < 4; i++) {
    let img = document.createElement("img");
    img.src = `./image/West/${ImgFile}.png`;
    document.getElementById("SuitedW").appendChild(img);
    WestTilesInFrontOfHand.push(ImgFile);
  }
  West = West.filter(element => element != ImgFile);
  West.push(TempMahjong[0]);
  TempMahjong.shift();
  HideLastTiles();
  if (WhetherMahjong("West", "")) {
    SomeoneMahjong = true;
    PlayerMahjong("West", "");
  } else {
    ChangeSeasonsAndFlowers("West");
    if (WhetherMahjong("West", "")) {
      SomeoneMahjong = true;
      PlayerMahjong("West", "");
    }
  }
  Draw += 2;
}

// North has melded kongs.
function NorthMeldedKongs(ImgFile) {
  for (let i = 0; i < 3; i++) document.getElementById(ImgFile).remove();
  NorthTilesInFrontOfHand = NorthTilesInFrontOfHand.filter(element => element != ImgFile);
  for (let i = 0; i < 4; i++) {
    let img = document.createElement("img");
    img.src = `./image/North/${ImgFile}.png`;
    document.getElementById("SuitedN").appendChild(img);
    NorthTilesInFrontOfHand.push(ImgFile);
  }
  North = North.filter(element => element != ImgFile);
  North.push(TempMahjong[0]);
  TempMahjong.shift();
  HideLastTiles();
  if (WhetherMahjong("North", "")) {
    SomeoneMahjong = true;
    PlayerMahjong("North", "");
  } else {
    ChangeSeasonsAndFlowers("North");
    if (WhetherMahjong("North", "")) {
      SomeoneMahjong = true;
      PlayerMahjong("North", "");
    }
  }
  Draw += 2;
}

// East has kongs.
function EastKongs(ImgFile) {
  for (let i = 0; i < 4; i++) {
    let img = document.createElement("img");
    img.src = `./image/East/${ImgFile}.png`;
    document.getElementById("SuitedE").appendChild(img);
    EastTilesInFrontOfHand.push(ImgFile);
  }
  East = East.filter(element => element != ImgFile);
  document.getElementById(`discarded${Discard - 1}`).remove();
  Discard--;
  SortedEastTiles();
  East.push(TempMahjong[0]);
  TempMahjong.shift();
  HideLastTiles();
  if (WhetherMahjong("East", "")) {
    SomeoneMahjong = true;
  } else {
    ChangeSeasonsAndFlowers("East");
    if (WhetherMahjong("East", "")) {
      SomeoneMahjong = true;
    }
  }
  Draw += 2;
}

// South has kongs.
function SouthKongs(ImgFile) {
  for (let i = 0; i < 4; i++) {
    let img = document.createElement("img");
    img.src = `./image/South/${ImgFile}.png`;
    document.getElementById("SuitedS").appendChild(img);
    SouthTilesInFrontOfHand.push(ImgFile);
  }
  for (let i = South.length - 1; i >= South.length - 3; i--) {
    document.getElementById(`tilesS${i}`).style.visibility = 'hidden';
  }
  South = South.filter(element => element != ImgFile);
  document.getElementById(`discarded${Discard - 1}`).remove();
  Discard--;
  South.push(TempMahjong[0]);
  TempMahjong.shift();
  document.getElementById("drawingtileS").style.visibility = 'visible';
  HideLastTiles();
  if (WhetherMahjong("South", "")) {
    SomeoneMahjong = true;
    PlayerMahjong("South", "");
  } else {
    ChangeSeasonsAndFlowers("South");
    if (WhetherMahjong("South", "")) {
      SomeoneMahjong = true;
      PlayerMahjong("South", "");
    } else {
      while ((South.filter(element => element == South[South.length - 1]).length == 4) || MeldedSouthPungs.some(element => South.includes(element))) {
        if (MeldedSouthPungs.some(element => South.includes(element))) SouthMeldedKongs(South[South.length - 1]);
        else if ((South.filter(element => element == South[South.length - 1]).length == 4)) SouthConcealedKongs(South[South.length - 1]);
        if (SomeoneMahjong) break;
      }
    }
  }
  Draw += 2;
}

// West has kongs.
function WestKongs(ImgFile) {
  for (let i = 0; i < 4; i++) {
    let img = document.createElement("img");
    img.src = `./image/West/${ImgFile}.png`;
    document.getElementById("SuitedW").appendChild(img);
    WestTilesInFrontOfHand.push(ImgFile);
  }
  for (let i = West.length - 1; i >= West.length - 3; i--) {
    document.getElementById(`tilesW${i}`).style.visibility = 'hidden';
  }
  West = West.filter(element => element != ImgFile);
  document.getElementById(`discarded${Discard - 1}`).remove();
  Discard--;
  West.push(TempMahjong[0]);
  TempMahjong.shift();
  document.getElementById("drawingtileW").style.visibility = 'visible';
  HideLastTiles();
  if (WhetherMahjong("West", "")) {
    SomeoneMahjong = true;
    PlayerMahjong("West", "");
  } else {
    ChangeSeasonsAndFlowers("West");
    if (WhetherMahjong("West", "")) {
      SomeoneMahjong = true;
      PlayerMahjong("West", "");
    } else {
      while ((West.filter(element => element == West[West.length - 1]).length == 4) || MeldedWestPungs.some(element => West.includes(element))) {
        if (MeldedWestPungs.some(element => West.includes(element))) WestMeldedKongs(West[West.length - 1]);
        else if ((West.filter(element => element == West[West.length - 1]).length == 4)) WestConcealedKongs(West[West.length - 1]);
        if (SomeoneMahjong) break;
      }
    }    
  }
  Draw += 2;
}

// North has kongs.
function NorthKongs(ImgFile) {
  for (let i = 0; i < 4; i++) {
    let img = document.createElement("img");
    img.src = `./image/North/${ImgFile}.png`;
    document.getElementById("SuitedN").appendChild(img);
    NorthTilesInFrontOfHand.push(ImgFile);
  }
  for (let i = North.length - 1; i >= North.length - 3; i--) {
    document.getElementById(`tilesN${i}`).style.visibility = 'hidden';
  }
  North = North.filter(element => element != ImgFile);
  document.getElementById(`discarded${Discard - 1}`).remove();
  Discard--;
  North.push(TempMahjong[0]);
  TempMahjong.shift();
  document.getElementById("drawingtileN").style.visibility = 'visible';
  HideLastTiles();
  if (WhetherMahjong("North", "")) {
    SomeoneMahjong = true;
    PlayerMahjong("North", "");
  } else {
    ChangeSeasonsAndFlowers("North");
    if (WhetherMahjong("North", "")) {
      SomeoneMahjong = true;
      PlayerMahjong("North", "");
    } else {
      while ((North.filter(element => element == North[North.length - 1]).length == 4) || MeldedNorthPungs.some(element => North.includes(element))) {
        if (MeldedNorthPungs.some(element => North.includes(element))) NorthMeldedKongs(North[North.length - 1]);
        else if ((North.filter(element => element == North[North.length - 1]).length == 4)) NorthConcealedKongs(North[North.length - 1]);
        if (SomeoneMahjong) break;
      }
    }
  }
  Draw += 2;
}

// East has pungs.
function EastPungs(ImgFile) {
  MeldedEastPungs.push(ImgFile);
  for (let i = 0; i < 3; i++) {
    let img = document.createElement("img");
    img.src = `./image/East/${ImgFile}.png`;
    img.setAttribute("id", ImgFile);
    document.getElementById("SuitedE").appendChild(img);
    EastTilesInFrontOfHand.push(ImgFile);
  }
  East = East.filter(element => element != ImgFile);
  document.getElementById(`discarded${Discard - 1}`).remove();
  Discard--;
}

// South has pungs.
function SouthPungs(ImgFile) {
  MeldedSouthPungs.push(ImgFile);
  for (let i = 0; i < 3; i++) {
    let img = document.createElement("img");
    img.src = `./image/South/${ImgFile}.png`;
    img.setAttribute("id", ImgFile);
    document.getElementById("SuitedS").appendChild(img);
    SouthTilesInFrontOfHand.push(ImgFile);
  }
  for (let i = South.length - 1; i >= South.length - 3; i--) {
    document.getElementById(`tilesS${i}`).style.visibility = 'hidden';
  }
  South = South.filter(element => element != ImgFile);
  document.getElementById(`discarded${Discard - 1}`).remove();
  Discard--;
}

// West has pungs.
function WestPungs(ImgFile) {
  MeldedWestPungs.push(ImgFile);
  for (let i = 0; i < 3; i++) {
    let img = document.createElement("img");
    img.src = `./image/West/${ImgFile}.png`;
    img.setAttribute("id", ImgFile);
    document.getElementById("SuitedW").appendChild(img);
    WestTilesInFrontOfHand.push(ImgFile);
  }
  for (let i = West.length - 1; i >= West.length - 3; i--) {
    document.getElementById(`tilesW${i}`).style.visibility = 'hidden';
  }
  West = West.filter(element => element != ImgFile);
  document.getElementById(`discarded${Discard - 1}`).remove();
  Discard--;
}

// North has pungs.
function NorthPungs(ImgFile) {
  MeldedNorthPungs.push(ImgFile);
  for (let i = 0; i < 3; i++) {
    let img = document.createElement("img");
    img.src = `./image/North/${ImgFile}.png`;
    img.setAttribute("id", ImgFile);
    document.getElementById("SuitedN").appendChild(img);
    NorthTilesInFrontOfHand.push(ImgFile);
  }
  for (let i = North.length - 1; i >= North.length - 3; i--) {
    document.getElementById(`tilesN${i}`).style.visibility = 'hidden';
  }
  North = North.filter(element => element != ImgFile);
  document.getElementById(`discarded${Discard - 1}`).remove();
  Discard--;
}

// Check if having chows or not.
function WhetherCanChow(Tile, ImgFile) {
  let Tiles = new Array();
  let CanChow = false;
  switch (Tile) {
    case "South":
      Tiles = South.slice();
      break;
    case "West":
      Tiles = West.slice();
      break;
    case "North":
      Tiles = North.slice();
      break;
  }
  ParingChow.forEach(element => {
    while (element.every(elements => Tiles.includes(elements))){
      element.forEach(elements => Tiles.splice(Tiles.indexOf(elements), 1));
    }
  })
  for (let i = 0; i < ParingChowDictionary[ImgFile].length - 1; i++) {
    if (Tiles.includes(ParingChowDictionary[ImgFile][i]) && Tiles.includes(ParingChowDictionary[ImgFile][i + 1])) {
      ChowTiles.length = 0;
      ChowTiles.push(ParingChowDictionary[ImgFile][i]);
      ChowTiles.push(ImgFile);
      ChowTiles.push(ParingChowDictionary[ImgFile][i + 1]);
      CanChow = true;
      break;
    }
  }
  if (CanChow) return true;
  else return false;
}

// Check if having chows or not (East).
function WhetherEastCanChow(ImgFile) {
  EastCanChow = false;
  ChowEastTiles.length = 0;
  for (let i = 0; i < ParingChowDictionary[ImgFile].length - 1; i++) {
    if (East.includes(ParingChowDictionary[ImgFile][i]) && East.includes(ParingChowDictionary[ImgFile][i + 1])) {
      ChowEastTiles.push([ParingChowDictionary[ImgFile][i], ImgFile, ParingChowDictionary[ImgFile][i + 1]]);
      EastCanChow = true;
    }
  }
  if (EastCanChow) return true;
  else return false;
}

// East has chows.
function EastChows(SelectedChow) {
  for (let i = 0; i < 3; i++) {
    let img = document.createElement("img");
    img.src = `./image/East/${ChowEastTiles[SelectedChow][i]}.png`;
    document.getElementById("SuitedE").appendChild(img);
    EastTilesInFrontOfHand.push(ChowEastTiles[SelectedChow][i]);
  }
  East.splice(East.indexOf(ChowEastTiles[SelectedChow][0]), 1);
  East.splice(East.indexOf(ChowEastTiles[SelectedChow][2]), 1);
  document.getElementById(`discarded${Discard - 1}`).remove();
  Discard--;
}

// South has chows.
function SouthChows() {
  for (let i = 0; i < ChowTiles.length; i++) {
    let img = document.createElement("img");
    img.src = `./image/South/${ChowTiles[i]}.png`;
    document.getElementById("SuitedS").appendChild(img);
    SouthTilesInFrontOfHand.push(ChowTiles[i]);
  }
  for (let i = South.length - 1; i >= South.length - 3; i--) {
    document.getElementById(`tilesS${i}`).style.visibility = 'hidden';
  }
  South.splice(South.indexOf(ChowTiles[0]), 1);
  South.splice(South.indexOf(ChowTiles[2]), 1);
  document.getElementById(`discarded${Discard - 1}`).remove();
  Discard--;
}

// West has chows.
function WestChows() {  
  for (let i = 0; i < ChowTiles.length; i++) {
    let img = document.createElement("img");
    img.src = `./image/West/${ChowTiles[i]}.png`;
    document.getElementById("SuitedW").appendChild(img);
    WestTilesInFrontOfHand.push(ChowTiles[i]);
  }
  for (let i = West.length - 1; i >= West.length - 3; i--) {
    document.getElementById(`tilesW${i}`).style.visibility = 'hidden';
  }
  West.splice(West.indexOf(ChowTiles[0]), 1);
  West.splice(West.indexOf(ChowTiles[2]), 1);
  document.getElementById(`discarded${Discard - 1}`).remove();
  Discard--;
}

// North has chows.
function NorthChows() {
  for (let i = 0; i < ChowTiles.length; i++) {
    let img = document.createElement("img");
    img.src = `./image/North/${ChowTiles[i]}.png`;
    document.getElementById("SuitedN").appendChild(img);
    NorthTilesInFrontOfHand.push(ChowTiles[i]);
  }
  for (let i = North.length - 1; i >= North.length - 3; i--) {
    document.getElementById(`tilesN${i}`).style.visibility = 'hidden';
  }
  North.splice(North.indexOf(ChowTiles[0]), 1);
  North.splice(North.indexOf(ChowTiles[2]), 1);
  document.getElementById(`discarded${Discard - 1}`).remove();
  Discard--;
}

// Check if having kongs, pungs, or chows.
function KongsPungsChows(Tile) {
  switch (Tile) {
    case "East":
      South.sort();
      West.sort();
      North.sort();
      if (South.filter(element => element == EastDiscarded).length == 3) {
        SouthKongs(EastDiscarded);
        if (!SomeoneMahjong) DiscardTiles("South");
      } else if (South.filter(element => element == EastDiscarded).length == 2) {
        SouthPungs(EastDiscarded);
        DiscardTiles("South");
      } else if (West.filter(element => element == EastDiscarded).length == 3) {
        WestKongs(EastDiscarded);
        if (!SomeoneMahjong) DiscardTiles("West");
      } else if (West.filter(element => element == EastDiscarded).length == 2) {
        WestPungs(EastDiscarded);
        DiscardTiles("West");
      } else if (North.filter(element => element == EastDiscarded).length == 3) {
        NorthKongs(EastDiscarded);
        if (!SomeoneMahjong) DiscardTiles("North");
      } else if (North.filter(element => element == EastDiscarded).length == 2) {
        NorthPungs(EastDiscarded);
        DiscardTiles("North");
      } else if (Chow.includes(EastDiscarded) && WhetherCanChow("South", EastDiscarded)) {
        SouthChows();
        DiscardTiles("South");
      }
      break;
    case "South":
      West.sort();
      North.sort();
      if (East.filter(element => element == SouthDiscarded).length == 3) {
        EastCanKong = true;
        PlayerNowTile = SouthDiscarded;
      } else if (East.filter(element => element == SouthDiscarded).length == 2) {
        EastCanPung = true;
        PlayerNowTile = SouthDiscarded;
      } else if (West.filter(element => element == SouthDiscarded).length == 3) {
        WestKongs(SouthDiscarded);
        if (!SomeoneMahjong) DiscardTiles("West");
      } else if (West.filter(element => element == SouthDiscarded).length == 2) {
        WestPungs(SouthDiscarded);
        DiscardTiles("West");
      } else if (North.filter(element => element == SouthDiscarded).length == 3) {
        NorthKongs(SouthDiscarded);
        if (!SomeoneMahjong) DiscardTiles("North");
      } else if (North.filter(element => element == SouthDiscarded).length == 2) {
        NorthPungs(SouthDiscarded);
        DiscardTiles("North");
      } else if (Chow.includes(SouthDiscarded) && WhetherCanChow("West", SouthDiscarded)) {
        WestChows();
        DiscardTiles("West");
      }
      break;
    case "West":
      South.sort();
      North.sort();
      if (East.filter(element => element == WestDiscarded).length == 3) {
        EastCanKong = true;
        PlayerNowTile = WestDiscarded;
      } else if (East.filter(element => element == WestDiscarded).length == 2) {
        EastCanPung = true;
        PlayerNowTile = WestDiscarded;
      } else if (South.filter(element => element == WestDiscarded).length == 3) {
        SouthKongs(WestDiscarded);
        if (!SomeoneMahjong) DiscardTiles("South");
      } else if (South.filter(element => element == WestDiscarded).length == 2) {
        SouthPungs(WestDiscarded);
        DiscardTiles("South");
      } else if (North.filter(element => element == WestDiscarded).length == 3) {
        NorthKongs(WestDiscarded);
        if (!SomeoneMahjong) DiscardTiles("North");
      } else if (North.filter(element => element == WestDiscarded).length == 2) {
        NorthPungs(WestDiscarded);
        DiscardTiles("North");
      } else if (Chow.includes(WestDiscarded) && WhetherCanChow("North", WestDiscarded)) {
        NorthChows();
        DiscardTiles("North");
      }
      break;
    case "North":
      South.sort();
      West.sort();
      if (East.filter(element => element == NorthDiscarded).length == 3) {
        EastCanKong = true;
        PlayerNowTile = NorthDiscarded;
        if (Chow.includes(NorthDiscarded) && WhetherEastCanChow(NorthDiscarded)) {
          EastCanKongAndChow = true;
        }
      } else if (East.filter(element => element == NorthDiscarded).length == 2) {
        EastCanPung = true;
        PlayerNowTile = NorthDiscarded;
        if (Chow.includes(NorthDiscarded) && WhetherEastCanChow(NorthDiscarded)) {
          EastCanPungAndChow = true;
        }
      } else if (South.filter(element => element == NorthDiscarded).length == 3) {
        SouthKongs(NorthDiscarded);
        if (!SomeoneMahjong) DiscardTiles("South");
      } else if (South.filter(element => element == NorthDiscarded).length == 2) {
        SouthPungs(NorthDiscarded);
        DiscardTiles("South");
      } else if (West.filter(element => element == NorthDiscarded).length == 3) {
        WestKongs(NorthDiscarded);
        if (!SomeoneMahjong) DiscardTiles("West");
      } else if (West.filter(element => element == NorthDiscarded).length == 2) {
        WestPungs(NorthDiscarded);
        DiscardTiles("West");
      } else if (Chow.includes(NorthDiscarded) && WhetherEastCanChow(NorthDiscarded)) {
        PlayerNowTile = NorthDiscarded;
      }
      break;
  }
}

// Check if having melded kongs or concealed kongs.
function WhetherMeldedOrConcealedKong() {
  if (MeldedEastPungs.some(element => East.includes(element))) {
    EastCanMeldedAndConcealedKong = true;
    document.getElementById("Kong").disabled = false;
    document.getElementById("information").innerHTML = `Do you want to claim “<b>Kong</b>” for ${East[East.length - 1]}?<br>(If you don’t, just discard a tile.)`;
  }
  else if ((East.filter(element => element == East[East.length - 1]).length == 4)) {
    EastCanMeldedAndConcealedKong = true;
    document.getElementById("Kong").disabled = false;
    document.getElementById("information").innerHTML = `Do you want to claim “<b>Kong</b>” for ${East[East.length - 1]}?<br>(If you don’t, just discard a tile.)`;
  }
}

// Add a tile to the player (East).
function AddEastTiles() {
  EastCanMeldedAndConcealedKong = false;
  document.getElementById("Add").innerHTML = "";
  East.push(TempMahjong[0]);
  TempMahjong.shift();
  HideStartingTiles();
  ChangeSeasonsAndFlowers("East");
  let img = document.createElement("img");
  img.src = `./image/East/${East[East.length - 1]}.png`;
  img.setAttribute("id", `PlayerTiles${East.length - 1}`);
  document.getElementById("Add").appendChild(img);
  document.getElementById(`PlayerTiles${East.length - 1}`).addEventListener("click", PlayMahjong);
  if (WhetherMahjong("East", "")) {
    SomeoneMahjong = true;
    PlayerMahjong("East", "");
  } else {
    WhetherMeldedOrConcealedKong();
  }
}

// Add a tile to the rest players.
function AddTiles(Tile) {
  switch (Tile) {
    case "South":
      South.push(TempMahjong[0]);
      TempMahjong.shift();
      document.getElementById("drawingtileS").style.visibility = 'visible';
      HideStartingTiles();
      if (WhetherMahjong("South", "")) {
        SomeoneMahjong = true;
        PlayerMahjong("South", "");
      } else {
        ChangeSeasonsAndFlowers("South");
        if (WhetherMahjong("South", "")) {
          SomeoneMahjong = true;
          PlayerMahjong("South", "");
        } else {
          while ((South.filter(element => element == South[South.length - 1]).length == 4) || MeldedSouthPungs.some(element => South.includes(element))) {
            if (MeldedSouthPungs.some(element => South.includes(element))) SouthMeldedKongs(South[South.length - 1]);
            else if ((South.filter(element => element == South[South.length - 1]).length == 4)) SouthConcealedKongs(South[South.length - 1]);
            if (SomeoneMahjong) break;
          }
        }
      }
      if (SouthCanConcealedKongAtFirst) {
        while (SouthBeginningConcealedKongs.length != 0 && !SomeoneMahjong) {
          SouthConcealedKongs(SouthBeginningConcealedKongs[0]);
          SouthBeginningConcealedKongs.shift();
          if (MeldedSouthPungs.some(element => South.includes(element))) SouthMeldedKongs(South[South.length - 1]);
          else if ((South.filter(element => element == South[South.length - 1]).length == 4)) SouthBeginningConcealedKongs.push(South[South.length - 1]);
        }
        SouthCanConcealedKongAtFirst = false;
      }
      if (!SomeoneMahjong) DiscardTiles(Tile);
      break;
    case "West":
      West.push(TempMahjong[0]);
      TempMahjong.shift();
      document.getElementById("drawingtileW").style.visibility = 'visible';
      HideStartingTiles();
      if (WhetherMahjong("West", "")) {
        SomeoneMahjong = true;
        PlayerMahjong("West", "");
      } else {
        ChangeSeasonsAndFlowers("West");
        if (WhetherMahjong("West", "")) {
          SomeoneMahjong = true;
          PlayerMahjong("West", "");
        } else {
          while ((West.filter(element => element == West[West.length - 1]).length == 4) || MeldedWestPungs.some(element => West.includes(element))) {
            if (MeldedWestPungs.some(element => West.includes(element))) WestMeldedKongs(West[West.length - 1]);
            else if ((West.filter(element => element == West[West.length - 1]).length == 4)) WestConcealedKongs(West[West.length - 1]);
            if (SomeoneMahjong) break;
          }
        }
      }
      if (WestCanConcealedKongAtFirst) {
        while (WestBeginningConcealedKongs.length != 0 && !SomeoneMahjong) {
          WestConcealedKongs(WestBeginningConcealedKongs[0]);
          WestBeginningConcealedKongs.shift();
          if (MeldedWestPungs.some(element => West.includes(element))) WestMeldedKongs(West[West.length - 1]);
          else if ((West.filter(element => element == West[West.length - 1]).length == 4)) WestBeginningConcealedKongs.push(West[West.length - 1]);
        }
        WestCanConcealedKongAtFirst = false;
      }
      if(!SomeoneMahjong) DiscardTiles(Tile);
      break;
    case "North":
      North.push(TempMahjong[0]);
      TempMahjong.shift();
      document.getElementById("drawingtileN").style.visibility = 'visible';
      HideStartingTiles();
      if (WhetherMahjong("North", "")) {
        SomeoneMahjong = true;
        PlayerMahjong("North", "");
      } else {
        ChangeSeasonsAndFlowers("North");
        if (WhetherMahjong("North", "")) {
          SomeoneMahjong = true;
          PlayerMahjong("North", "");
        } else {
          while ((North.filter(element => element == North[North.length - 1]).length == 4) || MeldedNorthPungs.some(element => North.includes(element))) {
            if (MeldedNorthPungs.some(element => North.includes(element))) NorthMeldedKongs(North[North.length - 1]);
            else if ((North.filter(element => element == North[North.length - 1]).length == 4)) NorthConcealedKongs(North[North.length - 1]);
            if (SomeoneMahjong) break;
          }
        }
      }
      if (NorthCanConcealedKongAtFirst) {
        while (NorthBeginningConcealedKongs.length != 0 && !SomeoneMahjong) {
          NorthConcealedKongs(NorthBeginningConcealedKongs[0]);
          NorthBeginningConcealedKongs.shift();
          if (MeldedNorthPungs.some(element => North.includes(element))) NorthMeldedKongs(North[North.length - 1]);
          else if ((North.filter(element => element == North[North.length - 1]).length == 4)) NorthBeginningConcealedKongs.push(North[North.length - 1]);
        }
        NorthCanConcealedKongAtFirst = false;
      }
      if (!SomeoneMahjong) DiscardTiles(Tile);
      break;
  }
}

// Decide to kong.
function EastWantsKong() {
  if (EastCanKong) {
    EastKongs(PlayerNowTile);
    EastCanKong = false;
    document.getElementById("Kong").disabled = true;
    document.getElementById("Pass").disabled = true;
    document.getElementById("information").innerHTML = "";
    if (EastCanKongAndChow) {
      EastCanKongAndChow = false;
      EastCanChow = false;
      ChowEastTiles.length = 0;
      let opt = document.getElementById("Chow");
      for (let i = opt.options.length - 1; i >= 1; i--) opt.remove(i);
    }
    let img = document.createElement("img");
    img.src = `./image/East/${East[East.length - 1]}.png`;
    img.setAttribute("id", `PlayerTiles${East.length - 1}`);
    document.getElementById("Add").appendChild(img);
    document.getElementById(`PlayerTiles${East.length - 1}`).addEventListener("click", PlayMahjong);
    if (SomeoneMahjong) PlayerMahjong("East", "");
    else WhetherMeldedOrConcealedKong();
  } else if (EastCanMeldedAndConcealedKong) {
    if (MeldedEastPungs.some(element => East.includes(element))) EastMeldedKongs(East[East.length - 1]);
    else if ((East.filter(element => element == East[East.length - 1]).length == 4)) EastConcealedKongs(East[East.length - 1]);
    EastCanMeldedAndConcealedKong = false;
    document.getElementById("Kong").disabled = true;
    document.getElementById("Add").innerHTML = "";
    document.getElementById("information").innerHTML = "";
    let img = document.createElement("img");
    img.src = `./image/East/${East[East.length - 1]}.png`;
    img.setAttribute("id", `PlayerTiles${East.length - 1}`);
    document.getElementById("Add").appendChild(img);
    document.getElementById(`PlayerTiles${East.length - 1}`).addEventListener("click", PlayMahjong);
    if (SomeoneMahjong) PlayerMahjong("East", "");
    else WhetherMeldedOrConcealedKong();
  } else if (EastCanConcealedKongAtFirst) {
    EastConcealedKongs(BeginningConcealedKongs[0]);
    EastCanConcealedKongAtFirst = false;
    BeginningConcealedKongs.shift();
    document.getElementById("Kong").disabled = true;
    document.getElementById("Pass").disabled = true;
    document.getElementById("Add").innerHTML = "";
    document.getElementById("information").innerHTML = "";
    let img = document.createElement("img");
    img.src = `./image/East/${East[East.length - 1]}.png`;
    img.setAttribute("id", `PlayerTiles${East.length - 1}`);
    document.getElementById("Add").appendChild(img);
    document.getElementById(`PlayerTiles${East.length - 1}`).addEventListener("click", PlayMahjong);
    if ((East.filter(element => element == East[East.length - 1]).length == 4)) BeginningConcealedKongs.push(East[East.length - 1]);
    if (SomeoneMahjong) PlayerMahjong("East", "");
    else if (BeginningConcealedKongs.length != 0) {
      EastBeginningConcealedKongs();
    }
  }
}

// Decide to pung.
function EastWantsPung() {
  EastPungs(PlayerNowTile);
  SortedEastTiles();
  EastCanPung = false;
  document.getElementById("Pung").disabled = true;
  document.getElementById("Pass").disabled = true;
  document.getElementById("information").innerHTML = "";
  if (EastCanPungAndChow) {
    EastCanPungAndChow = false;
    EastCanChow = false;
    ChowEastTiles.length = 0;
    let opt = document.getElementById("Chow");
    for (let i = opt.options.length - 1; i >= 1; i--) opt.remove(i);
  }
}

// Decide to chow.
function EastWantsChow() {
  let opt = document.getElementById("Chow");
  let values = opt.options[opt.selectedIndex].value;
  EastChows(values);
  SortedEastTiles();
  EastCanChow = false;
  ChowEastTiles.length = 0;
  for (let i = opt.options.length - 1; i >= 1; i--) opt.remove(i);
  document.getElementById("Pass").disabled = true;
  document.getElementById("information").innerHTML = "";
  if (EastCanKongAndChow || EastCanPungAndChow) {
    EastCanKongAndChow = false;
    EastCanPungAndChow = false;
    EastCanKong = false;
    EastCanPung = false;
    document.getElementById("Kong").disabled = true;
    document.getElementById("Pung").disabled = true;
  }
}

// Decide not to kong, pung, or chow.
function DoNothing() {
  if (EastCanKong || EastCanPung) {
    EastCanKong = false;
    EastCanPung = false;
    document.getElementById("Kong").disabled = true;
    document.getElementById("Pung").disabled = true;
    document.getElementById("Pass").disabled = true;
    document.getElementById("information").innerHTML = "";
    if (EastCanKongAndChow || EastCanPungAndChow) {
      EastCanKongAndChow = false;
      EastCanPungAndChow = false;
      EastCanChow = false;
      ChowEastTiles.length = 0;
      let opt = document.getElementById("Chow");
      for (let i = opt.options.length - 1; i >= 1; i--) opt.remove(i);
    }
    PlayerPlaying();
  } else if (EastCanChow) {
    let opt = document.getElementById("Chow");
    for (let i = opt.options.length - 1; i >= 1; i--) opt.remove(i);
    EastCanChow = false;
    ChowEastTiles.length = 0;
    document.getElementById("Pass").disabled = true;
    document.getElementById("information").innerHTML = "";
    SortedEastTiles();
    AddEastTiles();
  } else if (EastCanConcealedKongAtFirst) {
    BeginningConcealedKongs.shift();
    if (BeginningConcealedKongs.length != 0) {
      EastBeginningConcealedKongs();
    } else {
      SortedEastTiles();
      BeginningConcealedKongs = false;
      document.getElementById("Kong").disabled = true;
      document.getElementById("Pass").disabled = true;
      document.getElementById("Add").innerHTML = "";
      document.getElementById("information").innerHTML = "";
    }
  }
}

// Check if having kongs, pungs, or chows (East).
function WhetherKongsPungsChows() {
  if (!SomeoneMahjong) {
    if (EastCanKong) {
      document.getElementById("Kong").disabled = false;
      document.getElementById("Pass").disabled = false;
      document.getElementById("information").innerHTML = `Do you want to claim “<b>Kong</b>” for ${PlayerNowTile}?`;
      if (EastCanKongAndChow) {
        for (let i = 0; i < ChowEastTiles.length; i++) {
          let opt = document.createElement("option");
          opt.value = i;
          opt.innerHTML = ChowEastTiles[i].join('');
          document.getElementById("Chow").appendChild(opt);
        }
        document.getElementById("information").innerHTML += `<br>Or do you want to claim “<b>Chow</b>” for ${PlayerNowTile}?`;
      }
    } else if (EastCanPung) {
      document.getElementById("Pung").disabled = false;
      document.getElementById("Pass").disabled = false;
      document.getElementById("information").innerHTML = `Do you want to claim “<b>Pung</b>” for ${PlayerNowTile}?`;
      if (EastCanPungAndChow) {
        for (let i = 0; i < ChowEastTiles.length; i++) {
          let opt = document.createElement("option");
          opt.value = i;
          opt.innerHTML = ChowEastTiles[i].join('');
          document.getElementById("Chow").appendChild(opt);
        }
        document.getElementById("information").innerHTML += `<br>Or do you want to claim “<b>Chow</b>” for ${PlayerNowTile}?`;
      }
    } else if (EastCanChow) {
      for (let i = 0; i < ChowEastTiles.length; i++) {
        let opt = document.createElement("option");
        opt.value = i;
        opt.innerHTML = ChowEastTiles[i].join('');
        document.getElementById("Chow").appendChild(opt);
      }
      document.getElementById("Pass").disabled = false;
      document.getElementById("information").innerHTML = `Do you want to claim “<b>Chow</b>” for ${PlayerNowTile}?`;
    }
  }
}

// Play Mahjong.
function PlayerPlaying() {
  if (!SomeoneMahjong) {
    while (PlayerNow != "North") {
      if (EastCanKong || EastCanPung || SomeoneMahjong) break;
      switch (PlayerNow) {
        case "East":
          AddTiles("South");
          break;
        case "South":
          AddTiles("West");
          break;
        case "West":
          AddTiles("North");
          break;
      }
    }
    if (!SomeoneMahjong) {
      WhetherKongsPungsChows();
      if (PlayerNow == "North" && !EastCanKong && !EastCanPung && !EastCanChow) {
        SortedEastTiles();
        AddEastTiles();
      }
    }
  }
}

// Start playing game.
function PlayMahjong() {
  if (EastCanMeldedAndConcealedKong) {
    EastCanMeldedAndConcealedKong = false;
    document.getElementById("Kong").disabled = true;
    document.getElementById("information").innerHTML = "";
  }
  for (let i = 0; i < East.length; i++) {
    if (this.id == `PlayerTiles${i}`) {
      let img = document.getElementById(this.id);
      document.getElementById("playing").appendChild(img);
      document.getElementById(this.id).removeEventListener("click", PlayMahjong);
      document.getElementById(this.id).id = `discarded${Discard}`;
      EastDiscarded = East[i];
      East.splice(i, 1);
      Discard++;
      break;
    }
  }
  SortedEastTiles();
  DisableEastTiles();
  document.getElementById("Add").innerHTML = "";
  if (WhetherMahjong("South", EastDiscarded)) {
    SomeoneMahjong = true;
    PlayerMahjong("South", EastDiscarded);
  } else if (WhetherMahjong("West", EastDiscarded)) {
    SomeoneMahjong = true;
    PlayerMahjong("West", EastDiscarded);
  } else if (WhetherMahjong("North" , EastDiscarded)) {
    SomeoneMahjong = true;
    PlayerMahjong("North", EastDiscarded);
  } else {
    EastCanKong = false;
    EastCanPung = false;
    EastCanChow = false;
    EastCanKongAndChow = false;
    EastCanPungAndChow = false;
    ChowEastTiles.length = 0;
    PlayerNow = "East";
    KongsPungsChows("East");
    PlayerPlaying();
  }
}

// East has concealed kongs right after tiles dealt.
function EastBeginningConcealedKongs() {
  DisableEastTiles();
  EastCanConcealedKongAtFirst = true;
  document.getElementById("Kong").disabled = false;
  document.getElementById("Pass").disabled = false;
  document.getElementById("information").innerHTML = `Do you want to claim “<b>Kong</b>” for ${BeginningConcealedKongs[0]}?`;
} 

// Throw the dice and deal tiles.
function PlayDice() {
  let DiceNumber = "";
  let Sum = 0
  let CountForConcealedKong = new Object();
  let CountForSouthConcealedKong = new Object();
  let CountForWestConcealedKong = new Object();
  let CountForNorthConcealedKong = new Object();
  Discard = 0;
  Draw = 16;
  SomeoneMahjong = false;
  EastCanConcealedKongAtFirst = false;
  SouthCanConcealedKongAtFirst = false;
  WestCanConcealedKongAtFirst = false;
  NorthCanConcealedKongAtFirst = false;
  TempMahjong = Mahjong.slice();
  GameOver = setInterval(RemainingTiles, 500);
  OneTileLeft.fill(false);
  for (let i = 0; i < 72; i++) {
    document.getElementById(`takeout${i}`).style.visibility = 'visible';
    document.getElementById(`takeout${i}`).style.opacity = 1;
  }
  for (let i = 0; i < 16; i++) {
    document.getElementById(`tilesS${i}`).style.visibility = 'visible';
    document.getElementById(`tilesW${i}`).style.visibility = 'visible';
    document.getElementById(`tilesN${i}`).style.visibility = 'visible';
  }
  document.getElementById("drawingtileW").style.visibility = 'hidden';
  document.getElementById("drawingtileN").style.visibility = 'hidden';
  document.getElementById("drawingtileS").style.visibility = 'hidden';
  document.getElementById("startgame").disabled = true;
  let opt = document.getElementById("Chow");
  for (let i = opt.options.length - 1; i >= 1; i--) opt.remove(i);
  for (let i = 0; i < 3; i++) {
    let Number = Math.floor(Math.random() * Dices.length);
    DiceNumber += Dices[Number];
    Sum += Number + 1;
  }
  document.getElementById("DiceNumber").innerHTML = DiceNumber;
  HideTakeOut(Sum);
  // Start giving 16 tiles to each player.
  for (let i = TempMahjong.length - 1; i >= 0; i--) {
    let Number = Math.floor(Math.random() * (i + 1));
    [TempMahjong[i], TempMahjong[Number]] = [TempMahjong[Number], TempMahjong[i]];
  }
  East.length = 0;
  South.length = 0;
  West.length = 0;
  North.length = 0;
  EastTilesInFrontOfHand.length = 0;
  SouthTilesInFrontOfHand.length = 0;
  WestTilesInFrontOfHand.length = 0;
  NorthTilesInFrontOfHand.length = 0;
  MeldedEastPungs.length = 0;
  MeldedSouthPungs.length = 0;
  MeldedWestPungs.length = 0;
  MeldedNorthPungs.length = 0;
  ChowTiles.length = 0;
  ChowEastTiles.length = 0;
  BeginningConcealedKongs.length = 0;
  SouthBeginningConcealedKongs.length = 0;
  WestBeginningConcealedKongs.length = 0;
  NorthBeginningConcealedKongs.length = 0;
  for (let i = 0; i < 4; i++) {
    East.push(TempMahjong[i], TempMahjong[i + 16], TempMahjong[i + 32], TempMahjong[i + 48]);
    South.push(TempMahjong[i + 4], TempMahjong[i + 20], TempMahjong[i + 36], TempMahjong[i + 52]);
    West.push(TempMahjong[i + 8], TempMahjong[i + 24], TempMahjong[i + 40], TempMahjong[i + 56]);
    North.push(TempMahjong[i + 12], TempMahjong[i + 28], TempMahjong[i + 44], TempMahjong[i + 60]);
  }
  // Take 1 more tile.
  East.push(TempMahjong[64]);
  HideStartingTiles();
  TempMahjong.splice(0, 65);
  // Replace tiles of Seasons and Flowers
  document.getElementById("SuitedE").innerHTML = "";
  document.getElementById("SuitedS").innerHTML = "";
  document.getElementById("SuitedW").innerHTML = "";
  document.getElementById("SuitedN").innerHTML = "";
  document.getElementById("playing").innerHTML = "";
  if (document.getElementById("tabletiles")) document.getElementById("tabletiles").remove();
  document.getElementById("information").innerHTML = "";
  document.getElementById("Add").innerHTML = "";
  ChangeSeasonsAndFlowers("East");
  ChangeSeasonsAndFlowers("South");
  ChangeSeasonsAndFlowers("West");
  ChangeSeasonsAndFlowers("North");
  South.forEach(element => {
    if (CountForSouthConcealedKong[element]) {
      CountForSouthConcealedKong[element]++;
    } else CountForSouthConcealedKong[element] = 1;
  })
  for (let [key, value] of Object.entries(CountForSouthConcealedKong)) {
    if (value == 4) SouthBeginningConcealedKongs.push(key);
  }
  if (SouthBeginningConcealedKongs.length != 0) SouthCanConcealedKongAtFirst = true;
  West.forEach(element => {
    if (CountForWestConcealedKong[element]) {
      CountForWestConcealedKong[element]++;
    } else CountForWestConcealedKong[element] = 1;
  })
  for (let [key, value] of Object.entries(CountForWestConcealedKong)) {
    if (value == 4) WestBeginningConcealedKongs.push(key);
  }
  if (WestBeginningConcealedKongs.length != 0) WestCanConcealedKongAtFirst = true;
  North.forEach(element => {
    if (CountForNorthConcealedKong[element]) {
      CountForNorthConcealedKong[element]++;
    } else CountForNorthConcealedKong[element] = 1;
  })
  for (let [key, value] of Object.entries(CountForNorthConcealedKong)) {
    if (value == 4) NorthBeginningConcealedKongs.push(key);
  }
  if (NorthBeginningConcealedKongs.length != 0) NorthCanConcealedKongAtFirst = true;
  if (WhetherMahjong("East", "")) {
    SortedEastTiles();
    South.sort();
    West.sort();
    North.sort();
    SomeoneMahjong = true;
    PlayerMahjong("East", "");
  } else {
    SortedEastTiles();
    East.forEach(element => {
      if (CountForConcealedKong[element]) {
        CountForConcealedKong[element]++;
      } else CountForConcealedKong[element] = 1;
    })
    for (let [key, value] of Object.entries(CountForConcealedKong)) {
      if (value == 4) BeginningConcealedKongs.push(key);
    }
    if (BeginningConcealedKongs.length != 0) EastBeginningConcealedKongs();
  }
}