var io= require("./app.js");
var socket = io.connection('http://localhost:8000',{'forceNew': true});
socket.on('messajes',function(datas){
  console.log(datas);
});
