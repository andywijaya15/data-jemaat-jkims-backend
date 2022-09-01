import express from "express";
import Router from "./routes/pribadi.js";

const app = express();

app.use(Router);

const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});