import React, { useState } from "react";
import "./style.css";
import Tomoato from "../../assets/tomatoes.png";
import Meal1 from "../../assets/meal.png";
import Meal2 from "../../assets/meal-2.png";
import Meal3 from "../../assets/meal-3.png";
import Meal4 from "../../assets/meal-4.png";
import Meal5 from "../../assets/meal-5.png";

import Back from "../../assets/back.png";
import Next from "../../assets/right.svg";

const Index = () => {
  const [page, setPage] = useState(1);

  const contentData = [
    [
      {
        imageurl: Tomoato,
        heading: "Grilled Tomatoes at Home",
        subheading:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      },
      {
        imageurl: Meal1,

        heading: "Snacks for Travel",
        subheading:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      },
      {
        imageurl: Meal2,

        heading: "Post-workout Recipes",
        subheading:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      },
    ],
    [
      {
        imageurl: Meal3,

        heading: "How To Grill Corn",
        subheading:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      },
      {
        imageurl: Meal4,
        heading: "Crunchwrap Supreme",
        subheading:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      },
      {
        imageurl: Meal5,
        heading: "Broccoli Cheese Soup",
        subheading:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      },
    ],
    // Add more content data as needed for each card
  ];

  const nextPage = () => {
    if (page < 2) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  console.log("hello", contentData[page - 1]);

  return (
    <div className="pagination-container">
      <div className="pagination-heading">Latest Articles</div>

      <div className="parent">
        {contentData[page - 1].map((data, index) => (
          <div className="pagination-card" key={index}>
            <div>
              <img src={data.imageurl} alt="" />
            </div>
            <div style={{ padding: "20px 0" }}>
              <div className="pagination-box-heading">{data.heading}</div>
              <div className="pagination-box-subheading">{data.subheading}</div>
            </div>
            <div>
              <button className="pagination-box-button">Read More</button>
            </div>
          </div>
        ))}
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "35px" }}
      >
        <button
          className="pagination-button"
          onClick={prevPage}
          disabled={page === 1}
        >
          <img src={Back} alt="" />
        </button>
        <div style={{ padding: "0px 8px" }}>{page}/2</div>
        <button
          className="pagination-button"
          onClick={nextPage}
          disabled={page === 2}
        >
          <img src={Next} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Index;
