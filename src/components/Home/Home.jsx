import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Home() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* Banner */}
        <Box
          id="Banner"
          sx={{
            width: "100%",
            height: { lg: "540px" },
            display: "flex",
            justifyContent: "end",
            alignItems: "center",
            borderRadius:'8px',
            overflow:'hidden'
          }}
        >
          <Box
            sx={{
              width: {md:"50%",xs:'100%'},
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              flexDirection: "column",
              p: {sm:6,xs:3},
            }}
          >
            <Typography
              sx={{
                fontFamily: "Syne",
                color: "white",
                fontSize: { md: "60px", xs: "40px" },
                lineHeight: { md: "65px", xs: "52px" },
                fontWeight: 600,
                fontStyle: "normal",
                textTransform: "uppercase",
              }}
            >
              SUPER
              <Box
                sx={{
                  fontSize: { lg: "90px", xs: "50px" },
                  lineHeight: { lg: "115.2px", xs: "55px" },
                  fontWeight: 700,
                }}
                component={"span"}
              >
                NFT
              </Box>
            </Typography>
            <Typography
              sx={{
                fontFamily: "Syne",
                color: "white",
                fontSize: { md: "60px", xs: "40px" },
                lineHeight: { md: "65px", xs: "52px" },
                fontWeight: 400,
                fontStyle: "normal",
                textTransform: "uppercase",
              }}
            >
              SALE
            </Typography>
            <Typography
              sx={{
                fontFamily: "Syne",
                color: "white",
                fontSize: "18px",
                lineHeight: "23.44px",
                fontWeight: 400,
                fontStyle: "normal",
                textTransform: "unset",
                textAlign: "right",
                my: {lg:2,xs:1},
              }}
            >
              ENter the NFt Universe With our
              <br />
              Ready--Made NFT Collections to begin minting
              <br />
              on all NFT Platforms!!
            </Typography>

            <Button
              variant="contained"
              sx={{
                px: 3,
                py: 1,
                borderRadius: "5px",
                fontFamily: "Syne",
                color: "white",
                fontSize: "20px",
                lineHeight: "24px",
                fontWeight: 600,
                fontStyle: "normal",
                textTransform: "unset",
                background: "linear-gradient(90deg, #BA9F33 0%, #E1CE83 100%)",
                boxShadow: "none",
              }}
            >
              Discover
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;
