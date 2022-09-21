import React, { useState, useRef } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";

function Profile() {
  const [On_Sale, Set_On_Sale] = useState(true);
  const [Collectibles, Set_Collectibles] = useState(false);
  const [Created, Set_Created] = useState(false);
  const [Likes, Set_Likes] = useState(false);
  const [Following, Set_Following] = useState(false);
  const [Followers, Set_Followers] = useState(false);

  const On_Sale_Click = () => {
    Set_On_Sale(true);
    Set_Collectibles(false);
    Set_Created(false);
    Set_Likes(false);
    Set_Following(false);
    Set_Followers(false);
  };
  const Collectibles_Click = () => {
    Set_On_Sale(false);
    Set_Collectibles(true);
    Set_Created(false);
    Set_Likes(false);
    Set_Following(false);
    Set_Followers(false);
  };
  const Created_Click = () => {
    Set_On_Sale(false);
    Set_Collectibles(false);
    Set_Created(true);
    Set_Likes(false);
    Set_Following(false);
    Set_Followers(false);
  };
  const Likes_Click = () => {
    Set_On_Sale(false);
    Set_Collectibles(false);
    Set_Created(false);
    Set_Likes(true);
    Set_Following(false);
    Set_Followers(false);
  };
  const Following_Click = () => {
    Set_On_Sale(false);
    Set_Collectibles(false);
    Set_Created(false);
    Set_Likes(false);
    Set_Following(true);
    Set_Followers(false);
  };
  const Followers_Click = () => {
    Set_On_Sale(false);
    Set_Collectibles(false);
    Set_Created(false);
    Set_Likes(false);
    Set_Following(false);
    Set_Followers(true);
  };

  const ProfilesBUtton = [
    {
      Name: "On Sale",
      Current_State: On_Sale,
      fuc: On_Sale_Click,
    },
    {
      Name: "Collectibles",
      Current_State: Collectibles,
      fuc: Collectibles_Click,
    },
    {
      Name: "Created",
      Current_State: Created,
      fuc: Created_Click,
    },
    {
      Name: "Likes",
      Current_State: Likes,
      fuc: Likes_Click,
    },
    {
      Name: "Following",
      Current_State: Following,
      fuc: Following_Click,
    },
    {
      Name: "Followers",
      Current_State: Followers,
      fuc: Followers_Click,
    },
  ];

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
            height: { xs: "328px", xs: "400px" },
            display: "flex",
            justifyContent: { md: "end", xs: "center" },
            alignItems: { md: "end", xs: "center" },
            flexDirection: "column",
            borderRadius: "8px",
            overflow: "hidden",
            px: { md: 6, xs: 0 },
            py: { md: 4, xs: 0 },
          }}
        >
          <Button
            variant="outlined"
            sx={{
              p: 0,
              width: "182px",
              height: "48px",
              borderRadius: "10px",
              borderColor: "#EDEDED",
              fontFamily: "Syne",
              color: "#EDEDED",
              fontSize: "18px",
              lineHeight: "23px",
              fontWeight: 400,
              fontStyle: "normal",
              textTransform: "capitalize",
              "&:hover": {
                borderColor: "#EDEDED",
              },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Edit Profile
            <img
              src="/assets/edit.svg"
              alt="logo"
              style={{
                width: "24pxx",
                height: "24px",
                objectFit: "contain",
                marginLeft: "16px",
              }}
            />
          </Button>
        </Box>

        {/* Profile */}
        <Box sx={{ flexGrow: 1, width: "100%", mt: 8 }}>
          <Grid container columnSpacing={{ md: 4 }}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
              item
              xs={12}
              md={3}
            >
              {/* Profile Card */}
              <Box
                sx={{
                  width: { md: "90%", xs: "100%" },
                  height: { md: "760px", xs: "650px" },
                  background: "#242424",
                  borderRadius: "10px",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                  p: 4,
                  mt: { md: "-120px", xs: 2 },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  {/* Profile Image */}
                  <Box
                    sx={{
                      width: { sm: "175px", xs: "175px" },
                      height: "175px",
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src="/assets/user.svg"
                      alt="logo"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Box>

                  {/* Name */}
                  <Typography
                    sx={{
                      fontFamily: "Syne",
                      color: "white",
                      fontSize: { md: "20px", xs: "18px" },
                      lineHeight: { md: "24px", xs: "24px" },
                      fontWeight: 700,
                      fontStyle: "normal",
                      textTransform: "capitalize",
                      mt: 2,
                    }}
                  >
                    John Wick
                  </Typography>

                  {/* metamask Address*/}
                  <Typography
                    sx={{
                      fontFamily: "Syne",
                      color: "#7A7A7A",
                      fontSize: { md: "20px", xs: "18px" },
                      lineHeight: { md: "24px", xs: "24px" },
                      fontWeight: 700,
                      fontStyle: "normal",
                      textTransform: "capitalize",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      my: 1,
                    }}
                  >
                    0xcc1666893...612a
                    <Box
                      sx={{
                        width: "24px",
                        height: "24px",
                      }}
                    >
                      <img
                        src="/assets/metamask.svg"
                        alt="logo"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  </Typography>

                  {/* description */}
                  <Typography
                    sx={{
                      fontFamily: "Syne",
                      color: "#737373",
                      fontSize: "16px",
                      lineHeight: "24px",
                      fontWeight: 400,
                      fontStyle: "normal",
                      textAlign: "center",
                    }}
                  >
                    Consectetur adipiscing elit. Non mi viverra ut scelerisque.
                    Ultrices enim ac lectus est egestas at. In convallis turpis
                    sed egestas.
                  </Typography>

                  {/* Button for follow, share, and more */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mt: 6,
                    }}
                  >
                    {/* FOllow Button */}
                    <Button
                      variant="contained"
                      sx={{
                        p: 0,
                        width: "118px",
                        height: "39px",
                        borderRadius: "5px",
                        fontFamily: "Syne",
                        color: "white",
                        fontSize: "16px",
                        lineHeight: "19.5px",
                        fontWeight: 700,
                        fontStyle: "normal",
                        textTransform: "capitalize",
                        boxShadow: "none",
                        borderRadius: "50px",
                        background:
                          "linear-gradient(90deg, #BA9F33 0%, #E1CE83 100%)",
                      }}
                    >
                      Follow
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        p: 0,
                        minWidth: "39px",
                        width: "39px",
                        height: "39px",
                        textTransform: "capitalize",
                        borderRadius: "50px",
                        borderColor: "white",
                        mx: 1,
                        "&:hover": {
                          borderColor: "white",
                        },
                      }}
                    >
                      <img
                        src="/assets/share.svg"
                        alt="logo"
                        style={{
                          width: "22px",
                          height: "22px",
                          objectFit: "contain",
                        }}
                      />
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{
                        p: 0,
                        minWidth: "39px",
                        width: "39px",
                        height: "39px",
                        textTransform: "capitalize",
                        borderRadius: "50px",
                        borderColor: "white",
                        "&:hover": {
                          borderColor: "white",
                        },
                      }}
                    >
                      <img
                        src="/assets/more.svg"
                        alt="logo"
                        style={{
                          width: "22px",
                          height: "22px",
                          objectFit: "contain",
                        }}
                      />
                    </Button>
                  </Box>

                  {/* Social icons */}
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      mt: 6,
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

                {/* Bottom */}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{ width: "100%", height: "1px", background: "#000000" }}
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
                    Member Since Mar 15, 2021
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  flexDirection: "column",
                }}
              >
                {/* Button */}
                <Box
                  sx={{
                    maxWidth: { lg: "unset", xs: "100%" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    my: { lg: 0, xs: 4 },
                    overflowY: "auto",
                  }}
                >
                  {ProfilesBUtton.map((item, index) => {
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
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                "&:hover": {
                                  background: "#FFFFFF",
                                },
                                whiteSpace: "nowrap",
                                mx: 1,
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
                              }
                        }
                      >
                        {item.Name}
                      </Button>
                    );
                  })}
                </Box>

                {/* cards */}
                <Box sx={{ flexGrow: 1, width: "100%", mt: 8 }}>
                  <Grid container spacing={2}>
                    {Cards.map((item, index) => {
                      return (
                        <Grid key={index} xs={12} sm={6} md={4}>
                          <NavLink
                            to={item.to}
                            style={{ textDecoration: "none" }}
                          >
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
                              <Box
                                sx={{
                                  mt: 2,
                                  width: "100%",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  sx={{
                                    fontFamily: "Syne",
                                    color: "white",
                                    fontSize: { md: "24px", xs: "20px" },
                                    lineHeight: { md: "28.8px", xs: "26px" },
                                    fontWeight: 700,
                                    fontStyle: "normal",
                                    textTransform: "capitalize",
                                  }}
                                >
                                  {item.Name}
                                </Typography>
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
                                  mr: 2,
                                }}
                              >
                                {item.Stocks}
                              </Typography>
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
                          </NavLink>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default Profile;

const Socail_Links = [
  {
    Name: "discord",
    icoURL: "/assets/discordgray.svg",
    ref: "",
  },
  {
    Name: "twitter",
    icoURL: "/assets/twittergray.svg",
    ref: "",
  },
  {
    Name: "instagram",
    icoURL: "/assets/instagramgray.svg",
    ref: "",
  },
  {
    Name: "bi",
    icoURL: "/assets/bigray.svg",
    ref: "",
  },
];

const Cards = [
  {
    to: "/nftdetails",
    URL: "/assets/Upcoming collection/1.svg",
    Name: "Boring Ape",
    Price: "2.56 ETH",
    Stocks: "3 in Stock",
    Hightest_Bid: "Highest bid 0.001 ETH",
  },
  {
    to: "/nftdetails",
    URL: "/assets/Upcoming collection/2.svg",
    Name: "Boring Ape",
    Price: "2.56 ETH",
    Stocks: "3 in Stock",
    Hightest_Bid: "Highest bid 0.001 ETH",
  },
  {
    to: "/nftdetails",
    URL: "/assets/Upcoming collection/3.svg",
    Name: "Boring Ape",
    Price: "2.56 ETH",
    Stocks: "3 in Stock",
    Hightest_Bid: "Highest bid 0.001 ETH",
  },
];
