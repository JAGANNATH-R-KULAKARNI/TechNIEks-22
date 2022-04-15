import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import MenuItem from "@mui/material/MenuItem";
import * as c from "../utils/Colors";
import styles from "../styles/NavBar.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/router";
import styles2 from "../styles/Hover.module.css";

const pages = ["Book Tickets", "My Tickets", "About"];
const ids = ["events", "ticket", "about"];

const NavBarUI = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const router = useRouter();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        elevation={0}
        style={{
          background: "transparent",
          boxShadow: "none",
        }}
        color="transparent"
      >
        <Container maxWidth="xl" style={{ zIndex: -1, color: "white" }}>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontSize: "30px",
                fontFamily: "Bungee",
              }}
              className={styles2.hoverr}
              onClick={() => router.push("/home")}
            >
              TechNIEks 22
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={
                  props.code == 0
                    ? handleOpenNavMenu
                    : () => {
                        router.push("/");
                      }
                }
                color="inherit"
              >
                {props.code == 0 ? <MenuIcon /> : <ArrowBackIosIcon />}
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, index) => (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      router.push(`/${ids[index]}`);
                    }}
                  >
                    <p
                      textAlign="center"
                      style={{
                        fontFamily: "Bungee",
                        color: c.c1,
                        fontSize: "13px",
                      }}
                    >
                      {page}
                    </p>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                marginLeft: "-13%",
                fontFamily: "Bungee",
                fontSize: "20px",
              }}
              className={styles2.hoverr}
              onClick={() => router.push("/home")}
            >
              TechNIEks 22
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                paddingLeft: "2%",
              }}
            >
              {pages.map((page, index) => (
                <Button
                  key={page}
                  onClick={() => {
                    router.push(`/${ids[index]}`);
                  }}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    paddingLeft: "2%",
                    fontFamily: "Bungee",
                  }}
                  //    className={styles.underr}
                  className={styles2.hoverr}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Button
              variant="contained"
              style={{ backgroundColor: c.c4, fontFamily: "Bungee" }}
              onClick={
                props.status
                  ? props.logOut
                  : () => {
                      router.push("/who_r_u");
                    }
              }
            >
              {props.status ? "Log Out" : "Log In"}
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <div style={{ height: "50px" }}></div>
    </div>
  );
};
export default NavBarUI;
