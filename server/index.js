const express= require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'pantry'
})

const PORT = 8080;

app.use(cors)
app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.post('/api/insert', (req,res)=>{


    const itemName = req.body.itemName;
    const itemDescription = req.body.itemDescription;


    const sqlInsert = "INSERT INTO items (name, description) VALUES (?,?)"
    db.query(sqlInsert,[itemName, itemDescription], (err, result)=> {
        console.log(err)
    })
})

app.get('/',(req, res) =>{
    const sqlInsert = "INSERT INTO items (name, description) VALUES ('Rice','White Short Grain');"
    db.query(sqlInsert, (err, result)=>{
        res.send('hello world ')
        console.log(err)
    })
});


app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})