import React, { useState } from 'react'
import { Autocomplete } from "@react-google-maps/api"
import {AppBar,Toolbar,Typography,InputBase,Box, Button} from "@material-ui/core"
import SearchIcon from "@material-ui/icons/Search"

import useStyles from "./style.js"

const Header=({setCoordinates})=> {
  const classes=useStyles()
  const [latitude,setLatitude]=useState("")
  const [longitude,setLongitude]=useState("")

  const[autocomplete,setAutocomplete]=useState(null)

  const onLoad=(autoC)=>{
    console.log({autoC})
    setAutocomplete(autoC)
  }
  const onPlaceChanged=()=>{
    const lat=autocomplete.getPlace().geometry.location.lat();
    const lng=autocomplete.getPlace().geometry.location.lng();
    console.log({lat},lng)

    setCoordinates({lat,lng});
  }

  const setCoord=()=>{
    if(latitude && longitude){
    console.log({latitude,longitude});

    setCoordinates({lat:latitude,lng:longitude})
    }
  }

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
        Trippify
        </Typography>
        <Box className={classes.flexi}>
          <Typography variant="h6" className={classes.title}>
            Explore new placces
          </Typography>
          {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
          
                <InputBase
                 className={classes.search}
                placeholder='latitude' 
                classes={{root: classes.inputRoot, input: classes.inputInput}}
                value={latitude}
                onChange={(e)=>setLatitude(Number(e.target.value))}
                />
                <InputBase
                 className={classes.search}
                placeholder='longitude' 
                classes={{root: classes.inputRoot, input: classes.inputInput}}
                value={longitude}
                onChange={(e)=>setLongitude(Number(e.target.value))}
                />
                <Button onClick={()=> setCoord()} variant="contained" color="grey">
                  <SearchIcon/>
                </Button>
              {/* <InputBase
               placeholder='Search...' 
               classes={{root: classes.inputRoot, input: classes.inputInput}}
               /> */}
            
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header