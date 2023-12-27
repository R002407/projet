var ch = require('/chess.js')

var chess = new ch.Chess();

// schéma d'un tournoi a 4 personnes //

// simulation de la partie jouée par les participants du tournoi //

var util = require('util'),
    ch =  require('./chess');

var chess = new ch.Chess();

// partie pour player1 et player2 //

while (!chess.game_over()) {
  util.puts('position: ' + chess.fen());
  var moves = chess.moves();
  var move = moves[Math.floor(Math.random() * moves.length)];
  chess.move(move);
  util.puts('move: ' + move);
}

// savoir si la partie est en cours ou finit, et comment elle a finit //

var chess = new Chess();
chess.game_over();
// -> false

chess.load('4k3/4P3/4K3/8/8/8/8/8 b - - 0 78');
chess.game_over();
// -> true (égalité)

chess.load('rnb1kbnr/pppp1ppp/8/4p3/5PPq/8/PPPPP2P/RNBQKBNR w KQkq - 1 3');
chess.game_over();
// -> true (échec et mat)
if (white==win){
  player1=1;
  player2=0;
}else if (black==win){
  player1=0;
  player2=1;
}
return player1, player2;


// reset l'échiquier //
chess.reset();

// partie pour player3 et player4 //

while (!chess.game_over()) {
  util.puts('position: ' + chess.fen());
  var moves = chess.moves();
  var move = moves[Math.floor(Math.random() * moves.length)];
  chess.move(move);
  util.puts('move: ' + move);
}

if (player1 == 1){
  player1 = "finalist";
}

if (player2 == 1){
  player2 = "finalist";
}

if (player3 == 1){
  player3 = "finalist";
}

if (player4 == 1){
  player4 = "finalist";
}

// Les finalistes jouent la finale //

if (startsWith(player) == "finalist"){
  chess.match();
}

var chess = new Chess();
chess.game_over();
// -> false

chess.load('4k3/4P3/4K3/8/8/8/8/8 b - - 0 78');
chess.game_over();
// -> true (égalité)

chess.load('rnb1kbnr/pppp1ppp/8/4p3/5PPq/8/PPPPP2P/RNBQKBNR w KQkq - 1 3');
chess.game_over();
// -> true (échec et mat)

// Le gagnant de la finale est donc le gagnant du tournoi //

