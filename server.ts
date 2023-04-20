import express from "express";

const PORT = 8080;

const app = express();

const handleListening=()=>{
    console.log(`http://localhost${PORT}`)
}

app.listen(PORT, handleListening);
