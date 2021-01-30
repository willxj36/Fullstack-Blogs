import * as express from 'express';
import db from '../db';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let authors = await db.Authors.get();
        res.send(authors);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.post('/', (req, res) => {
    try {
        let { name, email } = req.body;
        db.Authors.post(name, email);
        res.send('Author added!')
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.put('/:id', (req, res) => {
    try {
        let { name, email } = req.body;
        let id = Number(req.params.id);
        db.Authors.put(name, email, id);
        res.send('Author edited!')
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.delete('/:id', (req, res) => {
    try {
        let id = Number(req.params.id);
        db.Authors.deleter(id);
        res.send('Author removed!')
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

export default router;