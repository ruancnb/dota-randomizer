import express from "express";
import { heroesRouter } from "./src/modules/heroesRouter.js";

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!, /heroes should lead you to the hero list');
});
app.use('/static', express.static('public'))
app.use('/heroes', heroesRouter);

app.listen(port, () => {
    console.log('Server started on port', port);
});
