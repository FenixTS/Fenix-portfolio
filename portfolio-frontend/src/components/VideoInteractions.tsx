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
  useTheme,
  Tooltip,
  Menu,
  MenuItem,
  ListItemIcon,
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShareIcon from '@mui/icons-material/Share';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import { motion, AnimatePresence } from 'framer-motion';

interface Comment {
  id: number;
  user: string;
  text: string;
  timestamp: string;
}

const VideoInteractions = () => {
  const theme = useTheme();
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
  const [viewers, setViewers] = useState(0);
  const [totalViews, setTotalViews] = useState(1234);
  const [shareAnchorEl, setShareAnchorEl] = useState<null | HTMLElement>(null);

  // Simulate random viewer count updates
  useState(() => {
    const interval = setInterval(() => {
      setViewers(prev => prev + Math.floor(Math.random() * 3));
      if (Math.random() < 0.3) {
        setTotalViews(prev => prev + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };

  const handleDislike = () => {
    setDislikes((prev) => prev + 1);
  };

  const handleShareClick = (event: React.MouseEvent<HTMLElement>) => {
    setShareAnchorEl(event.currentTarget);
  };

  const handleShareClose = () => {
    setShareAnchorEl(null);
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = "Check out my portfolio!";
    
    switch (platform) {
      case 'copy':
        navigator.clipboard.writeText(url);
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text + ' ' + url)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'github':
        window.open('https://github.com/yourusername', '_blank');
        break;
    }
    handleShareClose();
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
    <Box sx={{ mt: 3 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 2,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconButton
              onClick={handleLike}
              sx={{
                color: likes > 0 ? theme.palette.primary.main : 'inherit',
                '&:hover': {
                  color: theme.palette.primary.main,
                },
              }}
            >
              <ThumbUpIcon />
            </IconButton>
          </motion.div>
          <Typography variant="body2" color="text.secondary">
            {likes}
          </Typography>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconButton
              onClick={handleDislike}
              sx={{
                color: dislikes > 0 ? theme.palette.error.main : 'inherit',
                '&:hover': {
                  color: theme.palette.error.main,
                },
              }}
            >
              <ThumbDownIcon />
            </IconButton>
          </motion.div>
          <Typography variant="body2" color="text.secondary">
            {dislikes}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Tooltip title="Current Viewers">
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: theme.palette.text.secondary,
                }}
              >
                <VisibilityIcon fontSize="small" />
                <Typography variant="body2">
                  {viewers.toLocaleString()} watching
                </Typography>
              </Box>
            </Tooltip>
            <Tooltip title="Total Views">
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  color: theme.palette.text.secondary,
                }}
              >
                <TrendingUpIcon fontSize="small" />
                <Typography variant="body2">
                  {totalViews.toLocaleString()} views
                </Typography>
              </Box>
            </Tooltip>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Tooltip title="Share">
                <IconButton
                  onClick={handleShareClick}
                  sx={{
                    color: theme.palette.text.secondary,
                    '&:hover': {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  <ShareIcon />
                </IconButton>
              </Tooltip>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Tooltip title="LinkedIn">
                <IconButton
                  onClick={() => handleShare('linkedin')}
                  sx={{
                    color: theme.palette.text.secondary,
                    '&:hover': {
                      color: '#0077B5',
                    },
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Tooltip>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Tooltip title="GitHub">
                <IconButton
                  onClick={() => handleShare('github')}
                  sx={{
                    color: theme.palette.text.secondary,
                    '&:hover': {
                      color: '#333',
                    },
                  }}
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            </motion.div>
          </Box>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              startIcon={
                <Badge badgeContent={comments.length} color="primary">
                  <CommentIcon />
                </Badge>
              }
              onClick={() => setShowComments(!showComments)}
              sx={{
                borderRadius: '20px',
                textTransform: 'none',
                px: 3,
                py: 1,
                boxShadow: theme.shadows[2],
                '&:hover': {
                  boxShadow: theme.shadows[4],
                },
              }}
            >
              {showComments ? 'Hide Comments' : 'Show Comments'}
            </Button>
          </motion.div>
        </Box>
      </Box>

      <Menu
        anchorEl={shareAnchorEl}
        open={Boolean(shareAnchorEl)}
        onClose={handleShareClose}
        PaperProps={{
          sx: {
            borderRadius: '12px',
            boxShadow: theme.shadows[3],
          },
        }}
      >
        <MenuItem onClick={() => handleShare('copy')}>
          <ListItemIcon>
            <ContentCopyIcon fontSize="small" />
          </ListItemIcon>
          Copy Link
        </MenuItem>
        <MenuItem onClick={() => handleShare('whatsapp')}>
          <ListItemIcon>
            <WhatsAppIcon fontSize="small" />
          </ListItemIcon>
          Share on WhatsApp
        </MenuItem>
        <MenuItem onClick={() => handleShare('twitter')}>
          <ListItemIcon>
            <TwitterIcon fontSize="small" />
          </ListItemIcon>
          Share on Twitter
        </MenuItem>
      </Menu>

      <AnimatePresence>
        {showComments && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Paper
              elevation={2}
              sx={{
                p: 2,
                mt: 2,
                maxHeight: '400px',
                overflow: 'auto',
                backgroundColor: theme.palette.background.default,
              }}
            >
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
                <IconButton
                  onClick={handleAddComment}
                  color="primary"
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    '&:hover': {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  }}
                >
                  <SendIcon />
                </IconButton>
              </Box>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {comments.map((comment) => (
                  <motion.div
                    key={comment.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <Avatar
                        sx={{
                          width: 32,
                          height: 32,
                          bgcolor: theme.palette.primary.main,
                        }}
                      >
                        {comment.user[0]}
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                            {comment.user}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {comment.timestamp}
                          </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ mt: 0.5 }}>
                          {comment.text}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default VideoInteractions; 