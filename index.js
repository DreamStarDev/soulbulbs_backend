import express from 'express';
import cors from 'cors';

import router from './apis/apis.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', router);

// start server
app.listen(PORT, () => console.log(`Soulbulbs : Server started on port ${PORT}`));