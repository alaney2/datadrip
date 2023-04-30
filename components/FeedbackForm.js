import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation checks
    if (!name.trim() || !email.trim() || !feedback.trim()) {
      setFormMessage('All fields are required.');
      setIsSuccessMessage(false);
      return;
    }

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
        setFormMessage('Feedback submitted successfully');
        setIsSuccessMessage(true);
        setName('');
        setEmail('');
        setFeedback('');
      } else {
        setFormMessage('Failed to submit feedback');
        setIsSuccessMessage(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setFormMessage('Failed to submit feedback');
      setIsSuccessMessage(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '400px', margin: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Contact
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

      {formMessage && (
        <Typography
          variant="body1"
          sx={{ marginTop: '16px', color: isSuccessMessage ? 'success.main' : 'error.main' }}
        >
          {formMessage}
        </Typography>
      )}
    </Box>
  );
};

export default FeedbackForm;
