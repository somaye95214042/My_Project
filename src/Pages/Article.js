import React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/app.css'


const Article = () => {

    const {id} = useParams();
    const [article, updateArticle] = useState({});

    useEffect(() => {
        fetch(`https://demo.phlox.pro/corporate-pro/wp-json/wp/v2/posts/${id}?_embed`)
            .then(res => res.json())
            .then(result => {
                updateArticle(result);
            });
    });

    if (Object.keys(article).length === 0 ) {
        return <div>Loading ... </div>;
    } else {
        return (
            <div className='featured_image'>
                <img src={article._embedded['wp:featuredmedia'][0].source_url} alt={''} width="768" height="505"/>
                <h1 dangerouslySetInnerHTML={{__html: article.title.rendered}} className='article_title'></h1>
                <p dangerouslySetInnerHTML={{__html: article.content.rendered}} className='article_content'></p>

            </div>
        )
    }
}

export default Article;