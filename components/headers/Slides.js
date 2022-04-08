import React from "react";
import StepperUI from "./Stepper";
import CardUI from "./Card1";
import CardUI2 from "./Card2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
import useMediaQuery from "@mui/material/useMediaQuery";

const data = [
  {
    url: "./images/dance.webp",
    name: "Dance",
  },
  {
    name: "Sports",
    url: "./images/sports.jpg",
  },
  {
    name: "Fashion",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-CP97csBJhunIQeTKIaeoc17LcAR50wx2ow&usqp=CAU",
  },
  {
    name: "Concert",
    url: "./images/concert.jpg",
  },
];
export default function StartingComponent() {
  const m1 = useMediaQuery("(min-width:430px)");
  const m2 = useMediaQuery("(min-width:700px)");
  const m3 = useMediaQuery("(min-width:1000px)");
  const m4 = useMediaQuery("(min-width:1300px)");
  const m5 = useMediaQuery("(min-width:1700px)");
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <StepperUI />
      </div>
      <div
        style={{
          marginTop: m1 ? "-140px" : "-100px",
          paddingLeft: m1 ? "10%" : "0%",
          paddingRight: m1 ? "10%" : "0%",
        }}
      >
        <Swiper
          direction={"horizontal"}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            300: {
              slidesPerView: 3,
              spaceBetween: 1,
            },

            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 1,
            },
          }}
          pagination={{ clickable: true }}
          style={{
            height: m1 ? "300px" : "200px",
          }}
        >
          {data.map((card, index) => {
            return (
              <SwiperSlide
                key={index + "top component"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {m1 ? (
                  <CardUI
                    image={card.url}
                    data={{
                      name: card.name,
                      route: null,
                    }}
                  />
                ) : (
                  <CardUI2
                    image={card.url}
                    data={{
                      name: card.name,
                      route: null,
                    }}
                  />
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
