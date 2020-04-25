var path = require("path");


module.exports = function(app){
  app.get("/newnote",function(req, res){
    res.sendFile(path.join(__dirname, "../public/newnote.html"));
  })

  // app.get("/editnote",function(req, res){
  //   res.render('editnote',{editData: editData});
  // })


  app.get("/pastnotes",function(req, res){
    let noteData = require('../data/noteData.json');
    res.render('pastnotes',{noteData: noteData});
  });

  app.get("*",function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
  })
}