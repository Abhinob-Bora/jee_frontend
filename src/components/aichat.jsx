import React, { useState, useRef, useEffect } from 'react';
import { TextField, Button, Grid, Typography, Paper, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(3),
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    borderRadius: theme.spacing(1),
    backgroundColor: '#f8f8f8',
  },
  kela: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.main, // Customize color if needed
  },
  message: {
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  userMessage: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    textAlign: 'right',
  },
  llmMessage: {
    backgroundColor: '#f0f0f0',
    color: '#333',
    textAlign: 'left',
  },
}));

const Chat = () => {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messageEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setMessages([...messages, { text: inputValue, fromUser: true }]);
    setInputValue('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevents new line in the input field
      handleSubmit(e);
    }
  };

  return (
    <Grid container justify="center" style={{ marginTop: '50px' }}>
      <Grid item xs={10} md={6}>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h5" gutterBottom align="center" className={classes.kela}>
            Chat with LLM
          </Typography>
          <div style={{ overflowY: 'scroll', maxHeight: '300px', marginBottom: '20px' }}>
            {messages.map((message, index) => (
              <div key={index} className={`${classes.message} ${message.fromUser ? classes.userMessage : classes.llmMessage}`}>
                <Typography variant="body1">{message.text}</Typography>
              </div>
            ))}
            <div ref={messageEndRef} />
          </div>
          <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              label="Type a message"
              fullWidth
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown} // Add keydown event handler
              style={{ marginRight: '10px' }}
            />
            <Button type="submit" variant="contained" color="primary">
              Send
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Chat;
