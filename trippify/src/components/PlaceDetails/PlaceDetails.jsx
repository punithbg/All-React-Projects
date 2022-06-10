import React from 'react'
import {Box,Typography,Button,Card,CardMedia,CardContent,CardActions,Chip} from "@material-ui/core"
import LocationOnIcon from "@material-ui/icons/LocationOn"
import PhoneIcon from "@material-ui/icons/Phone"
// import Rating from "@material-ui/icons/Rating"
import StarBorderIcon from '@material-ui/icons/StarBorder';


import useStyles from "./style"
import Rating  from '@material-ui/lab/Rating';

const PlaceDetails=({place ,selected , refProp})=> {

  const classes=useStyles();

  

  if(selected){

      refProp?.current?.scrollIntoView({behavior:"smooth" ,block: 'start'})
    
  }
  
  return (
      <Card  elivation={6}>
          <CardMedia
              style={{height:350}}
              image={place.photo?place.photo.images.large.url:"https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"}
              title={place.name}
          />
          <CardContent>
            <Box pb={1} display="flex" justifyContent="space-between">
            <Typography  gutterBottom  variant="h5">{place?.name}</Typography>
            <Typography  gutterBottom  variant="h5">{place?.is_closed?
                <span style={{color:"red"}}>Closed</span>:<span style={{color:"green"}}>Open</span>
              }</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
            <Rating  value={Number(place.rating)} readOnly/>
            <Typography  gutterBottom  variant="subtitle1">out of {place.num_reviews} reviews</Typography>
            </Box>
            
            
            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle2">Price</Typography>
              <Typography gutterBottom variant="subtitle2">{place.price_level}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Typography variant="subtitle2">Ranking</Typography>
              <Typography gutterBottom variant="subtitle2">{place.ranking}</Typography>
            </Box>
            {/* <Box  className={classes.review} display="flex" justifyContent="space-between">
              <Typography variant="subtitle2">Reviews</Typography>
              <Typography gutterBottom variant="subtitle2">{place.num_reviews}</Typography>
            </Box> */}
            {place?.awards?.map(award=>(
              <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
                  <img src={award.images.small} alt={award.display_name}/>
                  <Typography varient="subtitle2" color="textSecondary">{award.display_name}</Typography>
              </Box>
            ))}
            
            {place?.cuisine?.map(({name})=>(
              <Chip key={name} size="small" label={name} className={classes.chip}/>
            ))}

              {place?.phone && (
                <Typography style={{margin:"15px 0"}}  variant="subtitle2" color="textSecondary" className={classes.spacing}>
                  <PhoneIcon />{place.phone}
                </Typography>
            )} 

            {place?.address && (
                <Typography style={{ fontSize:"12.5px"}} gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                  <LocationOnIcon style={{ fontSize:"27px",marginRight:"5px"}}/>{place.address}
                </Typography>
            )}

            <CardActions>
              { place.web_url && <Button size="small" color="primary" onClick={()=>window.open(place.web_url,"_blank")}>
                Trip Advisor
              </Button>}
              { place.website && <Button size="small" color="primary" onClick={()=>window.open(place.website,"_blank")}>
                Website
              </Button>}
            </CardActions>

             
            
          </CardContent>
      </Card>
    )
}

export default PlaceDetails