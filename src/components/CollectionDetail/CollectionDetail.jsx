import React, { useState, useRef } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { NavLink } from "react-router-dom";

function CollectionDetail() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [Items, Set_Items] = useState(true);
  const [Auctions, Set_Auctions] = useState(false);
  const [Activity, Set_Activity] = useState(false);
  const [Analytics, Set_Analytics] = useState(false);

  const On_Items_Click = () => {
    Set_Items(true);
    Set_Auctions(false);
    Set_Activity(false);
    Set_Analytics(false);
  };
  const On_Auctions_Click = () => {
    Set_Items(false);
    Set_Auctions(true);
    Set_Activity(false);
    Set_Analytics(false);
  };
  const On_Activity_Click = () => {
    Set_Items(false);
    Set_Auctions(false);
    Set_Activity(true);
    Set_Analytics(false);
  };
  const On_Analytics_Click = () => {
    Set_Items(false);
    Set_Auctions(false);
    Set_Activity(false);
    Set_Analytics(true);
  };

  const Type_Buttons = [
    {
      Ico_Active: "/assets/itemsRed.svg",
      Ico_Non_Active: "/assets/itemsWhite.svg",
      Name: "Items",
      Current_State: Items,
      fuc: On_Items_Click,
    },
    {
      Ico_Active: "/assets/AuctionsRed.svg",
      Ico_Non_Active: "/assets/AuctionsWhite.svg",
      Name: "Auctions",
      Current_State: Auctions,
      fuc: On_Auctions_Click,
    },
    {
      Ico_Active: "/assets/ActivityRed.svg",
      Ico_Non_Active: "/assets/ActivityWhite.svg",
      Name: "Activity",
      Current_State: Activity,
      fuc: On_Activity_Click,
    },
    {
      Ico_Active: "/assets/AnalyticsRed.svg",
      Ico_Non_Active: "/assets/AnalyticsWhite.svg",
      Name: "Analytics",
      Current_State: Analytics,
      fuc: On_Analytics_Click,
    },
  ];

  const [GridView, Set_GridView] = useState(true);
  const [AppView, Set_AppView] = useState(false);

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
            justifyContent: { md: "space-between", xs: "center" },
            alignItems: "center",
            flexDirection: { md: "row", xs: "column" },
            borderRadius: "8px",
            overflow: "hidden",
            p: { md: 4, xs: 3 },
          }}
        >
          {/* left */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: { md: "start", xs: "center" },
              flexDirection: "column",
              maxWidth: { md: "50%", xs: "100%" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "Syne",
                color: "white",
                fontSize: { md: "48px", xs: "20px" },
                lineHeight: { md: "58px", xs: "26px" },
                fontWeight: 700,
                fontStyle: "normal",
                textAlign: {
                  md: "start",
                  xs: "center",
                },
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
                textAlign: {
                  md: "start",
                  xs: "center",
                },
              }}
            >
              10.000 immutable Rider NFTs No web, No twitter, No
              <br /> royalties.
            </Typography>

            {/* Social Button */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: {
                  md: "row",
                  xs: "column",
                },
                mt: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* discord */}
                <Link
                  sx={{
                    width: "50px",
                    height: "50px",
                    border: "1px solid #BA9F33",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  href={""}
                >
                  <img
                    src="/assets/discord.svg"
                    alt="ico"
                    style={{ objectFit: "contain" }}
                  />
                </Link>
                {/* Twitter */}
                <Link
                  sx={{
                    width: { md: "135px", xs: "194px" },
                    height: "50px",
                    border: "1px solid #BA9F33",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    ml: 1,
                  }}
                  href={""}
                >
                  <img
                    src="/assets/twitter.svg"
                    alt="ico"
                    style={{ objectFit: "contain" }}
                  />
                  <Box
                    sx={{
                      px: 2,
                      height: "40px",
                      border: "1px solid white",
                      borderRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      ml: 1,
                      fontFamily: "Syne",
                      color: "white",
                      fontSize: "16px",
                      lineHeight: "19.2px",
                      fontWeight: 600,
                      fontStyle: "normal",
                    }}
                  >
                    61.4K
                  </Box>
                </Link>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  ml: { md: 1 },
                  mt: {
                    md: 0,
                    xs: 2,
                  },
                }}
              >
                {/* Language */}
                <Link
                  sx={{
                    width: "50px",
                    height: "50px",
                    border: "1px solid #BA9F33",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  href={""}
                >
                  <img
                    src="/assets/lang.svg"
                    alt="ico"
                    style={{ objectFit: "contain" }}
                  />
                </Link>
                {/* watch */}
                <Link
                  sx={{
                    width: "194px",
                    height: "50px",
                    border: "1px solid #BA9F33",
                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "Syne",
                    color: "white",
                    fontSize: "16px",
                    lineHeight: "19.2px",
                    fontWeight: 600,
                    fontStyle: "normal",
                    ml: 1,
                    textDecoration: "none",
                  }}
                  href={""}
                >
                  <img
                    src="/assets/been.svg"
                    alt="ico"
                    style={{ objectFit: "contain", marginRight: "6px" }}
                  />
                  Watch
                  <Box
                    sx={{
                      px: 2,
                      height: "40px",
                      border: "1px solid white",
                      borderRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      ml: 1,
                      fontFamily: "Syne",
                      color: "white",
                      fontSize: "16px",
                      lineHeight: "19.2px",
                      fontWeight: 600,
                      fontStyle: "normal",
                    }}
                  >
                    500
                  </Box>
                </Link>
                <Box
                  sx={{
                    display: { md: "flex", xs: "none" },
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    ml: 1,
                  }}
                >
                  <img
                    src="/assets/moregolden.svg"
                    alt="ico"
                    style={{ objectFit: "contain" }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Right */}
          <Box
            sx={{
              flexGrow: 1,
              maxWidth: { md: "50%", xs: "100%" },
              mt: {
                md: 0,
                xs: 3,
              },
            }}
          >
            <Grid container spacing={1}>
              {Buttons.map((item, index) => {
                return (
                  <Grid key={index} item xs={12} sm={6} md={4}>
                    <Button
                      variant="outlined"
                      sx={{
                        width: "100%",
                        height: "50px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderColor: "white",
                        "&:hover": {
                          borderColor: "white",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "white",
                          fontSize: "18px",
                          lineHeight: "21.6px",
                          fontWeight: 700,
                          fontStyle: "normal",
                          textTransform: "capitalize",
                        }}
                      >
                        {item.Text1}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "white",
                          fontSize: "18px",
                          lineHeight: "21.6px",
                          fontWeight: 700,
                          fontStyle: "normal",
                          textTransform: "capitalize",
                        }}
                      >
                        {item.Text2}
                      </Typography>
                    </Button>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Box>

        {/* NFT Box */}
        <Box sx={{ flexGrow: 1, width: "100%", mt: 6 }}>
          <Grid container spacing={2}>
            <Grid item md={2}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                {/* Heading */}
                <Box
                  sx={{
                    width: "100%",
                    height: "74px",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    background: "#232222",
                    borderRadius: "5px",
                    p: 2,
                  }}
                >
                  <img
                    src="/assets/filtergolden.svg"
                    alt="ico"
                    style={{ objectFit: "contain" }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "Syne",
                      color: "white",
                      fontSize: { md: "20px", xs: "18px" },
                      lineHeight: { md: "24px", xs: "20px" },
                      fontWeight: 600,
                      fontStyle: "normal",
                      textTransform: "capitalize",
                      ml: 2,
                    }}
                  >
                    Filters
                  </Typography>
                </Box>
                {/* Filters */}
                <Box sx={{ width: "100%" }}>
                  {/* Buy now */}
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                    sx={{
                      width: "100%",
                      background: "transparent",
                      borderRadius: "5px",
                      boxShadow: "none",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "white",
                          fontSize: "16px",
                          lineHeight: "19.2px",
                          fontWeight: 600,
                          fontStyle: "normal",
                        }}
                      >
                        Buy now
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "#737373",
                          fontSize: "16px",
                          lineHeight: "19px",
                          fontWeight: 400,
                          fontStyle: "normal",
                        }}
                      >
                        Nulla facilisi. Phasellus sollicitudin nulla et quam
                        mattis feugiat. Aliquam eget maximus est, id dignissim
                        quam.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  {/* Buy now */}
                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                    sx={{
                      width: "100%",
                      background: "transparent",
                      borderRadius: "5px",
                      boxShadow: "none",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "white",
                          fontSize: "16px",
                          lineHeight: "19.2px",
                          fontWeight: 600,
                          fontStyle: "normal",
                        }}
                      >
                        Buy now
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "#737373",
                          fontSize: "16px",
                          lineHeight: "19px",
                          fontWeight: 400,
                          fontStyle: "normal",
                        }}
                      >
                        Nulla facilisi. Phasellus sollicitudin nulla et quam
                        mattis feugiat. Aliquam eget maximus est, id dignissim
                        quam.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  {/* background */}
                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                    sx={{
                      width: "100%",
                      background: "transparent",
                      borderRadius: "5px",
                      boxShadow: "none",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "white",
                          fontSize: "16px",
                          lineHeight: "19.2px",
                          fontWeight: 600,
                          fontStyle: "normal",
                        }}
                      >
                        background
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "#737373",
                          fontSize: "16px",
                          lineHeight: "19px",
                          fontWeight: 400,
                          fontStyle: "normal",
                        }}
                      >
                        Nulla facilisi. Phasellus sollicitudin nulla et quam
                        mattis feugiat. Aliquam eget maximus est, id dignissim
                        quam.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  {/* Broom */}
                  <Accordion
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                    sx={{
                      width: "100%",
                      background: "transparent",
                      borderRadius: "5px",
                      boxShadow: "none",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "white",
                          fontSize: "16px",
                          lineHeight: "19.2px",
                          fontWeight: 600,
                          fontStyle: "normal",
                        }}
                      >
                        Broom
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "#737373",
                          fontSize: "16px",
                          lineHeight: "19px",
                          fontWeight: 400,
                          fontStyle: "normal",
                        }}
                      >
                        Nulla facilisi. Phasellus sollicitudin nulla et quam
                        mattis feugiat. Aliquam eget maximus est, id dignissim
                        quam.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  {/* Clothing*/}
                  <Accordion
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                    sx={{
                      width: "100%",
                      background: "transparent",
                      borderRadius: "5px",
                      boxShadow: "none",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "white",
                          fontSize: "16px",
                          lineHeight: "19.2px",
                          fontWeight: 600,
                          fontStyle: "normal",
                        }}
                      >
                        Clothing
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "#737373",
                          fontSize: "16px",
                          lineHeight: "19px",
                          fontWeight: 400,
                          fontStyle: "normal",
                        }}
                      >
                        Nulla facilisi. Phasellus sollicitudin nulla et quam
                        mattis feugiat. Aliquam eget maximus est, id dignissim
                        quam.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  {/* Extra*/}
                  <Accordion
                    expanded={expanded === "panel6"}
                    onChange={handleChange("panel6")}
                    sx={{
                      width: "100%",
                      background: "transparent",
                      borderRadius: "5px",
                      boxShadow: "none",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "white",
                          fontSize: "16px",
                          lineHeight: "19.2px",
                          fontWeight: 600,
                          fontStyle: "normal",
                        }}
                      >
                        Extra
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "#737373",
                          fontSize: "16px",
                          lineHeight: "19px",
                          fontWeight: 400,
                          fontStyle: "normal",
                        }}
                      >
                        Nulla facilisi. Phasellus sollicitudin nulla et quam
                        mattis feugiat. Aliquam eget maximus est, id dignissim
                        quam.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  {/* Eyes*/}
                  <Accordion
                    expanded={expanded === "panel7"}
                    onChange={handleChange("panel7")}
                    sx={{
                      width: "100%",
                      background: "transparent",
                      borderRadius: "5px",
                      boxShadow: "none",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "white",
                          fontSize: "16px",
                          lineHeight: "19.2px",
                          fontWeight: 600,
                          fontStyle: "normal",
                        }}
                      >
                        Eyes
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "#737373",
                          fontSize: "16px",
                          lineHeight: "19px",
                          fontWeight: 400,
                          fontStyle: "normal",
                        }}
                      >
                        Nulla facilisi. Phasellus sollicitudin nulla et quam
                        mattis feugiat. Aliquam eget maximus est, id dignissim
                        quam.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  {/* Hand*/}
                  <Accordion
                    expanded={expanded === "panel8"}
                    onChange={handleChange("panel8")}
                    sx={{
                      width: "100%",
                      background: "transparent",
                      borderRadius: "5px",
                      boxShadow: "none",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "white",
                          fontSize: "16px",
                          lineHeight: "19.2px",
                          fontWeight: 600,
                          fontStyle: "normal",
                        }}
                      >
                        Hand
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "#737373",
                          fontSize: "16px",
                          lineHeight: "19px",
                          fontWeight: 400,
                          fontStyle: "normal",
                        }}
                      >
                        Nulla facilisi. Phasellus sollicitudin nulla et quam
                        mattis feugiat. Aliquam eget maximus est, id dignissim
                        quam.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  {/* Head*/}
                  <Accordion
                    expanded={expanded === "panel9"}
                    onChange={handleChange("panel9")}
                    sx={{
                      width: "100%",
                      background: "transparent",
                      borderRadius: "5px",
                      boxShadow: "none",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "white",
                          fontSize: "16px",
                          lineHeight: "19.2px",
                          fontWeight: 600,
                          fontStyle: "normal",
                        }}
                      >
                        Head
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "#737373",
                          fontSize: "16px",
                          lineHeight: "19px",
                          fontWeight: 400,
                          fontStyle: "normal",
                        }}
                      >
                        Nulla facilisi. Phasellus sollicitudin nulla et quam
                        mattis feugiat. Aliquam eget maximus est, id dignissim
                        quam.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  {/* Helmet*/}
                  <Accordion
                    expanded={expanded === "panel10"}
                    onChange={handleChange("panel10")}
                    sx={{
                      width: "100%",
                      background: "transparent",
                      borderRadius: "5px",
                      boxShadow: "none",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "white",
                          fontSize: "16px",
                          lineHeight: "19.2px",
                          fontWeight: 600,
                          fontStyle: "normal",
                        }}
                      >
                        Helmet
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "#737373",
                          fontSize: "16px",
                          lineHeight: "19px",
                          fontWeight: 400,
                          fontStyle: "normal",
                        }}
                      >
                        Nulla facilisi. Phasellus sollicitudin nulla et quam
                        mattis feugiat. Aliquam eget maximus est, id dignissim
                        quam.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  {/* Neckhole*/}
                  <Accordion
                    expanded={expanded === "panel11"}
                    onChange={handleChange("panel11")}
                    sx={{
                      width: "100%",
                      background: "transparent",
                      borderRadius: "5px",
                      boxShadow: "none",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "white",
                          fontSize: "16px",
                          lineHeight: "19.2px",
                          fontWeight: 600,
                          fontStyle: "normal",
                        }}
                      >
                        Neckhole
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "#737373",
                          fontSize: "16px",
                          lineHeight: "19px",
                          fontWeight: 400,
                          fontStyle: "normal",
                        }}
                      >
                        Nulla facilisi. Phasellus sollicitudin nulla et quam
                        mattis feugiat. Aliquam eget maximus est, id dignissim
                        quam.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  {/* Skin*/}
                  <Accordion
                    expanded={expanded === "panel12"}
                    onChange={handleChange("panel12")}
                    sx={{
                      width: "100%",
                      background: "transparent",
                      borderRadius: "5px",
                      boxShadow: "none",
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "white",
                          fontSize: "16px",
                          lineHeight: "19.2px",
                          fontWeight: 600,
                          fontStyle: "normal",
                        }}
                      >
                        Skin
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "#737373",
                          fontSize: "16px",
                          lineHeight: "19px",
                          fontWeight: 400,
                          fontStyle: "normal",
                        }}
                      >
                        Nulla facilisi. Phasellus sollicitudin nulla et quam
                        mattis feugiat. Aliquam eget maximus est, id dignissim
                        quam.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Box>
            </Grid>
            <Grid item md={10}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: { md: 0, xs: 6 },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: { md: "start", xs: "center" },
                    flexDirection: "column",
                  }}
                >
                  {/* Type switchbar */}
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: { md: "space-between", xs: "center" },
                      alignItems: "center",
                      flexDirection: { md: "row", xs: "column" },
                      mt: { md: 2 },
                    }}
                  >
                    {/* Types */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        maxWidth: { md: "auto", xs: "100%" },
                        overflowY: "auto",
                        pl: { sm: 0, xs: 14 },
                      }}
                    >
                      {Type_Buttons.map((item, index) => {
                        return (
                          <Button
                            key={index}
                            variant="text"
                            onClick={item.fuc}
                            sx={
                              item.Current_State
                                ? {
                                    p: 0,
                                    minWidth: { md: "148px", xs: "100px" },
                                    height: "46px",
                                    borderRadius: "50px",
                                    fontFamily: "Syne",
                                    color: "371A45",
                                    fontSize: { md: "16px", xs: "14px" },
                                    lineHeight: "24px",
                                    fontWeight: 600,
                                    background: "#FFFFFF",
                                    fontStyle: "normal",
                                    textTransform: "capitalize",
                                    boxShadow:
                                      "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                    "&:hover": {
                                      background: "#FFFFFF",
                                    },
                                    whiteSpace: "nowrap",
                                    mx: 1,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }
                                : {
                                    p: 0,
                                    minWidth: { md: "148px", xs: "100px" },
                                    height: "46px",
                                    borderRadius: "50px",
                                    fontFamily: "Syne",
                                    color: "white",
                                    fontSize: { md: "16px", xs: "14px" },
                                    lineHeight: "24px",
                                    fontWeight: 600,
                                    fontStyle: "normal",
                                    textTransform: "capitalize",
                                    "&:hover": {},
                                    whiteSpace: "nowrap",
                                    mx: 1,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }
                            }
                          >
                            <Box
                              sx={{
                                width: "24px",
                                height: "24px",
                                borderRadius: "50%",
                                overflow: "hidden",
                                mr: 1,
                              }}
                            >
                              <img
                                src={
                                  item.Current_State
                                    ? item.Ico_Active
                                    : item.Ico_Non_Active
                                }
                                alt="logo"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "contain",
                                }}
                              />
                            </Box>
                            {item.Name}
                          </Button>
                        );
                      })}
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: { md: "center", xs: "space-between" },
                        alignItems: "center",
                        width: { md: "auto", xs: "100%" },
                        px: { md: 0, xs: 2 },
                        mt: { md: 0, xs: 4 },
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Syne",
                          color: "white",
                          fontSize: { md: "20px", xs: "18px" },
                          lineHeight: { md: "24px", xs: "24px" },
                          fontWeight: 700,
                          fontStyle: "normal",
                          textTransform: "capitalize",
                        }}
                      >
                        Recently Listed
                      </Typography>
                      {/* Group Button */}
                      <Box
                        sx={{
                          width: "71px",
                          height: "32px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          border: "1px solid #BA9F33",
                          borderRadius: "5px",
                          ml: { md: 8 },
                        }}
                      >
                        <Box
                          sx={{
                            width: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                        >
                          <Box
                            onClick={() => {
                              Set_GridView(true);
                              Set_AppView(false);
                            }}
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={
                                GridView
                                  ? "/assets/gridGolden.svg"
                                  : "/assets/gridWhite.svg"
                              }
                              alt="logo"
                              style={{
                                width: "18px",
                                height: "18px",
                                objectFit: "contain",
                              }}
                            />
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            width: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                        >
                          <Box
                            onClick={() => {
                              Set_GridView(false);
                              Set_AppView(true);
                            }}
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={
                                AppView
                                  ? "/assets/appGolden.svg"
                                  : "/assets/appWhite.svg"
                              }
                              alt="logo"
                              style={{
                                width: "18px",
                                height: "18px",
                                objectFit: "contain",
                              }}
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  {/* Cards */}
                  <Box
                    sx={{
                      flexGrow: 1,
                      width: { md: "90%", xs: "100%" },
                      mt: 4,
                    }}
                  >
                    <Grid
                      container
                      columnSpacing={{ md: 1 }}
                      rowSpacing={{ md: 1, xs: 4 }}
                    >
                      {CardItems.map((item, index) => {
                        return (
                          <Grid key={index} item xs={12} sx={6} md={4}>
                            <Box
                              sx={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "start",
                                flexDirection: "column",
                                background: "#232222",
                                borderRadius: "5px",
                                p: 1,
                              }}
                            >
                              {/* Image */}
                              <Box
                                sx={{
                                  width: "100%",
                                  height: "335px",
                                  borderTopLeftRadius: "5px",
                                  borderTopRightRadius: "5px",
                                  overflow: "hidden",
                                }}
                              >
                                <img
                                  src={item.imgURL}
                                  alt="1"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                  }}
                                />
                              </Box>

                              {/* Tags */}
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "end",
                                  alignItems: "center",
                                  mt: -1,
                                  px: 2,
                                }}
                              >
                                {/* tag1 */}
                                <Box
                                  sx={{
                                    background: "#232222",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    px: 1,
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      fontFamily: "Syne",
                                      color: "white",
                                      fontSize: "16px",
                                      lineHeight: "19.2px",
                                      fontWeight: 400,
                                      fontStyle: "normal",
                                    }}
                                  >
                                    {item.tag1}
                                  </Typography>
                                </Box>
                                {/* tag2 */}
                                <Box
                                  sx={{
                                    background: "#232222",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    px: 1,
                                    ml: 1,
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      fontFamily: "Syne",
                                      color: "white",
                                      fontSize: "16px",
                                      lineHeight: "19.2px",
                                      fontWeight: 400,
                                      fontStyle: "normal",
                                    }}
                                  >
                                    {item.tag2}
                                  </Typography>
                                </Box>
                              </Box>
                              <Typography
                                sx={{
                                  fontFamily: "Syne",
                                  color: "white",
                                  fontSize: { md: "24px", xs: "20px" },
                                  lineHeight: { md: "28.8px", xs: "26px" },
                                  fontWeight: 700,
                                  fontStyle: "normal",
                                  textTransform: "capitalize",
                                  mt: 3,
                                }}
                              >
                                {item.Name}
                              </Typography>
                              <Typography
                                sx={{
                                  fontFamily: "Syne",
                                  color: "white",
                                  fontSize: "18px",
                                  lineHeight: "21.6px",
                                  fontWeight: 700,
                                  fontStyle: "normal",
                                  textTransform: "capitalize",
                                  mt: 1,
                                }}
                                className="Grad"
                              >
                                {item.SubTitle}
                              </Typography>
                              <Box
                                sx={{
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  mt: 2,
                                  mb: 1,
                                }}
                              >
                                <Box
                                  sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                  }}
                                >
                                  <Box
                                    sx={{
                                      width: "20px",
                                      height: "20px",
                                      mr: 1,
                                    }}
                                  >
                                    <img
                                      src={"/assets/eth.svg"}
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
                                      color: "#EDEDED",
                                      fontSize: "14px",
                                      lineHeight: "17px",
                                      fontWeight: 400,
                                      fontStyle: "normal",
                                      textTransform: "capitalize",
                                    }}
                                  >
                                    {item.Price}
                                  </Typography>
                                </Box>
                                <Button
                                  variant="outlined"
                                  sx={{
                                    width: "123px",
                                    height: "41px",
                                    borderRadius: "3px",
                                    border: "1px solid #737373",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    "&:hover": {
                                      border: "1px solid #737373",
                                    },
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      fontFamily: "Syne",
                                      color: "#1FF675",
                                      fontSize: "16px",
                                      lineHeight: "19.2px",
                                      fontWeight: 600,
                                      fontStyle: "normal",
                                      textTransform: "capitalize",
                                    }}
                                    className="Grad"
                                  >
                                    Details
                                  </Typography>
                                </Button>
                              </Box>
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                  <NavLink
                    to="/nftdetails"
                    style={{ textDecoration: "none", alignSelf: "center" }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        p: 0,
                        width: "194px",
                        height: "56px",
                        borderRadius: "5px",
                        fontFamily: "Syne",
                        color: "#9855F5",
                        fontSize: "20px",
                        lineHeight: "24px",
                        fontWeight: 600,
                        fontStyle: "normal",
                        textTransform: "capitalize",
                        background:
                          "linear-gradient(90deg, #E0D1D5 0%, #D6D6D6 100%)",
                        boxShadow: "none",
                        "&:hover": {
                          background:
                            "linear-gradient(90deg, #E0D1D5 0%, #D6D6D6 100%)",
                          boxShadow: "none",
                        },
                        mt: 6,
                      }}
                    >
                      View all
                    </Button>
                  </NavLink>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default CollectionDetail;

