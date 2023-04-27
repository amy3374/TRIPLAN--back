import "./db"
import "./models/User"
import app from "./server";

const PORT = 8080;
const handleListening=()=>{
    console.log(`http://localhost${PORT}`)
}

app.listen(PORT, handleListening);