import React from 'react';
import Post from '../components/Post';

const Board: React.FC = () => {
  return (
    <div className="pt-5 px-[10%] flex justify-between flex-col items-center">
      <Post />
    </div>
  );
};

export default Board;
