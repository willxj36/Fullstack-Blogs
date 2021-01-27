import Connection from './config';
import Blogs from './queries/blogs';
import Authors from './queries/authors';
import Tags from './queries/tags';
import BlogTags from './queries/blogtags';

export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            err ? reject(err) : resolve(results);
        })
    })
};

export default {
    Blogs,
    Authors,
    Tags,
    BlogTags
}