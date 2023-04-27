import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';

export default function EditButton({ editUrl }) {
  return (
    <Box 
      sx=
        {{ 
          display: 'flex', 
          justifyContent: {
            xs: 'flex-start',
            md: 'flex-end'
          },
          mt: 2 
        }}
    >
      <Button 
        href={editUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        variant="text" 
        size="small"
        sx={{ textTransform: 'none', px: 1 }}
      >
        <EditIcon sx={{ mr: 1 }} fontSize="string" />
        Edit this page
      </Button>
    </Box>
  );
};