
var data={
  title: req.body.conte,
  conte:"Jhovany-Keywords"
}
var dataT=new DataT(data);
  dataT.save(function(err){
  console.log(dataT);
});
form(method="POST" action="/" style="margin-top:1.5em") // form original del method POST en pug

/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(resp)


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



  `<div>
               <strong>${element.author}</strong>:
               <em>${element.text}</em>
             </div>`);
//plantilla para la impresion en html5
