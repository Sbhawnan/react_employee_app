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
  console.log(employee);
  return (
 <>
      {employee.map((item, index) => (
      

        <Card key={index} sx={{ maxWidth: 345, margin: 10, padding: 1 }}>
          <CardMedia
            sx={{ height: 200, backgroundSize: "contain", margin: 1 }}
            image={`/react_employee_app/${item.image}`} 
            title="profile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.firstName} {item.lastName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {employee[0].department}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {employee[0].position}
            </Typography>
          </CardContent>

          <Stack>
          {item.skills.map((skill,skillindex) => (
            <Chip
            variant="outlined"
            sx={{ marginTop: "10px" }}
            key={skillindex}
            label={skill} />
          ))}
          
        </Stack>

          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}