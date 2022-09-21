import React, { useState, useRef } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { maxWidth } from "@mui/system";

function CollectionDetail() {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* Banner */}
        <Box
          id="ExploreBanner"
          sx={{
            width: "100%",
            height: { md: "328px", xs: "auto" },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "8px",
            overflow: "hidden",
            p: { md: 4 },
          }}
        >
          {/* left */}
          <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection:"column",
            maxWidth:{md:"50%"}
          }} >
            <Typography
              sx={{
                fontFamily: "Syne",
                color: "white",
                fontSize: { md: "48px", xs: "20px" },
                lineHeight: { md: "58px", xs: "26px" },
                fontWeight: 700,
                fontStyle: "normal",
              }}
            >
              ABC RIDER
            </Typography>
            <Typography
              sx={{
                fontFamily: "Syne",
                color: "white",
                fontSize: { md: "18", xs: "16px" },
                lineHeight: { md: "23px", xs: "22px" },
                fontWeight: 400,
                fontStyle: "normal",
              }}
            >
              10.000 immutable Rider NFTs No web, No twitter, No royalties.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CollectionDetail;
