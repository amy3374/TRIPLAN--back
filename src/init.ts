import "dotenv/config";
import "./db"
import "./models/User"
import app from "./server";

const PORT = 8000;
const handleListening=()=>{
    console.log(`http://localhost:${PORT}`)
}

app.listen(PORT, handleListening);