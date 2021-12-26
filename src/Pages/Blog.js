import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import '../Styles/app.css';

const Blog = () => {

    const [items, updateItems] = useState([]);
    // const [isLoaded, updateIsLoaded] = useState(false);

    useEffect(() => {
        fetch('https://demo.phlox.pro/corporate-pro//wp-json/wp/v2/posts?_embed')
            .then(res => res.json())
            .then(result => {
                // updateIsLoaded(true);
                updateItems(result);
            });
    });

    const Size = (item) => {
        const Optimized_featured_image = item._embedded['wp:featuredmedia'][0].source_url
    }


    // if (!isLoaded) {
    //     return <div>Loading ... </div>;
    // } else {
        return (
            <div>
                <h1 className='blog'>Blog</h1>
                <ul>
                    {items.map(item => (
                        <li key={item.id} className='list'>
                            {console.log(item._embedded['wp:featuredmedia'][0].source_url)}
                            <img src={item._embedded['wp:featuredmedia'][0].source_url} width="505" height="350"/>
                            <div className='entry-main'>
                                {/*<div className='title'>{item.title.rendered}</div>*/}
                                <Link dangerouslySetInnerHTML={{__html: item.title.rendered}} className='title' to={`article/${item.id}`}></Link>
                            </div>
                            {/*<p>{item.content.rendered.substr(1,100) + "..."}</p>*/}

                        </li>
                    ))}
                </ul>
            </div>
        );
    }
// }

export default Blog;