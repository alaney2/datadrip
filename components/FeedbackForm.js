import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Process form data here and send it to your backend
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedFeedback = feedback.trim();
  
    // Send form data to the API
    try {
      const response = await fetch('/api/submitFeedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          feedback: trimmedFeedback,
        }),
      });
  
      if (response.ok) {
        alert('Feedback submitted successfully');
        setName('');
        setEmail('');
        setFeedback('');
      } else {
        alert('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit feedback');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '400px', margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Feedback
      </Typography>

      <TextField
        fullWidth
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />

      <TextField
        fullWidth
        label="Input"
        multiline
        rows={4}
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        margin="normal"
      />

      <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '16px' }}>
        Submit
      </Button>
    </Box>
  );
};

export default FeedbackForm;
