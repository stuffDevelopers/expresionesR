
var socket = io.connect('http://localhost:8000',{'forceNew': true});
socket.on('messajes',function(datas){
  console.log(datas);
});
