import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Badge from "@mui/material/Badge";
import Hamburger from "hamburger-react";
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";

function SideNavigationBar({ children }) {
  const [isOpen, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <Box sx={{ width: "100%", background: "#1E1E1E" }}>
        <Grid container spacing={0}>
          {/* Navigation bar side */}
          <Grid
            item
            xs={2.3}
            sx={{
              display: {
                md: "block",
                xs: "none",
                borderRight: "0.5px solid #000000",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "calc(100vh - 80px)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
                px: { lg: 4, xs: 1 },
                py: 3,
              }}
            >
              {/* Top sections */}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    p: 0,
                    width: "100%",
                    height: "60px",
                    borderRadius: "5px",
                    borderColor: "#BA9F33",
                    fontFamily: "Syne",
                    color: "white",
                    fontSize: "20px",
                    lineHeight: "24px",
                    fontWeight: 600,
                    fontStyle: "normal",
                    textTransform: "capitalize",
                    "&:hover": {
                      borderColor: "#BA9F33",
                    },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/assets/marketplace.svg"
                    alt="logo"
                    style={{
                      width: "30px",
                      height: "30px",
                      objectFit: "contain",
                      marginRight: "16px",
                    }}
                  />
                  Marketplace
                </Button>

                {/* Nav Items */}
                <Box
                  sx={{
                    mt: 2,
                    pl: 3,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    flexDirection: "column",
                  }}
                >
                  <NavLink
                    to={""}
                    style={{
                      textDecoration: "none",
                      fontFamily: "Syne",
                      color: "#858585",
                      fontSize: "20px",
                      lineHeight: "24px",
                      fontWeight: 600,
                      fontStyle: "normal",
                      textTransform: "capitalize",
                    }}
                  >
                    Popular Collection
                  </NavLink>
                  <NavLink
                    to={""}
                    style={{
                      marginTop: "12px",
                      textDecoration: "none",
                      fontFamily: "Syne",
                      color: "#858585",
                      fontSize: "20px",
                      lineHeight: "24px",
                      fontWeight: 600,
                      fontStyle: "normal",
                      textTransform: "capitalize",
                    }}
                  >
                    Newly Listed
                  </NavLink>
                  <NavLink
                    to={""}
                    style={{
                      marginTop: "12px",
                      textDecoration: "none",
                      fontFamily: "Syne",
                      color: "#858585",
                      fontSize: "20px",
                      lineHeight: "24px",
                      fontWeight: 600,
                      fontStyle: "normal",
                      textTransform: "capitalize",
                    }}
                  >
                    Aution
                  </NavLink>

                  {/* Nav Items */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "start",
                      flexDirection: "column",
                    }}
                  >
                    {NavItems.map((item, index) => {
                      return (
                        <NavLink
                          key={index}
                          to={item.URL}
                          style={{
                            marginTop: "32px",
                            textDecoration: "none",
                            fontFamily: "Syne",
                            color: "white",
                            fontSize: "20px",
                            lineHeight: "24px",
                            fontWeight: 600,
                            fontStyle: "normal",
                            textTransform: "capitalize",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={item.ico}
                            alt="logo"
                            style={{
                              width: "32px",
                              height: "32px",
                              objectFit: "contain",
                              marginRight: "12px",
                            }}
                          />
                          {item.Name}
                        </NavLink>
                      );
                    })}
                  </Box>
                </Box>
              </Box>

              {/* Bottom sections */}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    p: 0,
                    width: "100%",
                    height: "56px",
                    borderRadius: "5px",
                    fontFamily: "Syne",
                    color: "white",
                    fontSize: "20px",
                    lineHeight: "24px",
                    fontWeight: 600,
                    fontStyle: "normal",
                    textTransform: "unset",
                    background:
                      "linear-gradient(90deg, #BA9F33 0%, #E1CE83 100%)",
                  }}
                >
                  Create NFTs
                </Button>

                {/* Social icons */}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 2,
                  }}
                >
                  {Socail_Links.map((item, index) => {
                    return (
                      <Link
                        key={index}
                        href={item.ref}
                        target={"_blank"}
                        sx={
                          index === 3
                            ? {
                                width: "24px",
                                height: "24px",
                                textDecoration: "none",
                              }
                            : {
                                width: "24px",
                                height: "24px",
                                textDecoration: "none",
                                mr: 2,
                              }
                        }
                      >
                        <img
                          src={item.icoURL}
                          alt="logo"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </Link>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Content Side */}
          <Grid item xs={12} md={9.7}>
            <Box
              sx={{
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Box sx={{ p: 3, width: "100%", overflow: "hidden" }}>
                <main>{children}</main>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Drawer */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="Drawer"
        style={{
          width: "100%",
          background: "#1E1E1E",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            p: 2,
            height: "100vh",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {/* Logo and cross here */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Logo */}
              <Box
                sx={{
                  width: "160px",
                  height: "53px",
                  display: { md: "none", xs: "block" },
                }}
              >
                <img
                  src="/assets/logo.svg"
                  alt="logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Hamburger color="white" toggled={isOpen} toggle={toggleDrawer} />
            </Box>

            {/* Marketplace button */}
            <Button
              onClick={toggleDrawer}
              variant="outlined"
              sx={{
                p: 0,
                width: "100%",
                height: "60px",
                borderRadius: "5px",
                borderColor: "#BA9F33",
                fontFamily: "Syne",
                color: "white",
                fontSize: "20px",
                lineHeight: "24px",
                fontWeight: 600,
                fontStyle: "normal",
                textTransform: "capitalize",
                "&:hover": {
                  borderColor: "#BA9F33",
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 4,
              }}
            >
              <img
                src="/assets/marketplace.svg"
                alt="logo"
                style={{
                  width: "30px",
                  height: "30px",
                  objectFit: "contain",
                  marginRight: "16px",
                }}
              />
              Marketplace
            </Button>

            {/* Navitems */}
            <Box
              sx={{
                mt: 2,
                pl: 3,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
              }}
            >
              <NavLink
                to={""}
                style={{
                  textDecoration: "none",
                  fontFamily: "Syne",
                  color: "#858585",
                  fontSize: "20px",
                  lineHeight: "24px",
                  fontWeight: 600,
                  fontStyle: "normal",
                  textTransform: "capitalize",
                }}
              >
                Popular Collection
              </NavLink>
              <NavLink
                to={""}
                style={{
                  marginTop: "12px",
                  textDecoration: "none",
                  fontFamily: "Syne",
                  color: "#858585",
                  fontSize: "20px",
                  lineHeight: "24px",
                  fontWeight: 600,
                  fontStyle: "normal",
                  textTransform: "capitalize",
                }}
              >
                Newly Listed
              </NavLink>
              <NavLink
                to={""}
                style={{
                  marginTop: "12px",
                  textDecoration: "none",
                  fontFamily: "Syne",
                  color: "#858585",
                  fontSize: "20px",
                  lineHeight: "24px",
                  fontWeight: 600,
                  fontStyle: "normal",
                  textTransform: "capitalize",
                }}
              >
                Aution
              </NavLink>

              {/* Nav Items */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  flexDirection: "column",
                }}
              >
                {NavItems.map((item, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={item.URL}
                      style={{
                        marginTop: "32px",
                        textDecoration: "none",
                        fontFamily: "Syne",
                        color: "white",
                        fontSize: "20px",
                        lineHeight: "24px",
                        fontWeight: 600,
                        fontStyle: "normal",
                        textTransform: "capitalize",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={item.ico}
                        alt="logo"
                        style={{
                          width: "32px",
                          height: "32px",
                          objectFit: "contain",
                          marginRight: "12px",
                        }}
                      />
                      {item.Name}
                    </NavLink>
                  );
                })}
              </Box>
            </Box>
          </Box>

          {/* social media */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              mt: 6,
            }}
          >
            <Button
              onClick={toggleDrawer}
              variant="contained"
              sx={{
                p: 0,
                width: "100%",
                height: "56px",
                borderRadius: "5px",
                fontFamily: "Syne",
                color: "white",
                fontSize: "20px",
                lineHeight: "24px",
                fontWeight: 600,
                fontStyle: "normal",
                textTransform: "unset",
                background: "linear-gradient(90deg, #BA9F33 0%, #E1CE83 100%)",
              }}
            >
              Create NFTs
            </Button>

            {/* Social icons */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 2,
              }}
            >
              {Socail_Links.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.ref}
                    target={"_blank"}
                    sx={
                      index === 3
                        ? {
                            width: "24px",
                            height: "24px",
                            textDecoration: "none",
                          }
                        : {
                            width: "24px",
                            height: "24px",
                            textDecoration: "none",
                            mr: 2,
                          }
                    }
                  >
                    <img
                      src={item.icoURL}
                      alt="logo"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Link>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default SideNavigationBar;

const Socail_Links = [
  {
    Name: "discord",
    icoURL: "/assets/discord.svg",
    ref: "",
  },
  {
    Name: "twitter",
    icoURL: "/assets/twitter.svg",
    ref: "",
  },
  {
    Name: "instagram",
    icoURL: "/assets/instagram.svg",
    ref: "",
  },
  {
    Name: "bi",
    icoURL: "/assets/bi.svg",
    ref: "",
  },
];

const NavItems = [
  {
    Name: "Launchpad",
    ico: "/assets/lunchpad.svg",
    URL: "/Launchpad",
  },
  {
    Name: "Insights",
    ico: "/assets/Insights.svg",
    URL: "/Insights",
  },
  {
    Name: "Support",
    ico: "/assets/support.svg",
    URL: "/Support",
  },
];
