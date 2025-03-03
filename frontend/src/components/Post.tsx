import React from 'react';
import { IconButton, Divider } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import { AccountCircleOutlined } from '@mui/icons-material';

interface PostProps {
  post: {
    content: string;
    likes: number;
    comments: string[];
    liked: boolean;
  };
}

const Post: React.FC<PostProps> = ({ post }) => {
  const { content, likes, comments, liked } = post;

  return (
    <div className='my-3 max-w-[1000px] w-[95%] py-2.5 px-6 border border-gray-300 rounded-xl flex flex-col justify-between'>
      <div className='flex justify-between items-center'>
        <AccountCircleOutlined fontSize='large' className='text-gray-500' />
        <IconButton className='p-1'>
          <MoreHorizIcon />
        </IconButton>
      </div>
      <div className='flex-1 p-2 overflow-auto'>
        <p className='text-base'>{content}</p>
      </div>
      <Divider />
      <div className='flex justify-between items-center pt-1 px-[10%]'>
        <div className='flex items-center'>
          <IconButton>
            {liked ? <FavoriteIcon sx={{ color: 'red' }} /> : <FavoriteBorderIcon />}
          </IconButton>
          <span className='ml-1 text-lg w-6'>{likes > 0 ? likes : ''}</span>
        </div>
        <div className='flex items-center'>
          <IconButton>
            <CommentIcon />
          </IconButton>
          <span className='ml-1 text-lg w-6'>{comments.length > 0 ? comments.length : ''}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
