{/* Simple MUI Card infowindow without any marker*/}

import React, {useState} from 'react';
import {
  InfoWindow,
  useAdvancedMarkerRef
} from '@vis.gl/react-google-maps';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';


export const InfoWindowMUICard = () => {

  return (
    <InfoWindow position={{lat: 40, lng: 80}} maxWidth={345}>
    <Card>
      <CardMedia
        sx={{ height: 140 }}
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  </InfoWindow>
  );
};