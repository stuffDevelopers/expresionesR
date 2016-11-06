var express = require('express');
  var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var querystring = require('querystring');
var pug = require('pug');
var port='8000';
mongoose.connect("mongodb://localhost/expresiones_R");
  //definamos el schema de nuestros campos obtenidos, es el eschema que se enviara a mongodb
 var datosSchema={
   title:String,
   conte:String
 };
var DataT=mongoose.model("DataT",datosSchema);

  app.set("view engine","pug");
  app.use(express.static("public"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.status(200);
    res.render("index");
  });

  io.on('connection',function(socket){
    console.log("Alguien se ha conectado");
  });

app.post("/",function(req,res){
  var er1= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var respuesta = er1.test(req.body.conte);
  var reString= respuesta.toString();
    if (respuesta==true){
      res.render("index");
      console.log(reString);
      }else if (respuesta==false) {
        res.render("index");
        console.log(reString);
    }
  });


//cambiamos app de expres por el Servidor html(server) que recibe a express de todos modos;
server.listen(port,function(){
  console.log('Servidor web iniciado en la direccion local: localhost:' +port);
});
