import { Query } from '../';

const get = () => Query('SELECT id, name FROM authors')

const post = (name: string, email: string) => Query('INSERT INTO authors SET name = ?, email = ?', [name, email]);

const put = (name: string, email: string, id: number) => Query('UPDATE authors SET name = ?, email = ? WHERE id = ?', [name, email, id]);

const deleter = (id: number) => Query('DELETE FROM authors WHERE id = ?', [id]);

export default { get, post, put, deleter };

//post, put, delete requests were going to be fancy features to do a little extra, but now will just be placeholders for after the auth section