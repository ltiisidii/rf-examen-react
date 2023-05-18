import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import {useNavigate} from "react-router-dom";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
// eslint-disable-next-line no-unused-vars
import Button from "@mui/material/Button";
import img from "./../assets/images/lu4bb-logo.jpg";

const Home = (props) => {
  // eslint-disable-next-line no-unused-vars
  let navigate = useNavigate();
  return (
    <div>
      <ResponsiveAppBar />
      <Typography
        variant="h6"
        component="div"
        style={{
          marginTop: 50,
          paddingTop: 50,
          fontWeight: 600,
          fontSize: 32,
          textAlign: "center",
        }}
      >
        LU4BB Training Center
      </Typography>
      <Grid container justifyContent="center">
        <Avatar
          variant={"rounded"}
          alt="LU4BB"
          src={img}
          style={{
            width: 200,
            height: 200,
            marginTop: 20,
          }}
        />
        <br />
        <Typography variant="h6" component="div" align="center">
          Plataforma de Training para ingreso a categoría Novicio, ascenso a categoría General y Superior.
        </Typography>
 
      </Grid>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
        <Button variant="contained" color="error" onClick={() => navigate("/Quiz")}>
          Simulador
        </Button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
        <Button variant="contained" color="error" onClick={() => navigate("/Quiz")}>
          Teoria Tecnica Novicio
        </Button>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
        <Button variant="contained" color="error" onClick={() => navigate("/Quiz")}>
          Teoria Reglamentacion Novicio
        </Button>
      </div>
    </div>
  );
};

export default Home;