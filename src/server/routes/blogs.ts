import * as express from 'express';
import db from '../db';

const router = express.Router();

router.get('/:id?', async (req, res) => {
    try {
        let id = Number(req.params.id);
        let blog = id ? db.Blogs.one(id) : db.Blogs.all();
        res.send(blog);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/', async (req, res) => {
    try {
        let {title, content, author} = req.body;
        db.Blogs.post(title, content, author);
        res.send('Blog posted successfully!');
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.put('/:id', async (req, res) => {
    try {
        let {title, content, author} = req.body;
        let id = Number(req.params.id);
        db.Blogs.put(title, content, author, id);
        res.send('Blog updated successfully!');
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        let id = Number(req.params.id);
        db.Blogs.deleter(id);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
})

export default router;