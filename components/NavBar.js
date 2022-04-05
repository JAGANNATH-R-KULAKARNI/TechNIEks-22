import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import * as c from "../utils/Colors";
import styles from "../styles/NavBar.module.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/router";
import styles2 from "../styles/Hover.module.css";

const pages = ["Book Tickets", "My Tickets", "About"];
const ids = ["book", "ticket", "about"];

const NavBarUI = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const m1 = useMediaQuery("(min-width:600px)");
  const router = useRouter();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <AppBar
        position="static"
        elevation={0}
        style={{
          backgroundColor: c.c1,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontSize: "30px",
              }}
              className={styles2.hoverr}
              onClick={() => router.push("/")}
            >
              TechNIEks'22
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
                    <Typography textAlign="center">{page}</Typography>
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
              }}
              className={styles2.hoverr}
              onClick={() => router.push("/")}
            >
              TechNIEks'22
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
                  }}
                  className={styles.underr}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Button
              variant="contained"
              style={{ backgroundColor: c.c3 }}
              onClick={() => {
                router.push("/who_r_u");
              }}
            >
              LogIn
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default NavBarUI;
