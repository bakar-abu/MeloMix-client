import React from "react";
import Slider from "react-slick";
import { HiOutlineUser } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const History = () => {
  const recentlyListenedSongs = [
    { id: 1, title: "Song 1", singer: "Singer 1", time: "3:45" },
    { id: 2, title: "Song 2", singer: "Singer 2", time: "4:20" },
    { id: 3, title: "Song 3", singer: "Singer 1", time: "3:45" },
    { id: 4, title: "Song 4", singer: "Singer 2", time: "4:20" },
    { id: 5, title: "Song 5", singer: "Singer 1", time: "3:45" },
    { id: 6, title: "Song 6", singer: "Singer 2", time: "4:20" },
    { id: 7, title: "Song 7", singer: "Singer 1", time: "3:45" },
    { id: 8, title: "Song 8", singer: "Singer 2", time: "4:20" },
    { id: 9, title: "Song 9", singer: "Singer 1", time: "3:45" },
    { id: 10, title: "Song 10", singer: "Singer 2", time: "4:20" },
    // Add more songs as needed
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards to show for mobile
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3, // Number of cards to show for mobile (no change)
        },
      },
    ],
  };

  return (
    <div className="md:w-[85%] w-[80%] ] mx-auto mt-8 opacity-50 hover:opacity-100">
        <p className="text-white text-4xl font-semibold text-center">History</p>
      <Slider {...settings} className="slider">
        {recentlyListenedSongs.map((song) => (
          <div key={song.id} className="slide ">
            <div className="max-w-sm bg-white rounded-lg shadow-lg m-2">
              <div className="p-4">
                <HiOutlineUser className="text-emerald-600 md:text-[100px] text-[70px]" />
                <div className="mt-4">
                  <p className="text-xl font-semibold">{song.title}</p>
                  <p className="text-gray-600">{song.singer}</p>
                  <p className="text-gray-600">{song.time}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};