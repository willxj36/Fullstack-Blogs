import { Query } from '../';

const get = () => Query('SELECT name FROM tags');

const post = (name: string) => Query('INSERT INTO tags SET name = ?', [name]);

export default { get, post };