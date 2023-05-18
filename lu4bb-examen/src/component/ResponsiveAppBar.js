import {AppBar, Toolbar, Typography, makeStyles, Button, IconButton, Drawer, Link,
  MenuItem,} from "@material-ui/core";
  import MenuIcon from "@material-ui/icons/Menu";
  import React, { useState, useEffect } from "react";
  import { Link as RouterLink } from "react-router-dom";
  
  const linkDetails = [
    {
      displayName: "Simulador",
      href: "/Quiz",
    },
    {
      displayName: "Aprender",
      children: [
        {
          displayName: "Novicio",
          children: [
            {
              displayName: "Técnica",
              href: "/Learn/Novice/Technique",
            },
            {
              displayName: "Reglamentación",
              href: "/Learn/Novice/Regulation",
            },
          ],
        },
        {
          displayName: "General",
          href: "#",
        },
        {
          displayName: "Superior",
          href: "#",
        },
      ],
    },
  ];
  
  const useStyles = makeStyles(() => ({
    NavBar: {
      backgroundColor: "#F5F5F5",
      paddingRight: "79px",
      paddingLeft: "5px",
      marginBottom:"100px",
      "@media (max-width: 900px)": {
        paddingLeft: 0,
        
      },
    },
    logoText: {
      fontFamily: "Dancing Script, cursive",
      fontWeight: 500,
      color: "#1e1f22",
      textAlign: "left",
    },
    menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "38px",
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between",
    },
    drawerContainer: {
      padding: "20px 30px",
    },
  }));
  
  export default function ResponsiveAppBar() {
    const { NavBar, logoText, menuButton, toolbar, drawerContainer } = useStyles();
  
    const [state, setState] = useState({
      mobileView: false,
      drawerOpen: false,
    });
  
    const { mobileView, drawerOpen } = state;
  
    useEffect(() => {
      const setResponsiveness = () => {
        return window.innerWidth < 900
          ? setState((prevState) => ({ ...prevState, mobileView: true }))
          : setState((prevState) => ({ ...prevState, mobileView: false }));
      };
  
      setResponsiveness();
  
      window.addEventListener("resize", () => setResponsiveness());
  
      return () => {
        window.removeEventListener("resize", () => setResponsiveness());
      };
    }, []);
  
    const desktopView = () => {
      const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
    
      return (
        <Toolbar className={toolbar}>
          {EarthWonders}
          <div>
            <Button
              {...{
                key: "menuButton",
                color: "Black",
                className: menuButton,
                onClick: handleDrawerOpen,
              }}
            >
              Menú
            </Button>
            <Drawer
              {...{
                anchor: "right",
                open: drawerOpen,
                onClose: handleDrawerClose,
              }}
            >
              <div className={drawerContainer}>{getDrawerChoices()}</div>
            </Drawer>
          </div>
        </Toolbar>
      );
    };
  
    const viewMobile = () => {
      const handleDrawerOpen = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: true }));
      const handleDrawerClose = () =>
        setState((prevState) => ({ ...prevState, drawerOpen: false }));
  
      return (
        <Toolbar>
          <IconButton
            {...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
  
          <Drawer
            {...{
              anchor: "left",
              open: drawerOpen,
              onClose: handleDrawerClose,
            }}
          >
            <div className={drawerContainer}>{getDrawerChoices()}</div>
          </Drawer>
  
          <div>{EarthWonders}</div>
        </Toolbar>
      );
    };
  
    const getDrawerChoices = () => {
      const renderMenuItems = (items) => {
        return items.map(({ displayName, href, children }) => {
          if (children) {
            return (
              <div key={displayName}>
                <MenuItem>{displayName}</MenuItem>
                <div className={drawerContainer}>
                  {renderMenuItems(children)}
                </div>
              </div>
            );
          }
          return (
            <Link
              {...{
                component: RouterLink,
                to: href,
                color: "inherit",
                style: { textDecoration: "none" },
                key: displayName,
              }}
            >
              <MenuItem>{displayName}</MenuItem>
            </Link>
          );
        });
      };
    
      return renderMenuItems(linkDetails);
    };
  
    
    
    const EarthWonders = (
      <Typography variant="h6" component="h1" className={logoText}>
        Buenos Aires Radio Club
      </Typography>
    );
    // eslint-disable-next-line
    const getMenuButtons = () => {
      return linkDetails.map(({ displayName, href }) => {
        return (
          <Button
            {...{
              key: displayName,
              color: "Black",
              to: href,
              component: RouterLink,
              className: menuButton,
            }}
          >
            {displayName}
          </Button>
        );
      });
    };
  
    return (
      <NavBar>
        <AppBar className={NavBar}>
          {mobileView ? viewMobile() : desktopView()}
        </AppBar>
      </NavBar>
    );
  }