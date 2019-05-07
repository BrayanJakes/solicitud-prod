//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/appdemo'));

app.set('port', process.env.PORT || 8080)

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/appdemo/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(app.get('port'));