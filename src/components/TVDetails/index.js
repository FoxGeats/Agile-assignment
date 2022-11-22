import React from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import StarRate from "@mui/icons-material/StarRate";
import Typography from "@mui/material/Typography";


const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};
const chip = { margin: 0.5 };

const TVDetails = ({ TV }) => {  
  

  return (
    <>
      <Typography variant="h5" component="h3">
        Overview
      </Typography>

      <Typography variant="h6" component="p">
        {TV.overview}
      </Typography>

      <Paper 
        component="ul" 
        sx={{...root}}
      >
        <li>
          <Chip label="Genres" sx={{...chip}} color="primary" />
        </li>
        {TV.genres.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
        ))}
      </Paper>
      <Paper component="ul" sx={{...root}}>
        
       <li>
        <Chip
          icon={<StarRate />}
          label={`${TV.vote_average} `}
        /></li>
        <li>
        <Chip label={`Released: ${TV.last_air_date}`} />
        </li>
        </Paper>
         <Paper component="ul" sx={{...root}}>
        <li>
          <Chip label="Production countries" sx={{...chip}} color="primary" />
        </li>

       
            
        {TV.production_countries.map((g) => (
          <li key={g.name}>
            <Chip label={g.name} sx={{...chip}} />
          </li>
           ))}
      </Paper>
     
      </>
  );
};
export default TVDetails ;