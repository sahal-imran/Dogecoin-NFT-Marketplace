import React, { useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection:{md:'row',xs:'column'},
          pb: 10,
          pt: 14,
        }}
      >
        {/* Left/Top */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
          }}
        >
          {/* logo */}
          <Box sx={{ width: "242px", height: "53px" }}>
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
          <Typography
            sx={{
              fontFamily: "Syne",
              color: "#737373",
              fontSize: { md: "20px", xs: "16px" },
              lineHeight: { md: "30px", xs: "24px" },
              fontWeight: 400,
              fontStyle: "normal",
              my: 4,
              maxWidth: { md: "350px" },
            }}
          >
            The First OTC Solana NFT Marketplace Your NFTs, Your Choice! You
            Choose the Fees ✌
          </Typography>

          {/* Social icons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
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

        {/* Right/Bottom */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt:{md:0,xs:8}
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "start",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Syne",
                color: "white",
                fontSize: { md: "24px", xs: "20px" },
                lineHeight: "28.8px",
                fontWeight: 700,
                fontStyle: "normal",
                mb: 1,
              }}
            >
              My Account
            </Typography>
            {My_account.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  to={item.URL}
                  style={{
                    textDecoration: "none",
                    fontFamily: "Syne",
                    color: "#737373",
                    fontSize: "20px",
                    lineHeight: "30px",
                    fontWeight: 400,
                    fontStyle: "normal",
                    textTransform: "capitalize",
                    marginTop: "20px",
                  }}
                >
                  {item.title}
                </NavLink>
              );
            })}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "start",
              ml: 8,
              mr: { md: 2 },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Syne",
                color: "white",
                fontSize: { md: "24px", xs: "20px" },
                lineHeight: "28.8px",
                fontWeight: 700,
                fontStyle: "normal",
                mb: 1,
              }}
            >
              Resources
            </Typography>
            {Resources.map((item, index) => {
              return (
                <NavLink
                  key={index}
                  to={item.URL}
                  style={{
                    textDecoration: "none",
                    fontFamily: "Syne",
                    color: "#737373",
                    fontSize: "20px",
                    lineHeight: "30px",
                    fontWeight: 400,
                    fontStyle: "normal",
                    textTransform: "capitalize",
                    marginTop: "20px",
                  }}
                >
                  {item.title}
                </NavLink>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Footer;

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

const My_account = [
  {
    title: "Sale Listing",
    URL: "",
  },
  {
    title: "Loan Listing",
    URL: "",
  },
  {
    title: "My Profile",
    URL: "",
  },
  {
    title: "My NFTs",
    URL: "",
  },
];

const Resources = [
  {
    title: "Help & Support",
    URL: "",
  },
  {
    title: "Contact Us",
    URL: "",
  },
  {
    title: "Our Blog",
    URL: "",
  },
  {
    title: "Community",
    URL: "",
  },
];
