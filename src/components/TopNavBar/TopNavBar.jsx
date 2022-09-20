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

function TopNavBar() {
  const [isOpen, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <>
      {/* Top bar */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "90px",
          px: 3,
          background: "#1E1E1E",
        }}
      >
        {/* Search and logo bar */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Box
            sx={{ width: { sm: "242px", xs: "200px" }, height: "53px", mr: 10 }}
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

          {/* Seacrch */}
          <Box
            sx={{
              width: "400px",
              height: "59px",
              borderRadius: "10px",
              background: "#242424",
              overflow: "hidden",
              display: { md: "block", xs: "none" },
            }}
          >
            <input
              type="text"
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                fontFamily: "Syne",
                color: "#B4B4B4",
                fontSize: "18px",
                lineHeight: "23.44px",
                fontWeight: 400,
                fontStyle: "normal",
                outline: "none",
                boxShadow: "unset",
                border: "none",
                padding: "0px 16px",
              }}
              placeholder="Search collection or NFT"
            />
          </Box>
        </Box>
        {/* Profile and Button icons */}
        <Box
          sx={{
            display: { md: "flex", xs: "none" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton sx={{ "&:hover": { background: "#242424" }, mr: 1 }}>
            <Badge color="secondary" variant="dot">
              <NotificationsNoneIcon
                sx={{ color: "white", fontSize: "30px" }}
              />
            </Badge>
          </IconButton>
          <NavLink
          to={"Profile"}
          >
            <IconButton sx={{ "&:hover": { background: "#242424" }, mr: 1 }}>
              <AccountCircleIcon sx={{ color: "white", fontSize: "30px" }} />
            </IconButton>
          </NavLink>

          {/* Connect Wallet Button */}
          <Button
            variant="contained"
            sx={{
              p: 0,
              width: "283px",
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
            Connect Wallet
          </Button>
        </Box>

        {/* +++++++++++++++++++ */}
        {/* For phone */}
        {/* +++++++++++++++++++ */}

        <Box sx={{ display: { md: "none", xs: "block" } }}>
          <Hamburger color="white" toggled={isOpen} toggle={toggleDrawer} />
        </Box>
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

export default TopNavBar;

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
