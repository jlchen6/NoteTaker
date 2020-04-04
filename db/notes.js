// import required libraries
const fs = require("fs");
const path = require("path");

// data contains the json stored in the db.json file
var data = require("../db/db.json");
// Store the path to the json file in a variable for easy use later
var dbPath = path.join(__dirname, '../db/db.json');

// Function that just returns the json
function readNotes() {
    return data;
}

// Function that saves the given note to the json file
function saveNotes(note) {
    // Set the note's id to the length of the array
    note.id = data.length;
    // push the note onto the current json array
    data.push(note);
    // write the updated array to the json file
    fs.writeFile(dbPath, JSON.stringify(data), error => {
        if(error){
            throw error;
        }
    });

}

// Function that deletes the note with the given id from the json file
function deleteNote(id) {
    // remove the note at index: id from the json array
    data.splice(id, 1);
    // Update the ids for every other note to match their updated position in the array
    for (let i = 0; i < data.length; i++) {
        data[i].id = i;
    }
    // Write the updated array to the json file
    fs.writeFile(dbPath, JSON.stringify(data), error => {
        if(error){
            throw error;
        }
    })
}

// Put all the functions to be exported into the module.exports.
module.exports = {
    readNotes,
    saveNotes,
    deleteNote
}