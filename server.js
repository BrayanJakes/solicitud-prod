//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/appdemo'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
     res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE, OPTIONS");
    next();
});

app.set('port', process.env.PORT || 8080)

app.get('*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/appdemo/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(app.get('port'));