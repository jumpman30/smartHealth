const { urlencoded } = require('express');
const express = require('express');

const dotenv = require('dotenv');
dotenv.config({path: '.env-local'})

const PORT = process.env.PORT || '3001';
const app = express();
const jwt = require('jsonwebtoken');



//Middleware
app.use(express.json());
app.use(urlencoded({extended:false}));

app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})

const userRouter = require('./routes/user');
const quizRouter = require('./routes/quiz');
const moodRouter = require('./routes/mood');
const journalRouter = require('./routes/journal');

app.use('/user', userRouter);
app.use('/quiz', quizRouter);
app.use('/mood', moodRouter);
app.use('/journal', journalRouter);



app.get('/', (req,res) => {
    //res.status(200).json({name: 'jumpman'})
    res.status(200).send('Hey man');
})