import { CircularProgress,Grid,Select,FormControl, InputLabel, MenuItem, Typography } from '@material-ui/core'
import React, { createRef, useEffect, useState } from 'react'

// import

import useStyles from "./style"
import PlaceDetails from "../PlaceDetails/PlaceDetails"

const List=({isLoading,places,childClicked,type,setType,rating,setRating}) =>{
  const classes=useStyles();
  

  //for onClicked refs for child component in the google map
  const[elRefs,setElRefs]=useState([])
  let refs;
useEffect(()=>{

   refs=Array(places?.length).fill();
   refs=refs.map((_,i)=>refs[i]||createRef());

  setElRefs(refs);

},[places])

  return (
    <div className={classes.container}>
      <Typography variant="h4">Restaurants,Hotels & Attractions</Typography>
      {
          isLoading?(
            <div className={classes.loading}>
              <CircularProgress size="5rem" />
            </div>
          ):(
            <>
            {places.length!==0?(
              <>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e)=>setType(e.target.value)}>
                <MenuItem value="hotels">Hotels</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
                <MenuItem value="restaurants">Restaurants</MenuItem>

            </Select>
          </FormControl> 
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={rating} onChange={(e)=>setRating(e.target.value)}>
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={3}>Above 3.0</MenuItem>
                <MenuItem value={4}>Above 4.0</MenuItem>
                <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl> 
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place,i)=>(
                  <Grid ref={elRefs[i]} item key={i} xs={12}>
                      {
                        place.name && 
                        <PlaceDetails 
                          place={place} 
                          selected={Number(childClicked)===i} 
                          refProp={elRefs[i]}
                        />
                      }
                  </Grid>
            ))}
          </Grid>
          </>):(<div><h1>No places found, please enter the valid details</h1></div>)}

          </>)
    }
    </div>
  )
}

export default List
