import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { SvgIcon } from '@mui/material';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';


export default function MediaCard({ employee }) {
  console.log("from employe", employee);
  return (
    <Card sx={{ maxWidth: 345, margin:10, }}>
      <CardMedia
        sx={{ height: 200, backgroundSize: 'contain', margin: 2 }}
        image="profile1.png" 
        title="green iguana"
      />
      <CardContent>
        <DarkModeIcon />
        <Typography gutterBottom variant="h5" component="div">
          {employee[0].firstName} {employee[0].lastName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          kayden is a hooman being. He is wearing a purple outfit today.
        </Typography>
      </CardContent>
  
      <Stack direction="row" spacing={1}>
      <Chip label="Clickable" />
      <Chip label="Clickable" variant="outlined" />
    </Stack>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

