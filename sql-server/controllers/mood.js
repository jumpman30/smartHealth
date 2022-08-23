const express = require('express');
const pool = require('../helpers/database');
const bcrypt = require('bcrypt');
const { get } = require('express/lib/response');

exports.postSave = async (req, res, next) => {

    try{

        const {social, health, sleep, mood, note, email} = req.body;
        console.log(email);
        const getUserIdQuery = 'select id from user where email = ?';
        const rowUser = await pool.query(getUserIdQuery, email);
        const userId = rowUser[0].id;

        const sqlQuery = 'insert into dailyMood(social, health, sleep, overall_mood,note,id_user) values (?,?,?,?,?,?)';
        const result = await pool.query(sqlQuery, [social, health, sleep, mood, note, userId]);
        const insertedId = Number(result.insertId);
        res.status(200).json({id: insertedId});


    } catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }











}