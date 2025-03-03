import React from 'react';
import { IconButton, Divider } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import { AccountCircleOutlined } from '@mui/icons-material';

const Post: React.FC = () => {
  return (
    <div className='my-3 max-w-[1000px] w-[95%] p-[10px] border border-gray-300 rounded-lg flex flex-col justify-between'>
      <div className='flex justify-between items-center'>
        <AccountCircleOutlined fontSize='large' className='text-gray-500' />
        <IconButton className='p-1'>
          <MoreHorizIcon />
        </IconButton>
      </div>
      <div className='flex-1 p-2 overflow-auto'>
        {/* Post content goes here */}
        <p className='text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
        </p>
      </div>
      <Divider />
      <div className='flex justify-between items-center pt-1 px-[10%]'>
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton>
          <CommentIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Post;
