
var socket = io.connect('http://localhost:8000',{'forceNew': true});
socket.on('messages',function(datas){
  console.log(datas);
  render(datas);
});

function render(datas){
  var html= datas.map(function(element,index) {
    return(` ${element.author}
             ${element.text}`);
  }).join(" ");
  document.getElementById('messages').innerHTML=html;
}

function addMessages(e){
  var message={
    author: document.getElementById('conte').value,
    text:   document.getElementById('texto').value
  };
  socket.emit('newMessage',message);
  return false;
}
