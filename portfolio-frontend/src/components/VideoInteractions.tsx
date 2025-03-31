import { useState } from 'react';
import {
  Box,
  IconButton,
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Badge,
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import { motion, AnimatePresence } from 'framer-motion';

interface Comment {
  id: number;
  user: string;
  text: string;
  timestamp: string;
}

const VideoInteractions = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      user: 'John Doe',
      text: 'Great introduction! Very professional.',
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      user: 'Jane Smith',
      text: 'Your experience is impressive!',
      timestamp: '1 day ago',
    },
  ]);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  const handleDislike = () => {
    setDislikes((prev) => prev + 1);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        user: 'Current User',
        text: newComment,
        timestamp: 'Just now',
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  return (
    <Box sx={{ mt: 2 }}>
      {/* Like/Dislike Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        <IconButton onClick={handleLike} color="primary">
          <ThumbUpIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {likes}
        </Typography>
        <IconButton onClick={handleDislike} color="error">
          <ThumbDownIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary">
          {dislikes}
        </Typography>
        <motion.div
          style={{ marginLeft: 'auto' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={
              <Badge badgeContent={comments.length} color="secondary">
                <CommentIcon />
              </Badge>
            }
            onClick={() => setShowComments(!showComments)}
            sx={{
              borderRadius: '25px',
              px: 3,
              py: 1,
              textTransform: 'none',
              fontWeight: 'bold',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              '&:hover': {
                boxShadow: '0 6px 8px rgba(0,0,0,0.2)',
              },
            }}
          >
            {showComments ? 'Hide Comments' : 'Show Comments'}
          </Button>
        </motion.div>
      </Box>

      {/* Comments Section */}
      <AnimatePresence>
        {showComments && (
          <motion.div
            initial={{ opacity: 0, y: 20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: 20, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Paper 
              sx={{ 
                p: 2,
                mt: 2,
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                '&:hover': {
                  boxShadow: '0 6px 8px rgba(0,0,0,0.2)',
                },
              }}
            >
              {/* Comment Input */}
              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '20px',
                    },
                  }}
                />
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={handleAddComment}
                    disabled={!newComment.trim()}
                    sx={{
                      borderRadius: '20px',
                      px: 3,
                      textTransform: 'none',
                      fontWeight: 'bold',
                    }}
                  >
                    Send
                  </Button>
                </motion.div>
              </Box>

              <Divider sx={{ my: 2 }} />

              {/* Comments List */}
              <List>
                {comments.map((comment) => (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: 'primary.main' }}>
                          {comment.user[0]}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                              {comment.user}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {comment.timestamp}
                            </Typography>
                          </Box>
                        }
                        secondary={
                          <Typography
                            variant="body2"
                            color="text.primary"
                            sx={{ mt: 1 }}
                          >
                            {comment.text}
                          </Typography>
                        }
                      />
                    </ListItem>
                  </motion.div>
                ))}
              </List>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default VideoInteractions; 