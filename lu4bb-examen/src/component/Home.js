import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import {useNavigate} from "react-router-dom";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import img from "./../assets/images/lu4bb-logo.jpg";

const Home = (props) => {
  let navigate = useNavigate();
  return (
    <div>
      <ResponsiveAppBar />
      <Typography variant="h6" component="div"
      style={{
        marginTop:50,
        paddingTop: 50,
        fontWeight:600,
        fontSize:32,
        textAlign:'center',}}>
        LU4BB Training Center
      </Typography>
      <Grid container justifyContent="center">
      <Avatar
        variant={"rounded"}
        alt="The Earth"
        src={img}
        style={{
          width: 200,
          height: 200,
          marginTop:20,
        }}
      />
      <br />
      <Typography variant="h6" component="div" align="center">
          Plataforma de Training para ingreso a categoría Novicio, ascenso a categoría General y Superior.
      </Typography>
      <div component="span">
        <Button variant="contained" color="error" onClick={() => navigate("/Quiz")}>
          Simulador
        </Button>
        </div>            
      </Grid> 
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>      
        <Button variant="contained" color="error" onClick={() => navigate('/Learn')}>
          Aprender
        </Button>
      </div>
    </div>
  );
};
export default Home;