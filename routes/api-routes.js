var noteData = require('../data/noteData.json');
var fs = require('fs');
var path = require('path');


module.exports = function (app) {
    app.get('/api/notes', function (req, res) {
        res.json(noteData);
    });

    app.post('/api/notes', function (req, res) {
            noteData.push(req.body);
            res.json(true);

            fs.writeFile(path.join(__dirname, "../data/noteData.json"), JSON.stringify(noteData), function (err) {
                if (err) return console.log(err);
              });

        });
    app.delete('/api/notes/:id', function(req, res) {
            let ID = req.params.id;
            let noteFilter = noteData.filter(item => item.id !== ID);  
            fs.writeFile(path.join(__dirname, "../data/noteData.json"), JSON.stringify(noteFilter), function (err) {
                if (err) return console.log(err);
              });
    })

    // app.get('/api/notes/:id', function(req, res) {
    //     let ID = req.params.id;
    //     console.log(ID);
    //     editData = noteData.filter(item => item.id == ID); 
    //     let obj = JSON.parse(JSON.stringify(editData)); 
    //     console.log(obj[0]);

        // for (var i in noteData) {
        //     if (noteData[i].id == ID) {
        //        noteData[i].noteTitle = noteTitle;
        //        noteData[i].noteText = noteText;
        //        break; //Stop this loop, we found it!
        //     }
        //   }
        // noteData = noteData.filter(item => item.id == ID);    

        // fs.writeFile(path.join(__dirname, "../data/noteData.json"), JSON.stringify(noteData), function (err) {
        //     if (err) return console.log(err);
        //   });  
};