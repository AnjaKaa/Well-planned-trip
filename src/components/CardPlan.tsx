import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Box } from '@mui/material';


export interface ICardPlanProps {
  title: string;
  shortDescription?: string;
  date: string;
  imgUrl?: string;
}

export function CardPlan({ title, date, imgUrl = "", shortDescription = "" }: ICardPlanProps) {
  return (
    <Card sx={{ width: 275 }} elevation={3}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {shortDescription}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {date}
        </Typography>
      </CardContent>
      {imgUrl ? (<CardMedia
        component="img"
        height="194"
        image={imgUrl}
        alt={title}
      />) : (<Box sx={{ background: "#ccc", height: 194 }} />)
      }
      <CardActions>
        <Button size="small">More</Button>
      </CardActions>
    </Card>
  );
}
