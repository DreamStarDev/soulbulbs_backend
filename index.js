import express from 'express';
import cors from 'cors';

import router from './apis/apis.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    next();
});

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', router);

// start server
app.listen(PORT, () => console.log(`Soulbulbs : Server started on port ${PORT}`));