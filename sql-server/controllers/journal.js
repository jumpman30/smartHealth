const express = require('express');
const pool = require('../helpers/database');
const bcrypt = require('bcrypt');
const { get } = require('express/lib/response');


exports.postSave = async (req, res, next) => {

    try{
        
        const {email, note} =req.body;

        const getUserIdQuery = 'select id from user where email = ?';
        const rowUser = await pool.query(getUserIdQuery, email);
        const userId = rowUser[0].id;
        console.log("USER: " + userId);

        const insertNote = 'insert into journal (note, user_id, active) values(?, ?, ?);';
        const resultInsertNote = await pool.query(insertNote, [note, userId, true]);
        const resultId = Number(resultInsertNote.insertId);

        res.status(200).json({insertedId: resultId});

    } catch(err){ 
        console.log(err);
        res.status(400).send(err.message);
    }

}

exports.getNotes = async (req, res, next) => {

    try {   

        const email = req.query.email;
        const getUserIdQuery = 'select id from user where email = ?';
        const rowUser = await pool.query(getUserIdQuery, email);
        const userId = rowUser[0].id;
        console.log('arrive');

        const sqlQuery = 'select note, created_at from journal where user_id = ?';
        const rows = await pool.query(sqlQuery, userId);
        res.status(200).json({rows});

    } catch(err){
        res.status(400).send(err.message);
    }


}


exports.deactivateNote = async (req, res, next) => {

    try{
        
        const {note, email} = req.body;
        const sqlQuery = 'delete from journal where note = ?';
        const result = await pool.query(sqlQuery, note.note);
        res.status(200).send('success')
    
    }catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }



}
