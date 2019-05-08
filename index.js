const express = require('express');
const path = require('path');
const app = express();


//Inportaciones de rutas




//Settings

app.set('port', process.env.PORT || 3000);



//middlewares
app.use(express.static(__dirname + '/dist/appdemo'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

app.get('*', function(req,res) {
    
    res.sendFile(path.join(__dirname+'/dist/appdemo/index.html'));
    });


//rutas


//servidor activo
app.listen(app.get('port'), () => {
    console.log('Server en el puertoO', app.get('port'));
});