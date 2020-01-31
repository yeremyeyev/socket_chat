// _____1. простой сервер 
const app = require('express')();
const http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
http.listen(3000, function(){
  console.log('server at localhost:3000');
});
// _____2. Hello world + Socket 
// const app = require('express')();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);


// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function(socket) {
//   console.log('A user connected');

//   socket.on('disconect', function (){
//     console.log('A user disnnected');
//   })
// });

// http.listen(3000, function(){
//     console.log('server at localhost:3000');
//   });
// ________3. Обработка событий
let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
