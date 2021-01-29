CREATE PROCEDURE spBlogTags
	(blogid INT)
    SELECT
		t.name
	FROM BlogTags bt
    JOIN Tags t ON t.id = bt.tagid
    WHERE bt.blogid = blogid;
    
CREATE USER
	'blogapp'@'localhost'
IDENTIFIED BY 'password123';

GRANT ALL ON blogs.* TO 'blogapp'@'localhost';

ALTER USER 'blogapp'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password123';
    
SELECT * FROM tags;
SELECT * FROM authors;
SELECT * FROM blogs;

DELETE FROM blogs WHERE id > 0;
DELETE FROM blogtags WHERE blogid > 0;
SELECT * FROM blogtags;

SELECT b.title, b.content, a.name, t.name FROM blogs b JOIN authors a ON a.id = b.authorid JOIN blogtags bt ON bt.blogid = b.id JOIN tags t ON t.id = bt.tagid;