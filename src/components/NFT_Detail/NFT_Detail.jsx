import React, { useState, useRef } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import ShareIcon from "@mui/icons-material/Share";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function NFT_Detail() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: 3,
        }}
      >
        {/* connect wallet page */}
        <Box sx={{ flexGrow: 1, width: "100%", px: { md: 3 } }}>
          <Grid container spacing={2}>
            <Grid xs={12} md={6}>
              {/* NFT image */}
              <Box
                sx={{
                  width: "100%",
                  height: "850px",
                }}
              >
                <img
                  src="/assets/nftdetail.svg"
                  alt="logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>
            <Grid xs={12} md={6}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Syne",
                    color: "white",
                    fontSize: { md: "38px", xs: "28px" },
                    lineHeight: { md: "45.6px", xs: "36px" },
                    fontWeight: 700,
                    fontStyle: "normal",
                    textTransform: "capitalize",
                  }}
                >
                  Degen Sweeper #236
                </Typography>

                {/* Share */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Syne",
                      color: "#9E9D9D",
                      fontSize: "16px",
                      lineHeight: "19px",
                      fontWeight: 600,
                      fontStyle: "normal",
                      textTransform: "capitalize",
                    }}
                  >
                    Degen Sweeper
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      ml: 3,
                    }}
                  >
                    <ShareIcon sx={{ color: "#BA9F33" }} />
                    <Typography
                      className="Grad"
                      sx={{
                        fontFamily: "Syne",
                        fontSize: "16px",
                        lineHeight: "19px",
                        fontWeight: 700,
                        fontStyle: "normal",
                        textTransform: "capitalize",
                        ml: 0.5,
                      }}
                    >
                      share
                    </Typography>
                  </Box>
                </Box>

                {/* Current price */}
                <Box
                  sx={{
                    background: "#232222",
                    border: "0.25px solid #737373",
                    boxShadow: "7px 10px 29px rgba(0, 0, 0, 0.25)",
                    borderRadius: "5px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "start",
                    flexDirection: "column",
                    px: 3,
                    py: 2,
                    mt: 2.5,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Syne",
                      color: "#737373",
                      fontSize: "16px",
                      lineHeight: "19px",
                      fontWeight: 400,
                      fontStyle: "normal",
                      textTransform: "capitalize",
                      ml: 0.5,
                    }}
                  >
                    Current Price
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mt: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: { sm: "24px", xs: "24px" },
                        height: "24px",
                      }}
                    >
                      <img
                        src="/assets/pricetag.svg"
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
                        color: "white",
                        fontSize: { md: "20px", xs: "18px" },
                        lineHeight: "24px",
                        fontWeight: 600,
                        fontStyle: "normal",
                        textTransform: "capitalize",
                        ml: 2,
                      }}
                    >
                      15.39 ETH
                    </Typography>
                  </Box>

                  {/* pay in eth */}
                  <Box
                    sx={{
                      width: "100%",
                      mt: 3,
                    }}
                  >
                    <Accordion
                      expanded={expanded === "panel1"}
                      onChange={handleChange("panel1")}
                      sx={{
                        width: "100%",
                        minHeight: "57px",
                        background: "#171717",
                        borderRadius: "5px",
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          <ExpandMoreIcon sx={{ color: "#C5AC49" }} />
                        }
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                      >
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                          }}
                        >
                          {/* Eth ICon */}
                          <Box
                            sx={{
                              width: "26px",
                              height: "26px",
                            }}
                          >
                            <img
                              src="/assets/eth.svg"
                              alt="logo"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                              }}
                            />
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "start",
                              flexDirection: "column",
                              ml: 2,
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Syne",
                                color: "white",
                                fontSize: "16px",
                                lineHeight: "19px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                textTransform: "capitalize",
                              }}
                            >
                              Pay in ETH
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: "Syne",
                                color: "#737373",
                                fontSize: "12px",
                                lineHeight: "14.4px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                textTransform: "capitalize",
                              }}
                            >
                              Connect support wallet .{" "}
                              <Link
                                href={""}
                                sx={{
                                  color: "#C5AC49",
                                  textDecoration: "none",
                                }}
                              >
                                Fastest
                              </Link>
                            </Typography>
                          </Box>
                        </Box>
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

                  {/* Connect Wallet Button */}
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
                      mt: 3,
                    }}
                  >
                    Connect Wallet
                  </Button>
                </Box>

                {/* About dogecoin */}
                <Box
                  sx={{
                    width: "100%",
                    mt: 2,
                  }}
                >
                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                    sx={{
                      width: "100%",
                      background: "#232222",
                      borderRadius: "5px",
                      boxShadow: "none",
                      py: 1,
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "#C5AC49" }} />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                        }}
                      >
                        {/* Eth ICon */}
                        <Box
                          sx={{
                            width: "42px",
                            height: "42px",
                          }}
                        >
                          <img
                            src="/assets/useryellow.svg"
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
                            color: "white",
                            fontSize: { md: "20px", xs: "18px" },
                            lineHeight: "24px",
                            fontWeight: 600,
                            fontStyle: "normal",
                            ml: 2,
                          }}
                        >
                          About Degen Sweepers
                        </Typography>
                      </Box>
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

                {/* Attributes */}
                <Box
                  sx={{
                    width: "100%",
                    mt: 2,
                  }}
                >
                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                    sx={{
                      width: "100%",
                      background: "#232222",
                      borderRadius: "5px",
                      boxShadow: "none",
                      py: 1,
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "#C5AC49" }} />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header"
                    >
                      <Box
                        sx={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "start",
                          alignItems: "center",
                        }}
                      >
                        {/* Eth ICon */}
                        <Box
                          sx={{
                            width: "42px",
                            height: "42px",
                          }}
                        >
                          <img
                            src="/assets/attributes.svg"
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
                            color: "white",
                            fontSize: { md: "20px", xs: "18px" },
                            lineHeight: "24px",
                            fontWeight: 600,
                            fontStyle: "normal",
                            ml: 2,
                          }}
                        >
                          Attributes
                        </Typography>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box sx={{ flexGrow: 1, width: "100%" }}>
                        <Grid container spacing={2}>
                          {Attributes_Card.map((item, index) => {
                            return (
                              <Grid key={index} md={4} xs={6}>
                                <Box
                                  sx={{
                                    width: "100%",
                                    background: "#333333",
                                    borderRadius: "5px",
                                    p: 1.5,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "start",
                                    flexDirection: "column",
                                  }}
                                >
                                  <Typography
                                    sx={{
                                      fontFamily: "Syne",
                                      color: "#737373",
                                      fontSize: "16px",
                                      lineHeight: "19.2px",
                                      fontWeight: 400,
                                      fontStyle: "normal",
                                    }}
                                  >
                                    {item.Type}
                                  </Typography>
                                  <Typography
                                    sx={{
                                      fontFamily: "Syne",
                                      color: "#EDEDED",
                                      fontSize: { md: "20px", xs: "18px" },
                                      lineHeight: "24px",
                                      fontWeight: 600,
                                      fontStyle: "normal",
                                      textTransform: "capitalize",
                                      mt: 1,
                                    }}
                                  >
                                    {item.Title}
                                  </Typography>
                                  <Typography
                                    className="Grad"
                                    sx={{
                                      fontFamily: "Syne",
                                      fontSize: "14px",
                                      lineHeight: "18.23px",
                                      fontWeight: 400,
                                      fontStyle: "normal",
                                      mt: 0.5,
                                    }}
                                  >
                                    {item.trait}
                                  </Typography>
                                </Box>
                              </Grid>
                            );
                          })}
                        </Grid>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default NFT_Detail;

const Attributes_Card = [
  {
    Type: "Background",
    Title: "Grey",
    trait: "4.5% have this trait",
  },
  {
    Type: "Broom",
    Title: "Spikes",
    trait: "4.4% have this trait",
  },
  {
    Type: "Skin",
    Title: "Mint",
    trait: "6.4% have this trait",
  },
  {
    Type: "Mouth",
    Title: "Grin",
    trait: "5.2% have this trait",
  },
  {
    Type: "Head",
    Title: "Pink Hawk",
    trait: "4.2% have this trait",
  },
  {
    Type: "Eyes",
    Title: "Toxic Pink",
    trait: "2.8% have this trait",
  },
  {
    Type: "Clothing",
    Title: "Go to prison",
    trait: "2.6% have this trait",
  },
];
