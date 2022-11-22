import React from "react";
import Header from "../headerMovieList";
import TVList from "../TVList";
import Grid from "@mui/material/Grid";

function TVListPageTemplate({ TVs, title, action }) {



  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>

        <TVList action={action} TVs={TVs}></TVList>
      </Grid>
    </Grid>
  );
}
export default TVListPageTemplate;