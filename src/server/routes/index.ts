import * as express from 'express';
import blogRouter from './blogs';
import authorRouter from './authors';
import tagRouter from './tags';
import blogTagRouter from './blogtags';

const router = express.Router();

router.use('/blogs', blogRouter);
router.use('/authors', authorRouter);
router.use('/tags', tagRouter);
router.use('/blogtags', blogTagRouter);

export default router;