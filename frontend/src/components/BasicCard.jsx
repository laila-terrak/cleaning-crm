import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LetterAvatar from './LetterAvatar';

function BasicCard({firstName,lastName}) {
  return (
    <Card>
      <CardContent sx={{display: 'flex', alignItems: 'center', gap: 2 }}>
        <LetterAvatar firstName={firstName} lastName={lastName} />
        <Typography variant="h5">
          {firstName} {lastName}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BasicCard;