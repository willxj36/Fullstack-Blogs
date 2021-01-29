import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import apiService from '../../utils/apiService';
import * as dayjs from 'dayjs';


const FullBlog = () => {
    
    const { id } = useParams<{id: string}>();
    const [blog, setBlog] = useState<Blog>({
        id: null,
        title: null,
        content: null,
        author: null,
        _created: null
    });
    const [date, setDate] = useState<any>();

    useEffect(() => {
        (async() => {
            const url = `http://localhost:3000/api/blogs/${id}`;
            let blog= await apiService(url);
            setBlog(blog[0]);
        })()
    }, [id]);

    useEffect(() => {
        let date = dayjs(`${blog._created}`).format('MMM DD, YYYY');
        setDate(date);
    }, [blog]);

    return (
        <div className="container p-5 col-12">
            <div className="row">
                <img src="/space-stock.jpg" alt="Header image" className="col-5 mb-5 display-inline img-responsive"/>
                <Link to={`/blogs/${id}/edit`} className="display-inline btn btn-secondary align-self-start ml-auto">Edit Blog</Link>
            </div>
            <h1>{blog.title}</h1>
            <h4 className="font-italic my-3">By {blog.author}</h4>
            <h4 className="text-muted my-3">{date}</h4>
            <p className="mt-3">{blog.content}</p>
        </div>
    )
}

export default FullBlog;

interface Blog {
    id?: number,
    title: string,
    content: string,
    author: string,
    _created?: string
}