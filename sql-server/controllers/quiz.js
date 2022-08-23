const express = require('express');
const pool = require('../helpers/database');
const bcrypt = require('bcrypt');
const { get } = require('express/lib/response');

exports.getQuiz = async (req, res, next) => {

    try {   
        const sqlQuery = 'select question from question where id_quiz = (select id from quiz where code = ?)';
        const rows = await pool.query(sqlQuery, req.params.code);
        res.status(200).json({rows});

    } catch(err){
        res.status(400).send(err.message);
    }
}

exports.postSave = async (req, res, next) => {

    try {   
        
        const {answers, email, quizCode, resultQuiz} = req.body;
        console.log("EMAIL: " + email);
        const getUserIdQuery = 'select id from user where email = ?';
        const rowUser = await pool.query(getUserIdQuery, email);
        const userId = rowUser[0].id;
        console.log("USER: " + userId);
        const getQuizIdQuery = 'select id from quiz where code = ?';
        const rowQuiz = await pool.query(getQuizIdQuery, quizCode);
        const quizId = rowQuiz[0].id;

        const insertUserQuizQuery = 'insert into userQuiz (id_user, id_quiz, result) values (?,?,?)';
        const resultUserQuiz = await pool.query(insertUserQuizQuery, [userId, quizId, resultQuiz]);
        const userQuizId = Number(resultUserQuiz.insertId);

        answers.forEach( (element, index) => {

          (async () => {
                    
                    const questionNum = index + 1;
                    const answer = element;
                    const getQuestionIdQuery = 'select id from question where question_number = ? and id_quiz = ?';
                    const result = await pool.query(getQuestionIdQuery, [questionNum, quizId]);
                    const questionId = result[0].id;
                    
                    const sqlQuery =
        "INSERT INTO answer (answer,id_question,id_user_quiz) VALUES (?,?,?)";

      const res = await pool.query(sqlQuery, [
        answer,
        questionId,
        userQuizId,
      ]);

                  })();
                }

        
              
);
        
         
        res.status(200).json({userQuizId: userQuizId});

    } catch(err){
        console.log(err);
        res.status(400).send(err.message);
    }
}

async function getIdQuestionByIdQuizQuestionN(data) {
    const sqlQuery =
      "SELECT id_question FROM question WHERE id_quiz=? and question_number=?";
    const row = await pool.query(sqlQuery, [
      data.question.id_quiz,
      data.question.question_number,
    ]);
    return row;
  }