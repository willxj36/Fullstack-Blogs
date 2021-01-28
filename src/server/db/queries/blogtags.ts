import { Query } from '../index';

const get = (id: number) => Query('CALL spBlogTags (?)', [id]);

export default { get };