const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: process.env.DB_PASSWORD,
    database:"feedback_db"
});
db.connect((err)=>{
    if(err){
        console.log("Coonection failed",err);
    }
    else{
        console.log("Connected succesfully");
    }
});

const app = express();
const PORT = 3000;

// middleware (important)
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
    res.send("Server is running");
});

// start server
app.listen(PORT, () => {
    console.log("Server running on port 3000");
});

app.post("/submit", (req, res) => {
    const {name, email,feedback,rating} = req.body;
    const query = "INSERT INTO feedback(cust_name,email,feedback,ratings) VALUES(?,?,?,?)";
    db.query(query,[name,email,feedback,rating],(err,result)=>{
        if(err){
            console.log("Error inserting data",err);
        }
        else{
            console.log("Data inserted successfully");
        } });
    console.log(req.body); // data from frontend
    res.send("Data received successfully");
});

app.get("/feedbacks", (req, res) => {
    const query = "SELECT * FROM feedback";

    db.query(query, (err, result) => {
        if (err) {
            console.log(err);
            res.send("Error fetching data");
        } else {
            res.json(result);
        }
    });
});