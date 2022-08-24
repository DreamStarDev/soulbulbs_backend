import express from 'express';
import DB from '../utils/DB.js';

let router = express.Router();

router.post('/checkDna', async function (req, res) {
    let [data, fields] = await DB.DBQuery('SELECT * FROM dna_list WHERE dna=?', req.body.dna);
    if (data.length == 0) {
        res.send({
            duplicated: false
        });
    } else {
        res.send({
            duplicated: true
        });
    }
});

router.post('/addDna', async function (req, res) {
    let [data, fields] = await DB.DBQuery('SELECT * FROM dna_list WHERE dna=?', req.body.dna);
    if (data.length == 0) {
        await DB.DBQuery('INSERT INTO `dna_list` (`dna`) VALUES(?)', req.body.dna);
        res.send({
            duplicated: false
        });
    } else {
        res.send({
            duplicated: true
        });
    }
});

router.get('/likes', async function (req, res) {
    let [data, fields] = await DB.DBQuery('SELECT * FROM `like_list`');
    res.send({
        likeCount: data
    })
});

router.post('/likes', async function (req, res) {
    await DB.DBQuery('UPDATE like_list SET count = ? WHERE ID = ?', [req.body.like, req.body.id]);
    res.send({
        success: true
    })
});

export default router;
