import React, { useState } from 'react'
import GoogleMapReact from "google-map-react"
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from "./style.js"
import mapStyles from './mapStyles.js';
import mapStyles1 from './mapStyles1.js';

// import { useMediaQuery } from '@material-ui/core';

const Map=({setCoordinates,setBounds,coordinates,places,setChildClicked,weatherData,webcamData})=> {
  const classes= useStyles();

  const isDesktop= useMediaQuery('(min-width:600px)')

 
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{key:process.env.REACT_APP_GOOGLEmAP_API_KEY}}
        defaultCenter={coordinates}
        center={coordinates} 
        defaultZoom={14}
        margin={[150,50,50,50]}
        options={''}
        // options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles1 }}
        onChange={(e)=>{
         setCoordinates({
           lat:e.center.lat , 
           lng:e.center.lng
          });
          setBounds({            
            ne:e.marginBounds.ne,
            sw:e.marginBounds.sw
          })
        }}
        onChildClick={child=>setChildClicked(child)}
        >
          {places?.map((place,i)=>(
            <div
            className={classes.markerContainer}
            lat={place.latitude}
            lng={place.longitude}
            key={i}
            >
              {
                !isDesktop?(
                  <LocationOnOutlinedIcon color="primary" fontsize="large"/>
                ) :(
                  <Paper elevation={3} className={classes.paper}>
                      <Typography className={classes.typography} variant="subtitle2" gutterBottom>
                        {place.name}
                      </Typography>
                      <img
                        src={place.photo?place.photo.images.large.url:"https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"}
                        alt={place.name}
                      />
                      <Rating style={{marginLeft:"-5px"}} size="small" value={Number(place.rating)} readOnly/>
                  </Paper>
                )
              }
            </div>
          ))}
          {weatherData?.list?.map((data, i) => (
          <div key={i} lat={data.coord.lat} lng={data.coord.lon}>
            <img height={100} src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} />
          </div>
         ))}

          {webcamData.map((cam,i)=>(
            <div  key={i} lat={cam.location.latitude} lng={cam.location.longitude}>
              <img style={{border:"1px solid white"}} src={cam.image.current.icon}/>
            </div>
          ))}
        
      </GoogleMapReact>
    </div>
  )
}

export default Map

// API key
//AIzaSyAf5xLujO4W0iBCAdeo3QG6LzSoZmGAsag
//AIzaSyBIl_HYinWD7BM26hH_kgxiXRRtxYKxEB4