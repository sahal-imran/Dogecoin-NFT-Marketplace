import React, { useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

function ExploreCollection() {
  const [AllItem, Set_AllItem] = useState(true);
  const [Art, Set_Art] = useState(false);
  const [Game, Set_Game] = useState(false);
  const [PhotoGraphy, Set_PhotoGraphy] = useState(false);
  const [Music, Set_Music] = useState(false);

  const Show_Allitem = () => {
    Set_AllItem(true);
    Set_Art(false);
    Set_Game(false);
    Set_PhotoGraphy(false);
    Set_Music(false);
  };
  const Show_Art = () => {
    Set_AllItem(false);
    Set_Art(true);
    Set_Game(false);
    Set_PhotoGraphy(false);
    Set_Music(false);
  };
  const Show_Game = () => {
    Set_AllItem(false);
    Set_Art(false);
    Set_Game(true);
    Set_PhotoGraphy(false);
    Set_Music(false);
  };
  const Show_PhotoGraphy = () => {
    Set_AllItem(false);
    Set_Art(false);
    Set_Game(false);
    Set_PhotoGraphy(true);
    Set_Music(false);
  };
  const Show_Music = () => {
    Set_AllItem(false);
    Set_Art(false);
    Set_Game(false);
    Set_PhotoGraphy(false);
    Set_Music(true);
  };

  const Filter_BTNS = [
    {
      Name: "All Items",
      Current_State: AllItem,
      Clickable_Btn: Show_Allitem,
    },
    {
      Name: "Art",
      Current_State: Art,
      Clickable_Btn: Show_Art,
    },
    {
      Name: "Game",
      Current_State: Game,
      Clickable_Btn: Show_Game,
    },
    {
      Name: "Photography",
      Current_State: PhotoGraphy,
      Clickable_Btn: Show_PhotoGraphy,
    },
    {
      Name: "Music",
      Current_State: Music,
      Clickable_Btn: Show_Music,
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
            justifyContent: "center",
            alignItems: { md: "start", xs: "center" },
            flexDirection: "column",
            borderRadius: "8px",
            overflow: "hidden",
            p: { md: 4, xs: 0 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "Syne",
              color: "white",
              fontSize: { md: "48px", xs: "40px" },
              lineHeight: { md: "57.6px", xs: "52px" },
              fontWeight: 700,
              fontStyle: "normal",
              textTransform: "capitalize",
              textAlign: { md: "start", xs: "center" },
            }}
          >
            Explore Collection
          </Typography>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: { md: "space-between", xs: "center" },
              alignItems: "center",
              flexDirection: {
                lg: "row",
                xs: "column",
              },
              mt: { md: 10, xs: 3 },
            }}
          >
            <Button
              variant="outlined"
              sx={{
                p: 0,
                width: "240px",
                height: "66px",
                borderRadius: "5px",
                borderColor: "white",
                fontFamily: "Syne",
                color: "white",
                fontSize: "18px",
                lineHeight: "24px",
                fontWeight: 600,
                fontStyle: "normal",
                textTransform: "capitalize",
                "&:hover": {
                  borderColor: "white",
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Recently Added
              <img
                src="/assets/DownArrowWhite.svg"
                alt="Arrow"
                style={{
                  width: "24px",
                  height: "24px",
                  objectFit: "contain",
                  marginLeft: "12px",
                }}
              />
            </Button>

            {/* Direct Select */}
            <Box
              sx={{
                maxWidth: { lg: "unset", xs: "100%" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                my: { lg: 0, xs: 3 },
                overflowY: "auto",
                pl: { sm: 0, xs: 20 },
              }}
            >
              {Filter_BTNS.map((item, index) => {
                return (
                  <Button
                    key={index}
                    variant="text"
                    onClick={item.Clickable_Btn}
                    sx={
                      item.Current_State
                        ? {
                            p: 0,
                            minWidth: { md: "128px", xs: "100px" },
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
                            mx: { md: 1 },
                          }
                        : {
                            p: 0,
                            minWidth: { md: "128px", xs: "100px" },
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
                            mx: { md: 1 },
                          }
                    }
                  >
                    {item.Name}
                  </Button>
                );
              })}
            </Box>

            {/* Filter */}
            <Button
              variant="outlined"
              sx={{
                p: 0,
                width: { md: "160px", xs: "240px" },
                height: "66px",
                borderRadius: "5px",
                borderColor: "white",
                fontFamily: "Syne",
                color: "white",
                fontSize: "18px",
                lineHeight: "24px",
                fontWeight: 600,
                fontStyle: "normal",
                textTransform: "capitalize",
                "&:hover": {
                  borderColor: "white",
                },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Filter
              <img
                src="/assets/filter.svg"
                alt="Arrow"
                style={{
                  width: "24px",
                  height: "24px",
                  objectFit: "contain",
                  marginLeft: "12px",
                }}
              />
            </Button>
          </Box>
        </Box>

        {/* Cards */}
        <Box sx={{ flexGrow: 1, width: "100%", my: 10 }}>
          <Grid
            container
            columnSpacing={{ md: 1, xs: 0 }}
            rowSpacing={{ md: 1, xs: 4 }}
          >
            {ExploreCollectionData.map((item, index) => {
              return (
                <Grid key={index} item xs={12} sm={6} md={3}>
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
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Syne",
                        color: "#737373",
                        fontSize: { md: "18px", xs: "16px" },
                        lineHeight: { md: "21px", xs: "26px" },
                        fontWeight: 400,
                        fontStyle: "normal",
                        textAlign: "center",
                        my: 1,
                      }}
                    >
                      {item.des}
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
                        {item.price}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>

        {/* View ALL */}
        <NavLink to="/collectiondetail" style={{ textDecoration: "none" }}>
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
              background: "linear-gradient(90deg, #E0D1D5 0%, #D6D6D6 100%)",
              boxShadow: "none",
              "&:hover": {
                background: "linear-gradient(90deg, #E0D1D5 0%, #D6D6D6 100%)",
                boxShadow: "none",
              },
            }}
          >
            View all
          </Button>
        </NavLink>
      </Box>
    </>
  );
}

export default ExploreCollection;

const ExploreCollectionData = [
  {
    URL: "/assets/ExploreCollection/1.svg",
    name: "Boring Ape",
    des: "Volume Total",
    price: "277.9k",
  },
  {
    URL: "/assets/ExploreCollection/2.svg",
    name: "Pixels",
    des: "Volume Total",
    price: "277.9k",
  },
  {
    URL: "/assets/ExploreCollection/3.svg",
    name: "Frozen People",
    des: "Volume Total",
    price: "277.9k",
  },
  {
    URL: "/assets/ExploreCollection/4.svg",
    name: "Hen n Bun",
    des: "Volume Total",
    price: "277.9k",
  },
  {
    URL: "/assets/ExploreCollection/5.svg",
    name: "Spicy Chicken",
    des: "Volume Total",
    price: "277.9k",
  },
  {
    URL: "/assets/ExploreCollection/6.svg",
    name: "Rabbits",
    des: "Volume Total",
    price: "277.9k",
  },
  {
    URL: "/assets/ExploreCollection/7.svg",
    name: "Zombies",
    des: "Volume Total",
    price: "277.9k",
  },
  {
    URL: "/assets/ExploreCollection/8.svg",
    name: "Abstract",
    des: "Volume Total",
    price: "277.9k",
  },
];
