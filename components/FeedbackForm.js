import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [isSuccessMessage, setIsSuccessMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !feedback.trim()) {
      setFormMessage('All fields are required.');
      setIsSuccessMessage(false);
      return;
    }

    setIsLoading(true);

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedFeedback = feedback.trim();
  
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
        setFormMessage('Response submitted successfully!');
        setIsSuccessMessage(true);
        setName('');
        setEmail('');
        setFeedback('');
      } else {
        setFormMessage('Failed to submit response');
        setIsSuccessMessage(false);
      }
    } catch (error) {
      console.error('Error:', error);
      setFormMessage('Failed to submit response');
      setIsSuccessMessage(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '400px', margin: 'auto' }}>
      <Typography 
        variant="h4" 
        gutterBottom
        sx={{ margin: '8px ' }}
      >
        Contact
      </Typography>

      <TextField
        fullWidth
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        margin="normal"
        sx={{ margin: '8px ' }}
      />

      <TextField
        fullWidth
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
        sx={{ margin: '8px ' }}
      />

      <TextField
        fullWidth
        label="Input"
        multiline
        rows={4}
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        margin="normal"
        sx={{ margin: '8px ' }}

      />

      <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '16px', marginLeft: '8px' }} disabled={isLoading}>
        {isLoading ? <CircularProgress size={24} /> : 'Submit'}
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
