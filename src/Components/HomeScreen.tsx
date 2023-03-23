import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './HomeScreen.css'
interface Post {
  objectID: string;
  title: string;
  url: string;
  created_at: string;
  author: string;
}

const HomeScreen: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const navigation=useNavigate()
  const fetchPosts = async () => {
    const response = await axios.get('https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0');
    setPosts(response.data.hits);
  };
  useEffect(() => {
    const intervalId = setInterval(fetchPosts, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const renderItem = ({ item }: { item: Post }) => (
    <div className="item">
      <h2 className="title">{item.title}</h2>
      <p className="url">{item.url}</p>
      <p className="author">{item.author}</p>
      <p className="created_at">{item.created_at}</p>
    </div>
  );

  return (
    <div className="container">
      {posts.map((item) => (
        <div key={item.objectID} onClick={() => navigation('/DetailScreen',{state:{ json: item }})}>
          {renderItem({ item })}
        </div>
      ))}
    </div>
  );
};

export default HomeScreen;
