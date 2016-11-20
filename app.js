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
                                    var  resp=req.body.conte;
                                    //console.log(resp);

                                switch (true) {
                                  case (/^[\w+\.\-]+@[a-zA-z]+.([a-zA-z]{2,3})$/.test(resp)):
                                        console.log(req.body.conte,': usted ingreso un email');
                                        res.render("index");
                                    break;
                                  case (/^((961){1,1})([0-9]{7,7})$/.test(resp)):
                                        console.log(req.body.conte,': usted ingreso un numero de tuxtla');
                                        res.render("index");
                                    break;
                                    case (/^[0-9]+$/.test(resp)):
                                          res.render("index");
                                          console.log(req.body.conte,': usted ingreso numeros');
                                      break;
                                  case (/^-?[0-9]+([,\.][0-9]*)?$/.test(resp)):
                                        console.log(req.body.conte,': usted ingleso numeros decimales');
                                        res.render("index");
                                    break;
                                  case (/(http)*([a-zA-z]+)([,\.][0-9]*[a-zA-z]+[,\.])([a-zA-z]{2,3})/.test(resp)):
                                        console.log(req.body.conte,': usted ingleso una pagina web wwww');
                                        res.render("index");
                                    break;
                                  case (/(function)$/.test(resp)):
                                        console.log(req.body.conte,': ingreso una function');
                                        res.render("index");
                                    break;
                                  case (/^[a-zA-Z]+$/.test(resp)):
                                        res.render("index");
                                        console.log(req.body.conte,': usted ingreso una cadena de letras');
                                    break;

                                  default:
                                        res.render("index");
                                        console.log(req.body.conte,': usted ingreso caracteres no validos');
                                }
  });


//cambiamos app de expres por el Servidor html(server) que recibe a express de todos modos;
server.listen(port,function(){
  console.log('Servidor web iniciado en la direccion local: localhost:' +port);
});
