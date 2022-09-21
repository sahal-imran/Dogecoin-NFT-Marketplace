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
import { Line, defaults } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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
                  height: {md:"850px",xs:"auto"},
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

        <Box sx={{ flexGrow: 1, width: "100%", px: { md: 3 }, mt: 4 }}>
          <Grid container spacing={3}>
            <Grid md={6} xs={12}>
              <Box sx={{ width: "100%" }}>
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
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
                          src="/assets/price.svg"
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
                        Price History
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box sx={{ width: "100%", minHeight: "200px" }}>
                      <Line
                        data={{
                          labels: [
                            "1/20",
                            "1/24",
                            "1/29",
                            "2/03",
                            "2/07",
                            "2/12",
                            "2/17",
                          ],
                          datasets: [
                            {
                              label: "Dataset",
                              data: [-4.0, -8.0, -6.0, -4.0, -2.0, 0.0, -4.0],
                              borderColor: "#707070",
                              backgroundColor: "#707070",
                              pointStyle: "circle",
                              pointRadius: 4,
                              pointHoverRadius: 6,
                              borderWidth: 1,
                            },
                          ],
                        }}
                        options={{
                          maintainAspectRatio: false,
                          scales: {
                            yAxes: [
                              {
                                ticks: {
                                  beginAtZero: true,
                                },
                              },
                            ],
                          },
                          plugins: {
                            legend: {
                              display: false,
                            },
                          },
                        }}
                      />
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Grid>
            <Grid md={6} xs={12}>
              <Box sx={{ width: "100%" }}>
                <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
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
                          src="/assets/details.svg"
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
                        Details
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
            </Grid>
          </Grid>
        </Box>

        {/* Offer */}
        <Box sx={{ width: "100%", px: { md: 3 }, mt: 3 }}>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
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
                    src="/assets/offer.svg"
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
                  Offer (1)
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
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Activities */}
        <Box sx={{ width: "100%", px: { md: 3 }, mt: 3 }}>
          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
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
                    src="/assets/price.svg"
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
                  Activites
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
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* More from Collection */}
        <Box sx={{ width: "100%", px: { md: 3 }, mt: 3 }}>
          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
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
                    src="/assets/collection.svg"
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
                  More from this collecti0n
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ width: "100%" }}>
                {/* cards */}
                <Box sx={{ flexGrow: 1, width: "100%" }}>
                  <Grid container spacing={2}>
                    {Cards.map((item, index) => {
                      return (
                        <Grid key={index} xs={12} sm={6} md={4}>
                          <Box
                            sx={{
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "start",
                              flexDirection: "column",
                              background: "#333333",
                              borderRadius: "5px",
                              p: 1,
                            }}
                          >
                            {/* Image */}
                            <Box
                              sx={{
                                width: "100%",
                                height: "367px",
                                borderTopLeftRadius: "5px",
                                borderTopRightRadius: "5px",
                                overflow: "hidden",
                              }}
                            >
                              <img
                                src={item.URL}
                                alt="1"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "cover",
                                }}
                              />
                            </Box>

                            {/* Text */}
                            <Typography
                              sx={{
                                fontFamily: "Syne",
                                color: "white",
                                fontSize: { md: "24px", xs: "20px" },
                                lineHeight: { md: "28.8px", xs: "26px" },
                                fontWeight: 700,
                                fontStyle: "normal",
                                textTransform: "capitalize",
                                alignSelf: "start",
                                mt: 3,
                              }}
                            >
                              {item.Name}
                            </Typography>
                            <Box
                              sx={{
                                mt: 2,
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                              }}
                            >
                              <Box
                                sx={{
                                  width: "123px",
                                  height: "41px",
                                  borderRadius: "3px",
                                  border: "1px solid #1FF775",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
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
                                >
                                  {item.Price}
                                </Typography>
                              </Box>
                              <Typography
                                sx={{
                                  fontFamily: "Syne",
                                  color: "#737373",
                                  fontSize: "18px",
                                  lineHeight: "27px",
                                  fontWeight: 400,
                                  fontStyle: "normal",
                                  alignSelf: "end",
                                }}
                              >
                                {item.Stocks}
                              </Typography>
                            </Box>

                            <Box
                              sx={{
                                width: "100%",
                                height: "1px",
                                background: "#000000",
                                mt: 3,
                              }}
                            ></Box>
                            <Typography
                              sx={{
                                fontFamily: "Syne",
                                color: "#737373",
                                fontSize: "16px",
                                lineHeight: "24px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                textAlign: "center",
                                mt: 2,
                              }}
                            >
                              {item.Hightest_Bid}
                            </Typography>
                          </Box>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
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

const Cards = [
  {
    to: "/nftdetails",
    URL: "/assets/Upcoming collection/1.svg",
    Name: "Degen Sweeper #236",
    Price: "2.56 ETH",
    Stocks: "3 in Stock",
    Hightest_Bid: "Highest bid 0.001 ETH",
  },
  {
    to: "/nftdetails",
    URL: "/assets/Upcoming collection/2.svg",
    Name: "Degen Sweeper #236",
    Price: "2.56 ETH",
    Stocks: "3 in Stock",
    Hightest_Bid: "Highest bid 0.001 ETH",
  },
  {
    to: "/nftdetails",
    URL: "/assets/Upcoming collection/3.svg",
    Name: "Degen Sweeper #236",
    Price: "2.56 ETH",
    Stocks: "3 in Stock",
    Hightest_Bid: "Highest bid 0.001 ETH",
  },
];
