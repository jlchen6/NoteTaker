const fs = require("fs");
const path = require("path");

var data = require("../db/db.json");
var dbPath = path.join(__dirname, '../db/db.json');

function readNotes() {
    return data;
}

function saveNotes(note) {
    note.id = data.length;
    data.push(note);
    fs.writeFile(dbPath, JSON.stringify(data), error => {
        if(error){
            throw error;
        }
    });

}

function deleteNote(id) {
    data.splice(id, 1);
    for (let i = 0; i < data.length; i++) {
        data[i].id = i;
    }
    fs.writeFile(dbPath, JSON.stringify(data), error => {
        if(error){
            throw error;
        }
    })
}

function clearNotes() {
    var clearedNotes = [];
    fs.writeFile(dbPath, JSON.stringify(clearedNotes), error => {
        if(error){
            throw error;
        }
    })
}

module.exports = {
    readNotes,
    saveNotes,
    clearNotes,
    deleteNote
}