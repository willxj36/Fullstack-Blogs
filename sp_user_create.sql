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
    