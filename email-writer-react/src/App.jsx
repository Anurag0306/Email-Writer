import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  CircularProgress,
  Card,
  CardContent
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SendIcon from '@mui/icons-material/Send';
import './App.css';
import axios from 'axios';

function App() {
  const [emailContent, setEmailContent] = useState('');
  const [tone, setTone] = useState('');
  const [generatedReply, setGeneratedReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post("http://localhost:8080/api/email/generate", {
        emailContent,
        tone
      });
      setGeneratedReply(
        typeof response.data === 'string'
          ? response.data
          : JSON.stringify(response.data)
      );
    } catch (error) {
      setError('An error occurred while generating the reply. Please try again later.');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#f5f5f5', // Light background shade
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      }}
    >
      <Container maxWidth="md">
        <Card
          sx={{
            p: 2,
            borderRadius: 3,
            boxShadow: 3,
            backgroundColor: '#ffffff',
            width: '100%'
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              align="center"
              sx={{ fontWeight: 'bold', color: '#333333' }}
            >
              Email Reply Generator
            </Typography>
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                multiline
                rows={6}
                variant="outlined"
                label="Original Email Content"
                value={emailContent || ''}
                onChange={(e) => setEmailContent(e.target.value)}
                sx={{
                  mb: 2,
                  backgroundColor: '#fafafa',
                  borderRadius: 2,
                  '& .MuiInputBase-input': { color: '#333333' },
                  '& .MuiInputLabel-root': { color: '#666666' }
                }}
              />
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel sx={{ color: '#666666' }}>Tone (Optional)</InputLabel>
                <Select
                  label="Tone (Optional)"
                  value={tone || ''}
                  onChange={(e) => setTone(e.target.value)}
                  sx={{
                    backgroundColor: '#fafafa',
                    borderRadius: 2,
                    color: '#333333'
                  }}
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value="friendly">Friendly</MenuItem>
                  <MenuItem value="professional">Professional</MenuItem>
                  <MenuItem value="casual">Casual</MenuItem>
                </Select>
              </FormControl>
              <Button
                variant="contained"
                onClick={handleSubmit}
                disabled={!emailContent || loading}
                fullWidth
                startIcon={loading ? <CircularProgress size={24} /> : <SendIcon />}
                sx={{
                  py: 1.5,
                  fontSize: '1rem',
                  borderRadius: 2,
                  backgroundColor: '#1976d2',
                  '&:hover': { backgroundColor: '#115293' }
                }}
              >
                {loading ? 'Generating...' : 'Generate Reply'}
              </Button>
            </Box>
            {error && (
              <Typography color="error" sx={{ mb: 2, textAlign: 'center' }}>
                {error}
              </Typography>
            )}
            {generatedReply && (
              <Box sx={{ mt: 3 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 'bold', color: '#333333' }}
                >
                  Generated Reply
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={6}
                  variant="outlined"
                  value={generatedReply || ''}
                  InputProps={{ readOnly: true }}
                  sx={{
                    backgroundColor: '#fafafa',
                    borderRadius: 2,
                    '& .MuiInputBase-input': { color: '#333333' }
                  }}
                />
                <Button
                  variant="outlined"
                  sx={{
                    mt: 2,
                    py: 1.5,
                    fontSize: '1rem',
                    borderRadius: 2,
                    color: '#1976d2',
                    borderColor: '#1976d2'
                  }}
                  onClick={() => navigator.clipboard.writeText(generatedReply)}
                  fullWidth
                  startIcon={<ContentCopyIcon />}
                >
                  Copy To Clipboard
                </Button>
              </Box>
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default App;
