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
            console.log(ID);
            noteData = noteData.filter(item => item.id !== ID);    
            fs.writeFile(path.join(__dirname, "../data/noteData.json"), JSON.stringify(noteData), function (err) {
                if (err) return console.log(err);
              });
    })

    
};