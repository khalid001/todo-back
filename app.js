const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: '*'
}));

app.use(express.json())


let todoList = [{ task: 'pray fajr', isComplete: false },
{ task: 'pray zuhr', isComplete: false },
{ task: 'pray asr', isComplete: false }
]


app.get('/list', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send(todoList);
});

app.post('/update/list', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.setHeader("Access-Control-Allow-Origin", "*");
    todoList = req.body
    res.send(todoList)
});

app.listen(3001);


