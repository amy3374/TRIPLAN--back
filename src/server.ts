import express from "express";
import cors from 'cors';
import rootRouter from "./routers/rootRouter";

// const path = require('path');
const app = express();

app.use(express.json())
app.use(cors());

app.use("/",rootRouter)
// app.use(express.static(path.join(__dirname, 'triplan-front/build')));
// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '/triplan-front/build/index.html'));
//   });
// app.get('*', function (req, res) {
//   res.sendFile(path.join(__dirname, '/triplan-front/build/index.html'));
// });




export default app;
