import express from "express";
import cors from 'cors';
import session from "express-session"
import rootRouter from "./routers/rootRouter";

// const path = require('path');
const app = express();

app.use(express.json())
app.use(cors());

app.use(session({
    secret:"Hello",
    resave:false,
    saveUninitialized:true,
    
}));

// app.use((req,res,next)=>{
//     console.log(res)
//     //  req.sessionStore.all((error,sessions)=>{
//     //     console.log(sessions)
//     //     next();
//     // })
// })
app.use("/",rootRouter);
// app.use(express.static(path.join(__dirname, 'triplan-front/build')));
// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '/triplan-front/build/index.html'));
//   });
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '/triplan-front/build/index.html'));
// });



export default app;
