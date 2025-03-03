import React from 'react';
import { Avatar, IconButton, Divider } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';

const Post: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Avatar style={styles.avatar} />
        <IconButton style={styles.settingsButton}>
          <MoreHorizIcon />
        </IconButton>
      </div>
      <div style={styles.content}>
        {/* Post content goes here */}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
        </p>
      </div>
      <Divider />
      <div style={styles.footer}>
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

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: '95%',
    maxWidth: '1000px',
    margin: '10px auto',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: '35px',
    height: '35px',
  },
  settingsButton: {
    padding: '5px',
  },
  content: {
    flex: 1,
    padding: '10px',
    overflow: 'auto',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '5px',
	paddingInline: '10%',
  },
};

export default Post;
