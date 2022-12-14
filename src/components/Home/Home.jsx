import React, { useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";

const settings = {
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: false,
  // centerMode: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// For Treading Collection
const settingsTreading = {
  className: "center",
  infinite: true,
  slidesToShow: 3,
  speed: 500,
  rows: 3,
  slidesPerRow: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        rows: 3,
        slidesPerRow: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        rows: 3,
        slidesPerRow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 3,
        slidesPerRow: 1,
      },
    },
  ],
};

//
const settingsAution = {
  dots: false,
  infinite: true,
  autoplay: true,
  arrows: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function Home() {
  const Slider_ref = useRef();
  const Treading_Slider_ref = useRef();
  const Aution_Slider_ref = useRef();

  const Next = () => {
    Slider_ref.current.slickNext();
  };
  const Prev = () => {
    Slider_ref.current.slickPrev();
  };

  const Treading_Next = () => {
    Treading_Slider_ref.current.slickNext();
  };
  const Treading_Prev = () => {
    Treading_Slider_ref.current.slickPrev();
  };

  const Aution_Next = () => {
    Aution_Slider_ref.current.slickNext();
  };
  const Aution_Prev = () => {
    Aution_Slider_ref.current.slickPrev();
  };

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
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: { md: "50%", xs: "100%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              flexDirection: "column",
              p: { sm: 6, xs: 3 },
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
                my: { lg: 2, xs: 1 },
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

        {/* Upcoming Collection */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mt: 6,
            overflow: "hidden",
          }}
        >
          {/* Title bar */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: { md: "space-between", xs: "center" },
              alignItems: "center",
              flexDirection: {
                md: "row",
                xs: "column",
              },
            }}
          >
            {/* Left */}
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
                  color: "white",
                  fontSize: { md: "36px", xs: "24px" },
                  lineHeight: { md: "43.2px", xs: "30px" },
                  fontWeight: 500,
                  fontStyle: "normal",
                  textTransform: "capitalize",
                }}
              >
                Upcoming Collection
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "194px",
                  height: "44px",
                  background: "#232222",
                  borderRadius: "5px",
                  ml: 3,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Syne",
                    color: "white",
                    fontSize: { md: "18px", xs: "16px" },
                    lineHeight: { md: "21.6px", xs: "20px" },
                    fontWeight: 500,
                    fontStyle: "normal",
                    textTransform: "capitalize",
                  }}
                >
                  18H : 16M : 33S
                </Typography>
              </Box>
            </Box>

            {/* Right */}
            <Box
              sx={{
                display: "flex",
                justifyContent: { md: "center", xs: "space-between" },
                alignItems: "center",
                width: { md: "unset", xs: "100%" },
                mt: { md: 0, xs: 3 },
              }}
            >
              <Button
                onClick={Prev}
                variant="contained"
                sx={{
                  minWidth: "unset",
                  p: 0,
                  width: "34px",
                  height: "35px",
                  borderRadius: "7px",
                  background: "#2F2F2F",
                  boxShadow: "none",
                  "&:hover": {
                    background: "#BEA33A",
                    boxShadow: "none",
                  },
                  "&:hover svg": {
                    color: "white",
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ArrowBackIosNewIcon sx={{ color: "#B4B4B4" }} />
              </Button>
              <Button
                onClick={Next}
                variant="contained"
                sx={{
                  minWidth: "unset",
                  p: 0,
                  width: "34px",
                  height: "35px",
                  borderRadius: "7px",
                  background: "#2F2F2F",
                  boxShadow: "none",
                  "&:hover": {
                    background: "#BEA33A",
                    boxShadow: "none",
                  },
                  "&:hover svg": {
                    color: "white",
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  ml: 1,
                }}
              >
                <ArrowForwardIosIcon sx={{ color: "#B4B4B4" }} />
              </Button>
            </Box>
          </Box>

          {/* Slider */}
          <Box
            sx={{ position: "relative", width: "100%", mt: { md: 4, xs: 2 } }}
          >
            <Slider ref={Slider_ref} {...settings} style={{ width: "100%" }}>
              {Upcoming_Collection.map((item, index) => {
                return (
                  <Box key={index} sx={{ px: { sm: 1 } }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
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
                          height: "367px",
                          borderTopLeftRadius: "5px",
                          borderTopRightRadius: "5px",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={item.Ico}
                          alt="1"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
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
                          color: "#737373",
                          fontSize: { md: "18px", xs: "16px" },
                          lineHeight: { md: "27px", xs: "26px" },
                          fontWeight: 400,
                          fontStyle: "normal",
                          textAlign: "center",
                          my: 1,
                        }}
                      >
                        {item.des}
                      </Typography>

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
                        {item.Socail_Links.map((socialLink, index) => {
                          return (
                            <Link
                              key={index}
                              href={socialLink.ref}
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
                                src={socialLink.icoURL}
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
                );
              })}
            </Slider>
          </Box>
        </Box>

        {/* Treading Collection */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mt: 10,
            overflow: "hidden",
          }}
        >
          {/* Title bar */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: { md: "space-between", xs: "center" },
              alignItems: "center",
              flexDirection: {
                md: "row",
                xs: "column",
              },
            }}
          >
            {/* Left */}
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
                  color: "white",
                  fontSize: { md: "36px", xs: "24px" },
                  lineHeight: { md: "43.2px", xs: "30px" },
                  fontWeight: 500,
                  fontStyle: "normal",
                  textTransform: "capitalize",
                }}
              >
                Treading Collection
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "194px",
                  height: "44px",
                  background: "#232222",
                  borderRadius: "5px",
                  ml: 3,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Syne",
                    color: "white",
                    fontSize: { md: "18px", xs: "16px" },
                    lineHeight: { md: "21.6px", xs: "20px" },
                    fontWeight: 500,
                    fontStyle: "normal",
                    textTransform: "capitalize",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  24 Hours
                  <Box sx={{ width: "20px", height: "20px", ml: 3 }}>
                    <img
                      src="/assets/outlinedArrowDown.svg"
                      alt="logo"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </Typography>
              </Box>
            </Box>

            {/* Right */}
            <Box
              sx={{
                display: "flex",
                justifyContent: { md: "center", xs: "space-between" },
                alignItems: "center",
                width: { md: "unset", xs: "100%" },
                mt: { md: 0, xs: 3 },
              }}
            >
              <Button
                onClick={Treading_Prev}
                variant="contained"
                sx={{
                  minWidth: "unset",
                  p: 0,
                  width: "34px",
                  height: "35px",
                  borderRadius: "7px",
                  background: "#2F2F2F",
                  boxShadow: "none",
                  "&:hover": {
                    background: "#BEA33A",
                    boxShadow: "none",
                  },
                  "&:hover svg": {
                    color: "white",
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ArrowBackIosNewIcon sx={{ color: "#B4B4B4" }} />
              </Button>
              <Button
                onClick={Treading_Next}
                variant="contained"
                sx={{
                  minWidth: "unset",
                  p: 0,
                  width: "34px",
                  height: "35px",
                  borderRadius: "7px",
                  background: "#2F2F2F",
                  boxShadow: "none",
                  "&:hover": {
                    background: "#BEA33A",
                    boxShadow: "none",
                  },
                  "&:hover svg": {
                    color: "white",
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  ml: 1,
                }}
              >
                <ArrowForwardIosIcon sx={{ color: "#B4B4B4" }} />
              </Button>
            </Box>
          </Box>

          {/* Slider */}
          <Box sx={{ position: "relative", width: "100%", mt: 6 }}>
            <Slider ref={Treading_Slider_ref} {...settingsTreading}>
              {Treading_Collection.map((item, index) => {
                return (
                  <Box key={index} sx={{ p: 1 }}>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        background: "#232222",
                        borderRadius: "10px",
                        overflow: "hidden",
                        p: 1,
                      }}
                    >
                      {/* Left */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        {/* Image */}
                        <Box
                          sx={{
                            width: "77px",
                            height: "82px",
                            borderRadius: "10px",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            src={item.URL}
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
                              fontSize: { md: "24px", xs: "20px" },
                              lineHeight: { md: "28.8px", xs: "28px" },
                              fontWeight: 700,
                              fontStyle: "normal",
                              textTransform: "capitalize",
                            }}
                          >
                            {item.Name}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              mt: 3,
                            }}
                          >
                            <Typography
                              sx={{
                                fontFamily: "Syne",
                                color: "white",
                                fontSize: { md: "16px", xs: "14px" },
                                lineHeight: { md: "20px", xs: "18px" },
                                fontWeight: 400,
                                fontStyle: "normal",
                                textTransform: "capitalize",
                              }}
                            >
                              {item.Type}
                            </Typography>
                            {/* Eth Icon */}
                            <Box
                              sx={{
                                width: "20px",
                                height: "20px",
                                mx: 1,
                              }}
                            >
                              <img
                                src={item.CoinIco}
                                alt="logo"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectFit: "contain",
                                }}
                              />
                            </Box>
                            {/* Eth Amount */}
                            <Typography
                              sx={{
                                fontFamily: "Syne",
                                color: "white",
                                fontSize: { md: "16px", xs: "14px" },
                                lineHeight: { md: "20px", xs: "18px" },
                                fontWeight: 400,
                                fontStyle: "normal",
                                textTransform: "capitalize",
                              }}
                            >
                              {item.Amount}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>

                      {/* Right */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          sx={
                            item.Percent > 0
                              ? {
                                  fontFamily: "Syne",
                                  color: "#1FF675",
                                  fontSize: { md: "14px", xs: "12px" },
                                  lineHeight: { md: "17px", xs: "15px" },
                                  fontWeight: 600,
                                  fontStyle: "normal",
                                }
                              : {
                                  fontFamily: "Syne",
                                  color: "#DA0037",
                                  fontSize: { md: "14px", xs: "12px" },
                                  lineHeight: { md: "17px", xs: "15px" },
                                  fontWeight: 600,
                                  fontStyle: "normal",
                                }
                          }
                        >
                          {"+" + item.Percent + "%"}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            mt: 3,
                          }}
                        >
                          {/* Eth Icon */}
                          <Box
                            sx={{
                              width: "20px",
                              height: "20px",
                              mr: 1,
                            }}
                          >
                            <img
                              src={item.CoinIco}
                              alt="logo"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                              }}
                            />
                          </Box>
                          {/* Eth Amount */}
                          <Typography
                            sx={{
                              fontFamily: "Syne",
                              color: "white",
                              fontSize: { md: "16px", xs: "14px" },
                              lineHeight: { md: "20px", xs: "18px" },
                              fontWeight: 400,
                              fontStyle: "normal",
                              textTransform: "capitalize",
                            }}
                          >
                            {item.Amount}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Slider>
          </Box>
        </Box>

        {/* Aution */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            mt: 10,
            overflow: "hidden",
          }}
        >
          {/* Title bar */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: { md: "space-between", xs: "center" },
              alignItems: "center",
              flexDirection: {
                md: "row",
                xs: "column",
              },
            }}
          >
            {/* Left */}
            <Typography
              sx={{
                fontFamily: "Syne",
                color: "white",
                fontSize: { md: "36px", xs: "24px" },
                lineHeight: { md: "43.2px", xs: "30px" },
                fontWeight: 500,
                fontStyle: "normal",
                textTransform: "capitalize",
              }}
            >
              Aution
            </Typography>

            {/* Right */}
            <Box
              sx={{
                display: "flex",
                justifyContent: { md: "center", xs: "space-between" },
                alignItems: "center",
                width: { md: "unset", xs: "100%" },
                mt: { md: 0, xs: 3 },
              }}
            >
              <Button
              onClick={Aution_Prev}
                variant="contained"
                sx={{
                  minWidth: "unset",
                  p: 0,
                  width: "34px",
                  height: "35px",
                  borderRadius: "7px",
                  background: "#2F2F2F",
                  boxShadow: "none",
                  "&:hover": {
                    background: "#BEA33A",
                    boxShadow: "none",
                  },
                  "&:hover svg": {
                    color: "white",
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ArrowBackIosNewIcon sx={{ color: "#B4B4B4" }} />
              </Button>
              <Button
              onClick={Aution_Next}
                variant="contained"
                sx={{
                  minWidth: "unset",
                  p: 0,
                  width: "34px",
                  height: "35px",
                  borderRadius: "7px",
                  background: "#2F2F2F",
                  boxShadow: "none",
                  "&:hover": {
                    background: "#BEA33A",
                    boxShadow: "none",
                  },
                  "&:hover svg": {
                    color: "white",
                  },
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  ml: 1,
                }}
              >
                <ArrowForwardIosIcon sx={{ color: "#B4B4B4" }} />
              </Button>
            </Box>
          </Box>

          {/* Slider */}
          <Box
            sx={{ position: "relative", width: "100%", mt: { md: 4, xs: 2 } }}
          >
            <Slider ref={Aution_Slider_ref} {...settings} style={{ width: "100%" }}>
              {Aution_collection.map((item, index) => {
                return (
                  <Box key={index} sx={{ px: { sm: 1 } }}>
                    <Box
                      sx={{
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
                          color: "#737373",
                          fontSize: { md: "18px", xs: "16px" },
                          lineHeight: { md: "27px", xs: "26px" },
                          fontWeight: 400,
                          fontStyle: "normal",
                          textAlign: "start",
                          mt: 1,
                          mb: 4,
                        }}
                      >
                        {item.des}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "90%",
                        height: "80px",
                        background: "#BEA33A",
                        borderRadius: "50px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        m: "auto",
                        px: 2,
                        mt: -3,
                      }}
                    >
                      {/* Left */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "start",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Syne",
                            color: "#EDEDED",
                            fontSize: "16px",
                            lineHeight: "19.2px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            textTransform: "capitalize",
                          }}
                        >
                          Current Bid
                        </Typography>
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
                              src={item.CoinIco}
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
                            {item.Bid}
                          </Typography>
                        </Box>
                      </Box>

                      {/* Right */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "end",
                          flexDirection: "column",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "Syne",
                            color: "#EDEDED",
                            fontSize: "16px",
                            lineHeight: "19.2px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            textTransform: "capitalize",
                          }}
                        >
                          Ends in:
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: "Syne",
                            color: "#EDEDED",
                            fontSize: "16px",
                            lineHeight: "19.2px",
                            fontWeight: 700,
                            fontStyle: "normal",
                            textTransform: "capitalize",
                          }}
                        >
                          12H : 43M : 27S
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Slider>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;

const Upcoming_Collection = [
  {
    Name: "Boring Ape",
    Ico: "/assets/Upcoming collection/1.svg",
    des: "Consectetur adipiscing elit. Non mi viverra ut scelerisque. Ultrices enim ac lectus est egestas at. In convallis turpis sed egestas.",
    Socail_Links: [
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
    ],
  },
  {
    Name: "Boring Ape",
    Ico: "/assets/Upcoming collection/2.svg",
    des: "Consectetur adipiscing elit. Non mi viverra ut scelerisque. Ultrices enim ac lectus est egestas at. In convallis turpis sed egestas.",
    Socail_Links: [
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
    ],
  },
  {
    Name: "Boring Ape",
    Ico: "/assets/Upcoming collection/3.svg",
    des: "Consectetur adipiscing elit. Non mi viverra ut scelerisque. Ultrices enim ac lectus est egestas at. In convallis turpis sed egestas.",
    Socail_Links: [
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
    ],
  },
  {
    Name: "Boring Ape",
    Ico: "/assets/Upcoming collection/4.svg",
    des: "Consectetur adipiscing elit. Non mi viverra ut scelerisque. Ultrices enim ac lectus est egestas at. In convallis turpis sed egestas.",
    Socail_Links: [
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
    ],
  },
];

const Treading_Collection = [
  {
    URL: "/assets/Trending Collection/1.svg",
    Name: "Boring Ape",
    Type: "Floor",
    CoinIco: "/assets/eth.svg",
    Amount: "69.98",
    Percent: 92,
  },
  {
    URL: "/assets/Trending Collection/2.svg",
    Name: "Air Bender",
    Type: "Floor",
    CoinIco: "/assets/eth.svg",
    Amount: "69.98",
    Percent: 45,
  },
  {
    URL: "/assets/Trending Collection/3.svg",
    Name: "Air Bender",
    Type: "Floor",
    CoinIco: "/assets/eth.svg",
    Amount: "69.98",
    Percent: 45,
  },
  {
    URL: "/assets/Trending Collection/4.svg",
    Name: "Koala",
    Type: "Floor",
    CoinIco: "/assets/eth.svg",
    Amount: "69.98",
    Percent: 45,
  },
  {
    URL: "/assets/Trending Collection/5.svg",
    Name: "Skelet Guy",
    Type: "Floor",
    CoinIco: "/assets/eth.svg",
    Amount: "69.98",
    Percent: 45,
  },
  {
    URL: "/assets/Trending Collection/6.svg",
    Name: "Minions Gru",
    Type: "Floor",
    CoinIco: "/assets/eth.svg",
    Amount: "69.98",
    Percent: 38,
  },
  {
    URL: "/assets/Trending Collection/7.svg",
    Name: "Drop Bear",
    Type: "Floor",
    CoinIco: "/assets/eth.svg",
    Amount: "69.98",
    Percent: 92,
  },
  {
    URL: "/assets/Trending Collection/8.svg",
    Name: "Baby Ghost",
    Type: "Floor",
    CoinIco: "/assets/eth.svg",
    Amount: "69.98",
    Percent: -38,
  },
  {
    URL: "/assets/Trending Collection/9.svg",
    Name: "Lil??? Heroes",
    Type: "Floor",
    CoinIco: "/assets/eth.svg",
    Amount: "69.98",
    Percent: 98,
  },
  {
    URL: "/assets/Trending Collection/10.svg",
    Name: "MR. Bean",
    Type: "Floor",
    CoinIco: "/assets/eth.svg",
    Amount: "69.98",
    Percent: -58,
  },
  {
    URL: "/assets/Trending Collection/11.svg",
    Name: "Boring",
    Type: "Floor",
    CoinIco: "/assets/eth.svg",
    Amount: "69.98",
    Percent: 98,
  },
  {
    URL: "/assets/Trending Collection/12.svg",
    Name: "Cyber Punk",
    Type: "Floor",
    CoinIco: "/assets/eth.svg",
    Amount: "69.98",
    Percent: 98,
  },
];

const Aution_collection = [
  {
    URL: "/assets/Aution_collection/1.svg",
    Name: "An Interstellar Wanderer",
    des: "Consectetur adipiscing elit. Non mi viverra ut scelerisque. ",
    Bid: 0.1,
    Timer: "12H : 43M : 27S",
    CoinIco: "/assets/eth.svg",
  },
  {
    URL: "/assets/Aution_collection/2.svg",
    Name: "Floating Space",
    des: "Consectetur adipiscing elit. Non mi viverra ut scelerisque. ",
    Bid: 0.1,
    Timer: "12H : 43M : 27S",
    CoinIco: "/assets/eth.svg",
  },
  {
    URL: "/assets/Aution_collection/3.svg",
    Name: "Moon Boy",
    des: "Consectetur adipiscing elit. Non mi viverra ut scelerisque. ",
    Bid: 0.1,
    Timer: "12H : 43M : 27S",
    CoinIco: "/assets/eth.svg",
  },
  {
    URL: "/assets/Aution_collection/2.svg",
    Name: "Floating Space",
    des: "Consectetur adipiscing elit. Non mi viverra ut scelerisque. ",
    Bid: 0.1,
    Timer: "12H : 43M : 27S",
    CoinIco: "/assets/eth.svg",
  },
  {
    URL: "/assets/Aution_collection/3.svg",
    Name: "Moon Boy",
    des: "Consectetur adipiscing elit. Non mi viverra ut scelerisque. ",
    Bid: 0.1,
    Timer: "12H : 43M : 27S",
    CoinIco: "/assets/eth.svg",
  },
];
