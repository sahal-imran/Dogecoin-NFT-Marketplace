import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Link from "@mui/material/Link";
import { useLocation } from "react-router-dom";

//import styles 👇
import "react-modern-drawer/dist/index.css";

function SideNavigationBar({ children }) {
  const location = useLocation();
  return (
    <>
      <Box sx={{ width: "100%", background: "#1E1E1E" }}>
        <Grid container spacing={0}>
          {/* Navigation bar side */}
          <Grid
            sx={
              location.pathname === "/Profile" ||
              location.pathname === "/nftdetails"
                ? { display: "none" }
                : {
                    display: {
                      md: "block",
                      xs: "none",
                    },
                    borderRight: "0.5px solid #000000",
                  }
            }
            item
            xs={
              location.pathname === "/Profile" ||
              location.pathname === "/nftdetails"
                ? 0
                : 2.3
            }
          >
            <Box
              sx={{
                width: "100%",
                height: "calc(100vh - 90px)",
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
                    to={"/ExploreCollection"}
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
                    className={location.pathname === "/ExploreCollection" ? "Grad" : ""}
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
                          className={location.pathname === item.URL ? "Grad" : ""}
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
          <Grid
            item
            xs={12}
            md={
              location.pathname === "/Profile" ||
              location.pathname === "/nftdetails"
                ? 12
                : 9.7
            }
          >
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
