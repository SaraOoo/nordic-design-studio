var createPolitician = function(name, partyColor){

  var politician = {};
   politician.name = name;
   politician.electionResults = null;
   politician.totalVotes = 0;
   politician.partyColor = partyColor;

  politician.tellMe = function(){
    console.log(this.name + " has been created");
  };

  politician.tellMe();

  politician.countTotalVotes = function (){
  this.totalVotes = 0;
  for (var i = 0; i < this.electionResults.length; i++){
    this.totalVotes = this.totalVotes + this.electionResults[i];
  }
};

  return politician;

};

var GoodGuy = createPolitician("Good Guy", [132, 17, 11]);
var EvilGuy = createPolitician("Evil Guy", [245, 141, 136]);

GoodGuy.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];
EvilGuy.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

GoodGuy.electionResults[9] = 1;
EvilGuy.electionResults[9] = 28;
GoodGuy.electionResults[4] = 17;
EvilGuy.electionResults[4] = 38;
GoodGuy.electionResults[43] = 11;
EvilGuy.electionResults[43] = 27;

var setStateResults = function (state)
{
  theStates[state].winner = null;
  if (GoodGuy.electionResults[state] > EvilGuy.electionResults[state])
  {
    theStates[state].winner = GoodGuy;
  }
  else if (EvilGuy.electionResults[state] > GoodGuy.electionResults[state])
  {
    theStates[state].winner = EvilGuy;
  }
  var stateWinner = theStates[state].winner;
  if (stateWinner !== null)
  {
    theStates[state].rgbColor = stateWinner.partyColor;
  }
  else
  {
    theStates[state].rgbColor = [11,32,57];
  }

  var countryTable = document.getElementById("countryResults");
 var row = countryTable.children[0].children[0];

  row.children[0].innerText = GoodGuy.name;
  row.children[1].innerText = GoodGuy.totalVotes;
  row.children[2].innerText = EvilGuy.name;
  row.children[3].innerText = EvilGuy.totalVotes;
  row.children[5].innerText = winner;

  var stateTable = document.getElementById("stateResults");
  var header = stateTable.children[0].children[0];
  var body = stateTable.children[1];

  var stateName = header.children[0];
  var stateAbb = header.children[1];
  var pol1Name = body.children[0].children[0];
  var pol1Results = body.children[0].children[1];
  var pol2Name = body.children[1].children[0];
  var pol2Results = body.children[1].children[1];
  var tableWinner = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  stateAbb.innerText = theStates[state].nameAbbrev;

  pol1Name.innerText = GoodGuy.name;
  pol1Results.innerText = GoodGuy.electionResults[state];

  pol2Name.innerText = EvilGuy.name;
  pol2Results.innerText = EvilGuy.electionResults[state];

  if (theStates[state].winner === null) {
    tableWinner.innerText = "DRAW";}
  else {tableWinner.innerText = theStates[state].winner.name;}
};



GoodGuy.countTotalVotes();
EvilGuy.countTotalVotes();
console.log(GoodGuy.totalVotes);
console.log(EvilGuy.totalVotes);

var winner = "??";
  if (GoodGuy.totalVotes > EvilGuy.totalVotes)
  { winner = GoodGuy.name; }
    else if (EvilGuy.totalVotes > GoodGuy.totalVotes)  { winner = EvilGuy.name; }
else { winner = "DRAW"}
      console.log(winner + " is the winner!");
