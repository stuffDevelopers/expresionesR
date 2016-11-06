
var data={
  title: req.body.conte,
  conte:"Jhovany-Keywords"
}
var dataT=new DataT(data);
  dataT.save(function(err){
  console.log(dataT);
});
