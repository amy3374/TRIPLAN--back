import mongoose from "mongoose";

console.log(process.env.COOKIE_SECRET, process.env.DB_URL);
mongoose.connect(`${process.env.DB_URL}`)


const db = mongoose.connection;

const handleOpen = ()=> console.log("✅Connected DB");
const handleError =()=> console.log("❌DB Error")
db.on("error",handleError);
db.once("open", handleOpen)