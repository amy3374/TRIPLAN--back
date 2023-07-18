import express from "express";
import cors from 'cors';
import session from "express-session"
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";

const app = express();

app.use(express.json())
app.use(cors());

app.use(session({
    secret: `${process.env.COOKIE_SECRET}`,
    resave:false,
    saveUninitialized:false,
    store: MongoStore.create({ mongoUrl:`${process.env.DB_URL}`}),   
}
));


app.use("/",rootRouter);




export default app;
