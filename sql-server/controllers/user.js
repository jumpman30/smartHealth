const express = require('express');
const pool = require('../helpers/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.getUser = async (req, res, next) => {
    
    try {   
        
        const sqlQuery = 'select email from user where id=?';
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json({rows});

    } catch(err){
        res.status(400).send(err.message);
    }
}

exports.getInfo = async (req, res, next) => {
    
         res.status(200).json({auth: true});


}

exports.getGeneral = (req, res, next) => {
    res.send("Hello World")
}

exports.postRegister = async (req, res, next) => {


    try {   
        
        const {first_name, last_name, age, gender,email, password} = req.body;
        console.log(email);
        const encryptedPassword = await bcrypt.hash(password, 10);
        const sqlQuery = 'insert into user (first_name, last_name, age, gender, email, password) values(?,?,?,?,?,?)';
        const result = await pool.query(sqlQuery, [first_name,last_name,age,gender,email,encryptedPassword]);
        const insertedId = Number(result.insertId);
        const token = jwt.sign({userId: 'test'}, process.env.JWT_SECRET, {expiresIn: '300s'})
        res.status(200).json({id: insertedId, token: token});

    } catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }

}

exports.postLogin = async (req, res, next) => {
    

    try{

        const {email,password} = req.body;
        console.log(email);
        const sqlGetUser = 'select * from user where email=?';
        const rows = await pool.query(sqlGetUser, email);
        
        if(rows.length > 0){
            const isValid = await bcrypt.compare(password, rows[0].password);
            
            if(!isValid)
                res.status(400).send('User was not found/Wrong credentials');
            
            else{

                const id = rows[0].id;
                const token = jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: 600})

                res.status(200).json({valid: isValid, token: token});
            }
            
        } else {
            res.status(400).send('User was not found/Wrong credentials');
        }


    } catch(err){
        res.status(400).send(err.message);
    }
}