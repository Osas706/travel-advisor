import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles'

const PlaceDetail = ({ place, selected, refProp }) => {
  if(selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start'})

  const classes = useStyles();
  return (
    <Card elevation={6}>
      <CardMedia 
        style={{ height: 350}}
        image={place?.photo ? place?.photo?.images?.large.url :  'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1568&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        title={place.name}
      />

      <CardContent>
        <Typography gutterBottom variant='h5'>{place.name}</Typography>

        <Box display='flex' justifyContent='space-between'>
           <Rating value={Number(place.rating)} readOnly/>
           <Typography gutterBottom variant='subtitle1'>Out of {place?.num_reviews} reviews</Typography>
        </Box>

        <Box display='flex' justifyContent='space-between'>
           <Typography variant='subtitle1'>Price</Typography>
           <Typography gutterBottom variant='subtitle1'>{place?.price}</Typography>
        </Box>

        <Box display='flex' justifyContent='space-between'>
           <Typography variant='subtitle1'>Ranking</Typography>
           <Typography gutterBottom variant='subtitle1'>{place?.ranking}</Typography>
        </Box>

        {place?.awards?.map((award) => (
          <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
            <img src={award.images.small} alt=''/>
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}

       {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}

        {place?.address && (
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
            <LocationOnIcon />{place.address}
          </Typography>
        )}

        {place?.phone && (
          <Typography variant="subtitle2" color="textSecondary" className={classes.spacing}>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}

      <CardActions>
        <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
          Path Finder
        </Button>
        <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
          Website
        </Button>
      </CardActions>

      </CardContent>
    </Card>
  )
}

export default PlaceDetail