const Buttons = [
  {
    Text1: "Floor",
    Text2: "0.199 ◎",
  },
  {
    Text1: "Listed",
    Text2: "1,121",
  },
  {
    Text1: "Total Vol",
    Text2: "6,071.98 ◎",
  },
  {
    Text1: "Avg.Sale(24h)",
    Text2: "0.43 ◎",
  },
  {
    Text1: "Owners",
    Text2: "1,200",
  },
  {
    Text1: "Total Supply",
    Text2: "9.8K",
  },
];

const CardItems = [
  {
    imgURL: "/assets/Collection/1.svg",
    Name: "ABC Rider #2681",
    SubTitle: "ABC Rider",
    Price: "277.9k",
    Detail_BTN_URL: "",
    tag1: "R  1486",
    tag2: "ME  1724 / 1941",
  },
  {
    imgURL: "/assets/Collection/2.svg",
    Name: "ABC Rider #2681",
    SubTitle: "ABC Rider",
    Price: "277.9k",
    Detail_BTN_URL: "",
    tag1: "R  1486",
    tag2: "ME  1724 / 1941",
  },
  {
    imgURL: "/assets/Collection/3.svg",
    Name: "ABC Rider #2681",
    SubTitle: "ABC Rider",
    Price: "277.9k",
    Detail_BTN_URL: "",
    tag1: "R  1486",
    tag2: "ME  1724 / 1941",
  },
  {
    imgURL: "/assets/Collection/4.svg",
    Name: "ABC Rider #2681",
    SubTitle: "ABC Rider",
    Price: "277.9k",
    Detail_BTN_URL: "",
    tag1: "R  1486",
    tag2: "ME  1724 / 1941",
  },
  {
    imgURL: "/assets/Collection/5.svg",
    Name: "ABC Rider #2681",
    SubTitle: "ABC Rider",
    Price: "277.9k",
    Detail_BTN_URL: "",
    tag1: "R  1486",
    tag2: "ME  1724 / 1941",
  },
  {
    imgURL: "/assets/Collection/6.svg",
    Name: "ABC Rider #2681",
    SubTitle: "ABC Rider",
    Price: "277.9k",
    Detail_BTN_URL: "",
    tag1: "R  1486",
    tag2: "ME  1724 / 1941",
  },
];
