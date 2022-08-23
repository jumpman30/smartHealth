const { Router } = require('express');
const express = require('express');
const { verify } = require('jsonwebtoken');
const router = express.Router();
const userController = require('../controllers/user');
const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {

    const token = req.headers["x-access-token"];
     if(!token){
        res.status(200).json({auth: false, message: 'No token'})
    }
    else{

        jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
            if(err){
                res.status(200).json({auth: false, message: 'Token expired'})
            } else{
                req.payload = payload;
                next();
            }
        })
    }

}

router.get('/info', verifyJWT, userController.getInfo);


router.get('/:id', userController.getUser)

router.get('/', userController.getGeneral)

router.post('/register', userController.postRegister)

router.post('/login', userController.postLogin)





module.exports = router;
