import fs from "fs/promises";
import express from "express";
import { heroesRouter } from "./src/modules/heroesRouter.js";

const server = express();
const port = process.env.PORT || 3000;

server.get('/', (req, res) => {
    res.send('Hello World!, /heroes should lead you to the hero list');
});

server.use('/heroes', heroesRouter);

server.listen(port, () => {
    console.log('Server started on port', port);
});
