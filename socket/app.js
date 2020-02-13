
const express = require('express');
const app = express();
const nodeMailer = require('nodemailer');

app.set('view engine', 'pug');

app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));

app.get('/', function(req, res) {
  res.render('index', {title: 'CRUD SITE' });
});

app.get('/about', function(req, res) {
  res.render('about', {
    title: 'CRUD ABOUT',
  });
});

app.get('/contact', function(req, res) {
  res.render('contact');
});

app.post('/contact', function(req, res){
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'a.yeremyeyev@gmail.com',
            pass: '2203221144EAo'
        }
    });
    let mailOptions = {
        to: 'eremeev@avilon.ua',
        subject: 'Sending Email using Node.js',
        text: req.body.name + '\n' + req.body.email + '\n' + req.body.phone + '\n' + req.body.message
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
    res.redirect('/contact')
    res.end();
});

app.listen(3000, function(){
    console.log('Site on http://localhost:3000');
})