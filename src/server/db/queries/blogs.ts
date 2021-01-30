import { Query } from '../';

const all = () => Query('SELECT b.id, b.title, b.content, a.name as author, t.name as tag, b._created FROM blogs b JOIN authors a ON a.id = b.authorid JOIN blogtags bt ON bt.blogid = b.id JOIN tags t ON t.id = bt.tagid ORDER BY id DESC');

const one = (id: number) => Query('SELECT b.title, b.content, a.name as author, t.name as tag, b._created, b._updated FROM blogs b JOIN authors a ON a.id = b.authorid JOIN blogtags bt ON bt.blogid = b.id JOIN tags t ON t.id = bt.tagid WHERE b.id = ?', [id]);

const put = (title: string, content: string, tags: string, id: number) => {
    Query('UPDATE blogs SET title = ?, content = ? WHERE id = ?', [title, content, id]);
    Query('UPDATE blogtags SET tagid = (SELECT id FROM tags WHERE name LIKE ?) WHERE blogid = ?', [tags, id]);
}

const post = async (title: string, content: string, author: string, tags: string) => {
    let results = await Query('INSERT INTO blogs SET title = ?, content = ?, authorid = (SELECT id FROM authors WHERE name LIKE ?)', [title, content, author]);
    let resultParsed = JSON.parse(JSON.stringify(results));
    Query('INSERT INTO blogtags SET blogid = ?, tagid = (SELECT id FROM tags WHERE name LIKE ?)', [resultParsed.insertId, tags])
    return resultParsed;
}

const deleter = (id: number) => {
    Query('DELETE FROM blogtags WHERE blogid = ?', [id]);
    Query('DELETE FROM blogs WHERE id = ?', [id]);
}

export default { all, one, put, post, deleter };