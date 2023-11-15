import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Box, CssBaseline, Paper } from '@mui/material';
function Layout() {
  return (
    <Box style={{textAlign: "center"}}>
      <CssBaseline />
      <Grid container style={{paddingLeft: "5vw", paddingRight: "5vw"}} justifyContent={'center'} sx={{ flexGrow: 1 }} spacing={2}>
        {/** column 1*/ }
        <Grid item flexBasis={220} >
          <Grid xs={12}>
            <Paper style={{ height: "730px", background: "lightgray" }}> Navigation</Paper>
          </Grid>
        </Grid>
        {/** column 2 */}
        <Grid item container flexBasis={700} rowSpacing={2} >
            <Grid item xs={12}>
              <Paper style={{ height: "110px", background: "lightgray" }}> Header</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{ height: "147px", background: "lightgray" }}> User Input</Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper style={{ height: "440px", background: "lightgray" }}> Thread</Paper>
            </Grid>
        </Grid>
        {/** column 3 */}
        <Grid item container flexBasis={330} rowSpacing={2}>
          <Grid item xs={12}>
            <Paper style={{ height: "73px", background: "lightgray" }}> Search</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper style={{ height: "110px", background: "lightgray" }}> Container 1</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper style={{ height: "385px", background: "lightgray" }}> Container 2</Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper style={{ height: "110px", background: "lightgray" }}> Container 3</Paper>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Layout;