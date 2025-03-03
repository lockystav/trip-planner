import React from 'react';
import Post from '../components/Post';
import { posts } from '../data/posts';

const Board: React.FC = () => {
  return (
    <div className="pt-5 px-[5%] flex justify-between flex-col items-center">
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Board;
