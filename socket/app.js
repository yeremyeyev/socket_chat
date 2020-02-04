// _____1. простой сервер
// const app = require('express')();
// const http = require('http').Server(app);

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });
// http.listen(3000, function(){
//   console.log('server at http://localhost:3000/');
// });
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
//     console.log('server at http://localhost:3000/');
//   });
// ________3. Обработка событий
// let app = require('express')();
// let http = require('http').Server(app);
// let io = require('socket.io')(http);

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

// io.on('connection', function(socket){
//   console.log('A user connected');
//   // отправка сообщения через промежуток времени
//   setTimeout(function(){
//     socket.send('Sent a massage 2 second after connection');
//   }, 2000);
//   socket.on('disconnect', function(){
//     console.log('A user disconnected');
//   });
// });
// http.listen(3000, function (){
//   console.log('Server at http://localhost:3000/');
// });
// _____4. Добавление пользовательских событий______
// let app = require("express")();
// let http = require("http").Server(app);
// let io = require("socket.io")(http);

// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

// io.on("connetion", function(socket) {
//   console.log("A user connected");
//   setTimeout(function() {
//     // отправка своего события и обьекта клиенту
//     socket.emit("myEvent", { description: "User event from server" });
//   }, 2000);
//   socket.on("disconnect", function() {
//     console.log("A user disconnected");
//   });
// });
// http.listen(3000, function() {
//   console.log("Server at http://localhost:3000/");
// });
// ___5.Получение событий от клиента______
let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
 
app.get('/', function(req, res){
  res.sendFile(__dirname + 'index.html');
});
io.on('connection', function(socket){
 socket.on('cllientEvent',  function(data) {
   console.log(data);
 });
});
http.listen(3000, function() {
  console.log('Server at localhost:3000');
});

// ___6 Широковещение - посыл сообщений всем подключенным клиентам__
let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);
 
app.get('/', function(req, res){
  res.sendFile(__dirname + 'index.html');
});
 
let users = 0;
io.on('connection', function(socket){
  users++;
  socket.broadcast.emit('brodcast', {description: users + ' users conncected'});
  socket.on('disconnect', function (){
    users--;
    socket.broadcast.emit('broadcast', {description: users + ' users disconnected!'});
  });
});
http.listen(3000, function(){
  console.log('Server at localhost:3000');
});

_______________________________________________
// 2:30:38