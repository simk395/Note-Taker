var path = require("path");
var noteData = require('../data/noteData.json');

module.exports = function(app){
  app.get("/newnote",function(req, res){
    res.sendFile(path.join(__dirname, "../public/newnote.html"));
  })

  app.get("/pastnotes",function(req, res){
    res.render('pastnotes',{noteData: noteData});
  });

  app.get("*",function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
  })
}