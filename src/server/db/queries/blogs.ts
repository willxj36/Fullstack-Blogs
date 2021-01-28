import { Query } from '../';

const all = () => Query('SELECT b.title, b.content, a.name as author, t.name as tag FROM blogs b JOIN authors a ON a.id = b.authorid JOIN blogtags bt ON bt.blogid = b.id JOIN tags t ON t.id = bt.tagid');

const one = (id: number) => Query('SELECT b.title, b.content, a.name, t.name FROM blogs b JOIN authors a ON a.id = b.authorid JOIN blogtags bt ON bt.blogid = b.id JOIN tags t ON t.id = bt.tagid WHERE b.id = ?', [id]);

const put = (title: string, content: string, tags: string, id: number) => {
    Query('UPDATE blogs SET title = ?, content = ?, tags = ? WHERE id = ?', [title, content, tags, id]);
}

const post = async (title: string, content: string, author: string, tags: string) => {
    let results = await Query('INSERT INTO blogs SET title = ?, content = ?, authorid = (SELECT id FROM authors WHERE name LIKE ?)', [title, content, author]);
    let resultParse = JSON.parse(JSON.stringify(results));
    Query('INSERT INTO blogtags SET blogid = ?, tagid = (SELECT id FROM tags WHERE name LIKE ?)', [resultParse.insertId, tags])
}

const deleter = (id: number) => Query('DELETE FROM blogs WHERE id = ?', [id]);

export default { all, one, put, post, deleter };