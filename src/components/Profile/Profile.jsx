import React, { useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Profile() {
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
            justifyContent: "end",
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
        <Box sx={{ flexGrow: 1, width: "100%" }}>
          <Grid container spacing={2}>
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
                  width: "90%",
                  height: "834px",
                  background: "#242424",
                  borderRadius: "10px",
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                  p: 4,
                  mt: "-80px",
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
                    width:'100%',
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
                      mt:2
                    }}
                  >
                    Member Since Mar 15, 2021
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={9}></Grid>
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
