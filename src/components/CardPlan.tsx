import React, { FC } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, Button, Box } from '@mui/material';
import { IPlan } from '../types/planTypes';
import { Link } from 'react-router-dom';

export interface ICardPlanProps {
  plan: IPlan
}

export const CardPlan: FC<ICardPlanProps> = ({ plan }) => {

  return (
    <Card sx={{ width: 275 }} elevation={3}>
      <CardContent>
        <Typography variant="h5" component="div">
          {plan.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {plan.description}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {new Date(plan.dateCreate).getDate().toString()}
        </Typography>
      </CardContent>
      {/* {imgUrl ? (<CardMedia
        component="img"
        height="194"
        image={imgUrl}
        alt={title}
      />) : (<Box sx={{ background: "#ccc", height: 194 }} />)
      } */}
      <CardActions>
        <Link to={`/plan/${plan.planId}`}>
          <Button
            size="small"
          >
            More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
